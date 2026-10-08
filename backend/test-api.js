import http from 'http'
import app from './src/app.js'

const TEST_PORT = 5088

const server = app.listen(TEST_PORT, async () => {
  console.log(`\n========================================`)
  console.log(`🧪 Testing Athlete ID India Backend API on port ${TEST_PORT}`)
  console.log(`========================================\n`)
  
  const testEndpoint = (path, method = 'GET', body = null) => {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: '127.0.0.1',
        port: TEST_PORT,
        path,
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const req = http.request(options, (res) => {
        let data = ''
        res.on('data', (chunk) => data += chunk)
        res.on('end', () => {
          try {
            const json = JSON.parse(data)
            resolve({ status: res.statusCode, data: json })
          } catch (e) {
            resolve({ status: res.statusCode, data })
          }
        })
      })

      req.on('error', reject)
      if (body) {
        req.write(JSON.stringify(body))
      }
      req.end()
    })
  }

  let passed = 0
  let total = 0

  const assertTest = (name, condition, details = '') => {
    total++
    if (condition) {
      passed++
      console.log(`✅ [PASS] ${name}`)
    } else {
      console.error(`❌ [FAIL] ${name}: ${details}`)
    }
  }

  try {
    // 1. Health Check
    const health = await testEndpoint('/api/health')
    assertTest('GET /api/health returns 200 and healthy status', health.status === 200 && health.data.status === 'healthy')

    // 2. Get Athletes
    const athletes = await testEndpoint('/api/athletes')
    assertTest('GET /api/athletes returns list', athletes.status === 200 && athletes.data.success && athletes.data.count >= 4)

    // 3. Get Single Athlete
    const singleAthlete = await testEndpoint('/api/athletes/1')
    assertTest('GET /api/athletes/1 returns Arjun Sharma', singleAthlete.status === 200 && singleAthlete.data.data.name === 'Arjun Sharma')

    // 4. Create Athlete
    const createAth = await testEndpoint('/api/athletes', 'POST', {
      name: 'Neeraj Chopra Test',
      sport: 'Javelin Throw',
      category: 'Track & Field',
      location: 'Haryana, India'
    })
    assertTest('POST /api/athletes creates athlete profile', createAth.status === 201 && createAth.data.success)

    // 5. Verification Endpoint
    const ver = await testEndpoint('/api/verification/verify', 'POST', {
      fullName: 'Neeraj Chopra Test',
      sport: 'Javelin',
      aadhaarNumber: 'XXXX-XXXX-1234',
      institutionName: 'SAI National Centre'
    })
    assertTest('POST /api/verification/verify returns verified status and badge', ver.status === 201 && ver.data.status === 'verified')

    // 6. Opportunities & AI Matching
    const opps = await testEndpoint('/api/opportunities')
    assertTest('GET /api/opportunities returns opportunities', opps.status === 200 && opps.data.count >= 5)

    const aiMatch = await testEndpoint('/api/opportunities/matching?sport=Athletics')
    assertTest('GET /api/opportunities/matching returns AI matched score', aiMatch.status === 200 && aiMatch.data.matchedCount > 0)

    // 7. Analytics Dashboard
    const dashboard = await testEndpoint('/api/analytics/dashboard')
    assertTest('GET /api/analytics/dashboard returns metrics', dashboard.status === 200 && dashboard.data.data.winRate === '78%')

    // 8. Authentication
    const auth = await testEndpoint('/api/auth/login', 'POST', { email: 'athlete@example.com', password: 'password123' })
    assertTest('POST /api/auth/login returns user token and profile', auth.status === 200 && auth.data.user.token)

    // 9. Contact / Newsletter
    const contact = await testEndpoint('/api/contact', 'POST', { name: 'Coach Saini', email: 'coach@example.com', message: 'Hello' })
    assertTest('POST /api/contact submits inquiry', contact.status === 201 && contact.data.success)

    const news = await testEndpoint('/api/newsletter/subscribe', 'POST', { email: 'fan@example.com' })
    assertTest('POST /api/newsletter/subscribe subscribes user', news.status === 201 && news.data.success)

    console.log(`\n========================================`)
    console.log(`🎯 Test Summary: ${passed}/${total} tests passed!`)
    console.log(`========================================\n`)

  } catch (err) {
    console.error('Test execution error:', err)
  } finally {
    server.close(() => {
      console.log('Test server closed cleanly.')
      process.exit(passed === total ? 0 : 1)
    })
  }
})

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const register = (req, res) => {
  const { email, password, fullName, role, sport } = req.body

  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: 'A valid email address is required',
    })
  }

  if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Full name is required',
    })
  }

  const athleteId = `AID-IN-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    user: {
      id: `USR-${Date.now()}`,
      email: email.trim().toLowerCase(),
      fullName: fullName.trim(),
      role: (role || 'Athlete').trim(),
      sport: (sport || 'Athletics').trim(),
      athleteId,
      token: `jwt-token-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    },
  })
}

export const login = (req, res) => {
  const { email, password } = req.body

  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: 'A valid email address is required',
    })
  }

  res.json({
    success: true,
    message: 'Login successful',
    user: {
      id: 'USR-8921',
      email: email.trim().toLowerCase(),
      fullName: 'Arjun Sharma',
      role: 'Athlete',
      athleteId: 'AID-IN-2024-00847',
      token: `jwt-token-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    },
  })
}

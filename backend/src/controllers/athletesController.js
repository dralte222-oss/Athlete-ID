import { athletes } from '../data/mockData.js'

export const getAthletes = (req, res) => {
  const { sport, verified, search } = req.query
  let result = [...athletes]

  if (sport) {
    result = result.filter(a => a.sport.toLowerCase().includes(sport.toLowerCase()))
  }
  if (verified !== undefined) {
    result = result.filter(a => String(a.verified) === verified)
  }
  if (search) {
    const q = search.toLowerCase()
    result = result.filter(a => a.name.toLowerCase().includes(q) || a.sport.toLowerCase().includes(q) || a.location.toLowerCase().includes(q))
  }

  res.json({
    success: true,
    count: result.length,
    data: result,
  })
}

export const getAthleteById = (req, res) => {
  const { id } = req.params
  const athlete = athletes.find(a => a.id === id || a.athleteId === id)

  if (!athlete) {
    return res.status(404).json({
      success: false,
      message: `Athlete with ID ${id} not found`,
    })
  }

  res.json({
    success: true,
    data: athlete,
  })
}

export const createAthlete = (req, res) => {
  const { name, sport, category, location, bio } = req.body

  if (!name || !sport) {
    return res.status(400).json({
      success: false,
      message: 'Name and sport are required fields',
    })
  }

  const newId = String(athletes.length + 1)
  const randomNum = Math.floor(10000 + Math.random() * 90000)
  const newAthlete = {
    id: newId,
    athleteId: `AID-IN-${new Date().getFullYear()}-${randomNum}`,
    name,
    sport,
    category: category || 'General',
    location: location || 'India',
    avatar: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=128&h=128&fit=crop&auto=format',
    rating: 5.0,
    overallScore: 85,
    verified: false,
    stats: { speed: 85, power: 80, endurance: 82, agility: 84 },
    achievements: [],
    tournaments: [],
    bio: bio || 'Aspiring Indian athlete.',
  }

  athletes.push(newAthlete)

  res.status(201).json({
    success: true,
    message: 'Athlete profile created successfully',
    data: newAthlete,
  })
}

export const updateAthlete = (req, res) => {
  const { id } = req.params
  const index = athletes.findIndex(a => a.id === id || a.athleteId === id)

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Athlete with ID ${id} not found`,
    })
  }

  athletes[index] = { ...athletes[index], ...req.body }

  res.json({
    success: true,
    message: 'Athlete profile updated successfully',
    data: athletes[index],
  })
}

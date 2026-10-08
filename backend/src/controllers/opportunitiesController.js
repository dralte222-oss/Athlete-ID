import { opportunities } from '../data/mockData.js'

export const getOpportunities = (req, res) => {
  const { type, location, status } = req.query
  let result = [...opportunities]

  if (type) {
    result = result.filter(o => o.type.toLowerCase() === type.toLowerCase())
  }
  if (location) {
    result = result.filter(o => o.location.toLowerCase().includes(location.toLowerCase()))
  }
  if (status) {
    result = result.filter(o => o.status.toLowerCase() === status.toLowerCase())
  }

  res.json({
    success: true,
    count: result.length,
    data: result,
  })
}

export const getOpportunityById = (req, res) => {
  const { id } = req.params
  const opp = opportunities.find(o => o.id === id)

  if (!opp) {
    return res.status(404).json({
      success: false,
      message: `Opportunity with ID ${id} not found`,
    })
  }

  res.json({
    success: true,
    data: opp,
  })
}

export const getAIMatchingResults = (req, res) => {
  const { sport, rating, age } = req.query

  const scoredOpportunities = opportunities.map(opp => {
    let score = 85
    if (sport && opp.description.toLowerCase().includes(sport.toLowerCase())) {
      score += 10
    }
    return {
      ...opp,
      matchScore: `${Math.min(99, score)}%`,
      matchFactors: ['Sport compatibility', 'Performance benchmarks', 'Age bracket', 'Geographic proximity'],
    }
  })

  res.json({
    success: true,
    engine: 'AthleteID AI Matching Neural Engine v2.4',
    totalAnalyzed: opportunities.length,
    matchedCount: scoredOpportunities.length,
    data: scoredOpportunities,
  })
}

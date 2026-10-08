import { dashboardStats, athletes } from '../data/mockData.js'

export const getDashboardAnalytics = (req, res) => {
  res.json({
    success: true,
    data: dashboardStats,
  })
}

export const getLeaderboard = (req, res) => {
  const sorted = [...athletes].sort((a, b) => b.overallScore - a.overallScore)
  res.json({
    success: true,
    data: sorted.map((a, index) => ({
      rank: index + 1,
      id: a.id,
      name: a.name,
      sport: a.sport,
      overallScore: a.overallScore,
      rating: a.rating,
      verified: a.verified,
    })),
  })
}

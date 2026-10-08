import { Router } from 'express'
import {
  getDashboardAnalytics,
  getLeaderboard,
} from '../controllers/analyticsController.js'

const router = Router()

router.get('/dashboard', getDashboardAnalytics)
router.get('/leaderboard', getLeaderboard)

export default router

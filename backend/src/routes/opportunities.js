import { Router } from 'express'
import {
  getOpportunities,
  getOpportunityById,
  getAIMatchingResults,
} from '../controllers/opportunitiesController.js'

const router = Router()

router.get('/', getOpportunities)
router.get('/matching', getAIMatchingResults)
router.get('/:id', getOpportunityById)

export default router

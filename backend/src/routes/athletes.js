import { Router } from 'express'
import {
  getAthletes,
  getAthleteById,
  createAthlete,
  updateAthlete,
} from '../controllers/athletesController.js'

const router = Router()

router.get('/', getAthletes)
router.get('/:id', getAthleteById)
router.post('/', createAthlete)
router.put('/:id', updateAthlete)

export default router

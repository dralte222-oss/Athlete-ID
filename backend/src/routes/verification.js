import { Router } from 'express'
import {
  submitVerification,
  getVerificationStatus,
} from '../controllers/verificationController.js'

const router = Router()

router.post('/verify', submitVerification)
router.get('/status/:id', getVerificationStatus)

export default router

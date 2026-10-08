import { verifications, athletes } from '../data/mockData.js'

function maskAadhaar(raw) {
  if (!raw) return null
  const clean = String(raw).replace(/\D/g, '')
  if (clean.length < 4) return 'XXXX-XXXX-XXXX'
  const last4 = clean.slice(-4)
  return `XXXX-XXXX-${last4}`
}

export const submitVerification = (req, res) => {
  const { fullName, aadhaarNumber, sport, institutionName, documentType } = req.body

  if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Full name is required for verification',
    })
  }

  if (!sport || typeof sport !== 'string' || !sport.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Sport is required for verification',
    })
  }

  const trimmedName = fullName.trim()
  const trimmedSport = sport.trim()
  const verId = `VER-${Math.floor(1000 + Math.random() * 9000)}`
  const newAthleteId = `AID-IN-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`
  const maskedAadhaar = maskAadhaar(aadhaarNumber)

  const verificationRecord = {
    id: verId,
    athleteId: newAthleteId,
    athleteName: trimmedName,
    sport: trimmedSport,
    aadhaarMasked: maskedAadhaar,
    aadhaarStatus: maskedAadhaar ? 'Verified (UIDAI Sandbox)' : 'Pending Document Upload',
    federationStatus: 'Verified (National Sports Registry)',
    institutionStatus: institutionName ? `Verified (${institutionName.trim()})` : 'Self Declared',
    verifiedAt: new Date().toISOString(),
    badge: 'Gold Verified Passport',
    documentType: documentType || 'National ID / Sports Certificate',
  }

  verifications.push(verificationRecord)

  // Mark matching athlete as verified if found
  const matchingAthlete = athletes.find(a => a.name.toLowerCase() === trimmedName.toLowerCase())
  if (matchingAthlete) {
    matchingAthlete.verified = true
  }

  res.status(201).json({
    success: true,
    status: 'verified',
    athleteId: newAthleteId,
    verifiedAt: verificationRecord.verifiedAt,
    badgeIssued: true,
    message: 'Identity and credentials verified successfully.',
    data: verificationRecord,
  })
}

export const getVerificationStatus = (req, res) => {
  const { id } = req.params
  const record = verifications.find(v => v.id === id || v.athleteId === id)

  if (!record) {
    return res.status(404).json({
      success: false,
      message: `Verification record for ID ${id} not found`,
    })
  }

  res.json({
    success: true,
    data: record,
  })
}

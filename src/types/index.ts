export interface Athlete {
  id: string
  athleteId: string
  name: string
  sport: string
  category: string
  location: string
  avatar: string
  rating: number
  overallScore: number
  verified: boolean
  stats: {
    speed: number
    power: number
    endurance: number
    agility: number
  }
  achievements: string[]
  tournaments?: {
    name: string
    year: number
    position: string
    event: string
  }[]
  bio?: string
}

export interface Opportunity {
  id: string
  title: string
  type: 'scholarship' | 'trial' | 'sponsor' | 'university' | 'job' | 'academy'
  organization: string
  location: string
  deadline: string
  eligibility: string
  amount?: string
  description?: string
  status: 'Open' | 'Urgent' | 'Closing Soon'
  spots?: number
  matchScore?: string
  matchFactors?: string[]
}

export interface VerificationRequest {
  fullName: string
  aadhaarNumber?: string
  sport: string
  institutionName?: string
  documentType?: string
  documentUrl?: string
}

export interface VerificationResult {
  success: boolean
  status: 'verified' | 'pending' | 'rejected'
  athleteId: string
  verifiedAt: string
  badgeIssued: boolean
  message: string
  data?: Record<string, unknown>
}

export interface DashboardStats {
  winRate: string
  ranking: string
  trainingHours: number
  fitnessScore: string
  performanceIndex: number[]
  upcomingEvents: {
    event: string
    date: string
    status: 'Confirmed' | 'Pending' | 'Invited'
  }[]
  achievements: {
    title: string
    year: string
    icon: string
  }[]
}

export interface ContactSubmission {
  name: string
  email: string
  role?: string
  message?: string
}

import { contactInquiries, newsletterSubscribers } from '../data/mockData.js'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const submitContact = (req, res) => {
  const { name, email, role, message } = req.body

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: 'A valid name is required',
    })
  }

  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: 'A valid email address is required',
    })
  }

  const trimmedMessage = typeof message === 'string' ? message.trim().slice(0, 2000) : ''

  const inquiry = {
    id: `INQ-${Date.now()}`,
    name: name.trim().slice(0, 100),
    email: email.trim().toLowerCase().slice(0, 150),
    role: (typeof role === 'string' ? role.trim() : 'General').slice(0, 50),
    message: trimmedMessage,
    submittedAt: new Date().toISOString(),
  }

  contactInquiries.push(inquiry)

  res.status(201).json({
    success: true,
    message: 'Your inquiry has been received. Our team will contact you shortly.',
    data: inquiry,
  })
}

export const subscribeNewsletter = (req, res) => {
  const { email } = req.body

  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: 'A valid email address is required',
    })
  }

  const normalizedEmail = email.trim().toLowerCase().slice(0, 150)

  if (newsletterSubscribers.includes(normalizedEmail)) {
    return res.status(200).json({
      success: true,
      message: 'You are already subscribed to the Athlete ID newsletter.',
    })
  }

  newsletterSubscribers.push(normalizedEmail)

  res.status(201).json({
    success: true,
    message: 'Successfully subscribed to Athlete ID India newsletter updates.',
  })
}

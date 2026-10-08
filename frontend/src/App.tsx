import { useState } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import HowItWorks from './components/HowItWorks'
import AIMatching from './components/AIMatching'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CreateAthleteModal from './components/CreateAthleteModal'

export default function App() {
  useScrollReveal()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div className="min-h-full overflow-x-hidden">
      <Navbar onOpenModal={handleOpenModal} />
      <Hero onOpenModal={handleOpenModal} />
      <TrustedBy />
      <Problem />
      <Solution />
      <Features />
      <Dashboard />
      <HowItWorks onOpenModal={handleOpenModal} />
      <AIMatching />
      <Testimonials />
      <Pricing onOpenModal={handleOpenModal} />
      <FAQ />
      <CTA onOpenModal={handleOpenModal} />
      <Footer />
      <CreateAthleteModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

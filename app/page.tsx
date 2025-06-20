import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import PortfolioSection from "@/components/portfolio-section"
import InterestsSection from "@/components/interests-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import CursorEffect from "@/components/cursor-effect"
import BackgroundEffects from "@/components/background-effects"

export const metadata: Metadata = {
  title: "Kaden Chien | Personal Website",
  description: "Personal website showcasing skills, experience, and projects",
}

export default function Home() {
  return (
    <main className="relative">
      <CursorEffect />
      <BackgroundEffects />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <InterestsSection />
      <ContactSection />
    </main>
  )
}

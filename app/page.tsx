import { ParallaxHero } from '@/components/parallax-hero'
import { ContactStrip } from '@/components/home/contact-strip'
import { HowItWorks } from '@/components/home/how-it-works'
import { ServicesAirbnbSection } from '@/components/home/services-airbnb-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* PARALLAX HERO SECTION */}
      <ParallaxHero
        headline="Cleaning Service for Homes & Short-Stays in Accra."
        subheading="Gidz Cleaning Services provides reliable and professional cleaning solutions for homes, offices, apartments, Airbnb properties and commercial spaces in Accra, Ghana. We focus on quality, convenience and customer satisfaction."
        backgroundImage="/woman-is-holding-cleaning-product-gloves-rags-basin-white-wall.jpg"
      />

      {/* ✅ SERVICES SECTION (Airbnb-inspired category browsing UI + modal details) */}
      <ServicesAirbnbSection />

      <HowItWorks />

      <ContactStrip />
    </div>
  )
}

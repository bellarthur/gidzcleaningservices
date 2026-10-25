'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Hero } from '@/components/hero'
import { Section } from '@/components/section'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

const PRICE_TABLES = [
  {
    title: 'Cleaning Services',
    rows: [
      ['Small Bedroom Cleaning', 'GH₵ 300'],
      ['Standard Bedroom Cleaning', 'GH₵ 400'],
      ['Large Bedroom Cleaning', 'GH₵ 500'],
      ['Executive Bedroom Cleaning', 'GH₵ 700'],
      ['Single Room (Self-Contained)', 'GH₵ 500 - 800'],
      ['Studio Apartment', 'GH₵ 700 - 1,000'],
      ['1-Bedroom Apartment', 'GH₵ 900 - 1,300'],
      ['2-Bedroom Apartment', 'GH₵ 1,200 - 1,800'],
      ['3-Bedroom Apartment', 'GH₵ 1,800 - 2,500'],
      ['4-Bedroom Apartment', 'GH₵ 2,500 - 3,500'],
      ['5-Bedroom Luxury House', 'GH₵ 3,500 - 5,000'],
      ['Mansion / Large Property', 'Quotation Required'],
    ],
  },
  {
    title: 'Laundry Services',
    rows: [
      ['Regular Wash & Fold (per kg)', 'GH₵ 25'],
      ['Wash, Dry & Iron (per kg)', 'GH₵ 35'],
      ['Premium Ironing Only (per kg)', 'GH₵ 30'],
      ['Bedsheets (Single)', 'GH₵ 40'],
      ['Bedsheets (Double)', 'GH₵ 60'],
      ['Duvet Cover (Single)', 'GH₵ 60'],
      ['Duvet Cover (Double)', 'GH₵ 80'],
      ['Curtains (per kg)', 'GH₵ 80'],
      ['Blankets (Single)', 'GH₵ 50'],
      ['Blankets (Double)', 'GH₵ 60'],
      ['Pillow Case (each)', 'GH₵ 100'],
      ['Table Cloth (per piece)', 'GH₵ 10'],
      ['Other Laundry Items', 'GH₵ 40 - 100'],
    ],
  },
  {
    title: 'Airbnb & Short-Stay Cleaning',
    rows: [
      ['Studio Airbnb', 'GH₵ 400 - 600'],
      ['1-Bedroom Airbnb', 'GH₵ 500 - 800'],
      ['2-Bedroom Airbnb', 'GH₵ 800 - 1,200'],
      ['3-Bedroom Airbnb', 'GH₵ 1,200 - 1,700'],
      ['4-Bedroom Airbnb', 'GH₵ 1,700 - 2,300'],
      ['Luxury Airbnb / Villa', 'Quotation Required'],
      ['Guest Checkout Cleaning', 'From GH₵ 350'],
      ['Bed Linen Changing', 'From GH₵ 50'],
      ['Airbnb Deep Cleaning', 'From GH₵ 800'],
    ],
  },
  {
    title: 'Office & Commercial Cleaning',
    rows: [
      ['Small Office Cleaning', 'GH₵ 500 - 800'],
      ['Medium Office Cleaning', 'GH₵ 800 - 1,500'],
      ['Large Office Cleaning', 'GH₵ 1,500 - 3,000'],
      ['Executive Office Cleaning', 'GH₵ 400 - 700'],
      ['Conference / Meeting Room', 'GH₵ 400 - 800'],
      ['Reception & Waiting Area', 'GH₵ 400 - 700'],
      ['Retail Shop / Boutique', 'GH₵ 500 - 1,200'],
      ['Salon / Beauty Studio', 'GH₵ 600 - 1,500'],
      ['Spa & Wellness Centre', 'GH₵ 700 - 1,800'],
      ['Restaurant / Café', 'GH₵ 800 - 2,000'],
      ['School / Educational Facility', 'Quotation Required'],
      ['Hospital / Medical Facility', 'Quotation Required'],
      ['Warehouse / Industrial Space', 'Quotation Required'],
    ],
  },
  {
    title: 'Upholstery & Furniture Cleaning',
    rows: [
      ['Single-Seater Sofa', 'GH₵ 150 - 250'],
      ['Two-Seater Sofa', 'GH₵ 250 - 400'],
      ['Three-Seater Sofa', 'GH₵ 350 - 550'],
      ['L-Shaped Sofa', 'GH₵ 500 - 800'],
      ['Dining Chair', 'GH₵ 50 - 100'],
      ['Single Mattress', 'GH₵ 250 - 400'],
      ['Double Mattress', 'GH₵ 350 - 550'],
      ['King-Size Mattress', 'GH₵ 450 - 700'],
      ['Carpet Cleaning', 'From GH₵ 200'],
      ['Rug Cleaning', 'From GH₵ 150'],
    ],
  },
  {
    title: 'Deep Cleaning & Specialized Services',
    rows: [
      ['Kitchen Deep Cleaning', 'GH₵ 400 - 800'],
      ['Bathroom Deep Cleaning', 'GH₵ 300 - 600'],
      ['Toilet Cleaning & Sanitization', 'GH₵ 200 - 400'],
      ['Refrigerator Cleaning', 'GH₵ 150 - 300'],
      ['Oven Cleaning', 'GH₵ 150 - 300'],
      ['Interior Window Cleaning', 'From GH₵ 200'],
      ['Balcony / Terrace Cleaning', 'GH₵ 300 - 600'],
      ['Post-Construction Cleaning', 'From GH₵ 1,500'],
      ['Move-In Cleaning', 'From GH₵ 800'],
      ['Move-Out Cleaning', 'From GH₵ 800'],
      ['After-Party / Event Cleaning', 'From GH₵ 700'],
      ['Compound / Outdoor Cleaning', 'From GH₵ 500'],
      ['Water Tank Cleaning', 'Quotation Required'],
    ],
  },
]

function PriceTable({ title, rows }: (typeof PRICE_TABLES)[number]) {
  return (
    <motion.div {...fadeInUp} className="overflow-hidden rounded-lg border border-border bg-card">
      <h3 className="bg-primary px-5 py-4 text-xl font-bold text-primary-foreground sm:text-2xl">{title}</h3>
      <div className="divide-y divide-border">
        {rows.map(([service, price]) => (
          <div key={service} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 px-4 py-3.5 sm:px-5">
            <span className="text-sm text-foreground/80 sm:text-base">{service}</span>
            <span className="text-right text-sm font-bold text-accent sm:text-base">{price}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <Hero
        headline="Transparent, Premium Pricing"
        subheading="No surprises. We believe you deserve to know exactly what you're paying for. Our pricing reflects the quality and professionalism you'll receive."
      />

      {/* PRICING NOTE */}
      <Section className="bg-secondary/20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground/70 mb-4">
            Below are Gidz Cleaning Services' current published rates in Ghana cedis. Final pricing may vary by property size, condition, access, and scope.
          </p>
          <p className="text-sm text-foreground/60">
            Transportation charges apply for home bookings. Monthly office cleaning contracts are available.
          </p>
        </div>
      </Section>

      {/* UPDATED PRICE LIST */}
      <Section>
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Current Service Prices</h2>
        <div className="grid gap-6 lg:grid-cols-2 max-w-6xl mx-auto">
          {PRICE_TABLES.map((table) => (
            <PriceTable key={table.title} {...table} />
          ))}
        </div>
      </Section>

      {/* WHY PREMIUM PRICING */}
      <Section className="bg-secondary/20">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">Why Premium Pricing?</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-foreground/70">
          <p>
            Our pricing reflects the quality you receive. Here's what you're investing in:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">•</span>
              <span><strong>Trained professionals</strong> who care about quality, not speed.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">•</span>
              <span><strong>Premium products</strong> that clean better and safer.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">•</span>
              <span><strong>Reliability & consistency</strong> you can count on every time.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">•</span>
              <span><strong>Insured and background-checked</strong> for your peace of mind.</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">•</span>
              <span><strong>Attention to detail</strong> that turns a clean home into a pristine one.</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground text-center">
        <h2 className="text-4xl font-bold mb-4">Ready for Premium Cleaning?</h2>
        <p className="text-lg opacity-90 mb-8">
          Request a personalized quote based on your home, frequency, and location.
        </p>
        <Link href="/quote">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Get Your Quote Today
          </Button>
        </Link>
      </Section>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { fadeInUp } from '@/lib/motion'

export function ContactStrip() {
  return (
    <motion.section
      {...fadeInUp}
      className="border-y border-accent/20 bg-[#08090B] bg-[radial-gradient(900px_circle_at_50%_0%,rgba(0,143,245,0.20),transparent_58%)] py-20 text-[#F5F7FA]"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Book premium cleaning in Accra</h2>
        <p className="text-lg opacity-90 mb-8">
          For homes, Airbnbs, guest houses, and hotels—reach out for a quote or schedule.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/quote">
            <Button
              size="lg"
              variant="outline"
              className="rounded border-accent/45 bg-accent text-accent-foreground shadow-[0_0_28px_rgba(0,143,245,0.32)] hover:bg-[#0057B8]"
            >
              Request a Quote
            </Button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm">
          <div>
            <p className="font-semibold">Address</p>
            <p className="opacity-80">Accra</p>
          </div>
          <div className="hidden sm:block w-px bg-primary-foreground/20" />
          <div>
            <p className="font-semibold">Hours</p>
            <p className="opacity-80">Mon–Sat by appointment</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

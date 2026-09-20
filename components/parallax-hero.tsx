'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Camera, Clock, Shield, Sparkles } from 'lucide-react'

interface ParallaxHeroProps {
  headline: string
  subheading: string
  backgroundImage: string
  onQuoteClick?: () => void
}

export function ParallaxHero({
  headline,
  subheading,
  backgroundImage,
  onQuoteClick,
}: ParallaxHeroProps) {
  const sectionRef = React.useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  // Smooth section-based parallax (no manual scroll listeners)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 90])
  const bgScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.05, 1.12])

  const chips = ['Busy Homes', 'High-Income Residences', 'Airbnbs / Short-Stays']

  const trust = [
    { icon: Sparkles, label: 'Hotel-level finish' },
    { icon: Shield, label: 'Discreet & reliable' },
    { icon: Clock, label: 'Flexible scheduling' },
    { icon: Camera, label: 'Guest-ready presentation' },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden"
      aria-label="Gidz Cleaning Services premium cleaning hero"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={backgroundImage || '/placeholder.svg'}
            alt="Premium cleaned interior"
            fill
            priority
            quality={92}
            className="object-cover object-[center_22%] sm:object-[center_26%] opacity-95"
          />
        </motion.div>

        {/* Premium overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090B]/70 via-[#08090B]/22 to-[#08090B]/72" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_15%,rgba(229,231,234,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_72%_34%,rgba(0,143,245,0.22),transparent_60%)]" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />

        {/* Subtle grain (premium texture) */}
        {/* <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('/hulki-okan-tabak-x3kQTL7yw30-unsplash.jpg')]" /> */}
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[72vh] py-16 sm:py-20 lg:py-24 flex items-center">
          <div className="w-full">
            {/* Eyebrow / location badge */}
            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="mb-6 flex flex-wrap justify-center items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 rounded border border-accent/35 bg-[#111318]/70 px-3 py-1.5 text-xs text-[#E5E7EA] shadow-[0_0_20px_rgba(0,143,245,0.18)] backdrop-blur sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,143,245,0.9)]" />
                Accra • Premium Cleaning
              </div>

              <div className="text-xs text-[#C7C9CC] sm:text-sm">
                Accra
              </div>
            </motion.div>

            <div className="mx-auto max-w-4xl">
              <div>
                <motion.h1
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.05 }}
                  className="text-balance text-4xl text-center sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#F5F7FA]"
                >
                  Cleaning Service <span className='text-lg block font-medium'>for Homes & Short-Stays in Accra.</span>
                </motion.h1>

                <motion.p
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.12 }}
                  className="mt-5 max-w-2xl m-auto text-center text-pretty text-sm sm:text-lg md:block leading-relaxed text-[#C7C9CC]"
                >
                  {subheading}
                </motion.p>

                {/* Chips */}
                {/* <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {chips.map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85 backdrop-blur"
                    >
                      {label}
                    </span>
                  ))}
                </div> */}

                {/* Trust row */}
                {/* <div className="mt-8 grid gap-2 sm:grid-cols-2">
                  {trust.map((t) => {
                    const Icon = t.icon
                    return (
                      <div
                        key={t.label}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/85 backdrop-blur"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                          <Icon className="h-4 w-4 text-accent" />
                        </span>
                        <span className="text-sm font-medium">{t.label}</span>
                      </div>
                    )
                  })}
                </div> */}

                {/* CTAs */}
                <motion.div
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
                  className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                >
                  {onQuoteClick ? (
                    <Button
                      size="lg"
                      onClick={onQuoteClick}
                      className="h-12 rounded border border-accent/50 bg-accent px-6 text-accent-foreground shadow-[0_0_32px_rgba(0,143,245,0.38)] hover:bg-[#0057B8]"
                    >
                      Request a Quote
                    </Button>
                  ) : (
                    <Link href="/quote" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto h-12 rounded border border-accent/50 bg-accent px-6 text-accent-foreground shadow-[0_0_32px_rgba(0,143,245,0.38)] hover:bg-[#0057B8]"
                      >
                        Request a Quote
                      </Button>
                    </Link>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

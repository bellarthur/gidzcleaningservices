'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sparkles, Menu, X, ChevronDown, Phone, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SiteHeaderProps {
  onQuoteClick?: () => void
}

export function SiteHeader({ onQuoteClick }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'For Homes', href: '/for-homes' },
    { label: 'For Short-Stays', href: '/for-short-stays' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const openWhatsApp = () => {
    window.open('https://wa.me/233594636671', '_blank')
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-border/80 bg-background/90 shadow-sm backdrop-blur-xl'
            : 'border-b border-transparent bg-background/80 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-[4.25rem]">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-primary sm:text-xl">
                  Gidz Cleaning
                </span>
                <span className="hidden text-[11px] font-medium tracking-wide text-muted-foreground sm:block">
                  Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation — refined focus */}
            <nav className="hidden items-center lg:flex">
              <ul className="flex items-center gap-0.5">
                {navItems.map((item) => {
                  const isActive = pathname === item.href

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`
                          group relative flex items-center px-3.5 py-2 text-[13.5px] font-medium tracking-wide
                          transition-colors duration-200
                          ${
                            isActive
                              ? 'text-accent'
                              : 'text-foreground/65 hover:text-foreground'
                          }
                        `}
                      >
                        <span className="relative z-10">{item.label}</span>

                        {/* Hover background pill */}
                        <span
                          className={`
                            absolute inset-0 rounded-lg bg-muted/0 transition-all duration-200
                            group-hover:bg-muted/60
                            ${isActive ? 'bg-accent/8' : ''}
                          `}
                        />

                        {/* Active indicator line */}
                        {isActive && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full bg-accent"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}

                        {/* Subtle hover underline for non-active items */}
                        {!isActive && (
                          <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] origin-left scale-x-0 rounded-full bg-foreground/25 transition-transform duration-300 group-hover:scale-x-100" />
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-2.5 lg:flex">
              <Button
                variant="outline"
                size="sm"
                onClick={onQuoteClick}
                className="h-9 border-border/80 px-4 font-medium hover:border-accent/40 hover:bg-accent/5"
              >
                Request Quote
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    className="h-9 gap-1.5 bg-accent px-4 font-medium text-accent-foreground shadow-sm hover:bg-accent/90"
                  >
                    Call / WhatsApp
                    <ChevronDown className="h-3.5 w-3.5 opacity-80" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 p-1.5">
                  <DropdownMenuItem asChild>
                    <a
                      href="tel:+233594636671"
                      className="flex cursor-pointer items-center gap-2.5 rounded-md px-3 py-2.5"
                    >
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">Call us</span>
                        <span className="text-xs text-muted-foreground">059 463 6671</span>
                      </div>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button
                      onClick={openWhatsApp}
                      className="flex w-full cursor-pointer items-center gap-2.5 rounded-md px-3 py-2.5 text-left"
                    >
                      <MessageCircle className="h-4 w-4 text-muted-foreground" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">WhatsApp</span>
                        <span className="text-xs text-muted-foreground">059 463 6671</span>
                      </div>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-background shadow-2xl lg:hidden"
            >
              {/* Panel Header */}
              <div className="flex h-16 items-center justify-between border-b border-border px-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                    <Sparkles className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-base font-bold text-primary">Gidz Cleaning</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Nav Items — refined */}
              <nav className="flex-1 overflow-y-auto px-3 py-5">
                <ul className="space-y-1">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href

                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 + index * 0.035, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`
                            group relative flex items-center justify-between rounded-xl px-4 py-3.5
                            text-[15px] font-medium tracking-wide transition-all duration-200
                            ${
                              isActive
                                ? 'bg-accent/10 text-accent'
                                : 'text-foreground/75 hover:bg-muted hover:text-foreground'
                            }
                          `}
                        >
                          <span className="flex items-center gap-3">
                            {/* Active left accent bar */}
                            <span
                              className={`
                                h-5 w-[3px] rounded-full transition-all duration-200
                                ${isActive ? 'bg-accent' : 'bg-transparent group-hover:bg-foreground/15'}
                              `}
                            />
                            {item.label}
                          </span>

                          {isActive && (
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          )}
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              {/* Mobile CTAs */}
              <div className="space-y-2.5 border-t border-border p-4">
                <Button
                  variant="outline"
                  className="h-11 w-full justify-center border-border/80 text-[15px] font-medium"
                  onClick={() => {
                    onQuoteClick?.()
                    setMobileMenuOpen(false)
                  }}
                >
                  Request a Quote
                </Button>

                <div className="grid grid-cols-2 gap-2.5">
                  <Button
                    asChild
                    variant="secondary"
                    className="h-11 gap-2 text-[15px] font-medium"
                  >
                    <a href="tel:+233594636671">
                      <Phone className="h-4 w-4" />
                      Call
                    </a>
                  </Button>
                  <Button
                    className="h-11 gap-2 bg-accent text-[15px] font-medium text-accent-foreground hover:bg-accent/90"
                    onClick={() => {
                      openWhatsApp()
                      setMobileMenuOpen(false)
                    }}
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Dialog, DialogClose } from '@/components/ui/dialog'

type NavItem = { label: string; href: string }

const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'For Homes', href: '/for-homes' },
  { label: 'For Short-Stays', href: '/for-short-stays' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const WHATSAPP_URL = 'https://wa.me/233595236285'
const PHONE_NUMBER = '+233595236285'

function openWhatsApp() {
  window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
}

function NavLinks({
  items,
  onNavigate,
  className = '',
}: {
  items: NavItem[]
  onNavigate?: () => void
  className?: string
}) {
  return (
    <nav className={className}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="text-base font-medium text-[#C7C9CC] transition-colors hover:text-accent"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

function CallWhatsAppMenu({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          className={[
            fullWidth ? 'w-full' : '',
            'rounded border border-accent/40 bg-accent text-accent-foreground shadow-[0_0_22px_rgba(0,143,245,0.28)] hover:bg-[#0057B8]',
          ].join(' ')}
        >
          Call/WhatsApp
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align={fullWidth ? 'start' : 'end'} className={fullWidth ? 'w-48' : undefined}>
        <DropdownMenuItem asChild>
          <a href={`tel:${PHONE_NUMBER}`} className="cursor-pointer">
            Call: 059 523 6285
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button onClick={openWhatsApp} className="w-full cursor-pointer text-left">
            WhatsApp: 059 523 6285
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/**
 * Custom LEFT-side desktop drawer (uses Dialog for a11y + overlay, custom motion for placement)
 */
function DesktopLeftDrawer({
  open,
  onOpenChange,
  items,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  items: NavItem[]
}) {
  const close = React.useCallback(() => onOpenChange(false), [onOpenChange])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open ? (
          <>
            {/* Overlay (custom) */}
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              aria-hidden="true"
            />

            {/* Panel (LEFT) */}
            <motion.aside
              key="panel"
              className="fixed left-0 top-0 z-50 h-screen w-[320px] max-w-[85vw] border-r border-accent/20 bg-[#08090B] p-6 shadow-[0_0_50px_rgba(0,143,245,0.16)]"
              initial={{ x: -340, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -340, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 380, damping: 38 }}
              role="dialog"
              aria-label="Desktop menu"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[#E5E7EA]">Menu</h3>

                <DialogClose asChild>
                  <button
                    onClick={close}
                    className="rounded p-2 text-[#C7C9CC] hover:bg-accent/10 hover:text-accent"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </DialogClose>
              </div>

              <NavLinks items={items} onNavigate={close} className="flex flex-col gap-3" />
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </Dialog>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [desktopMenuOpen, setDesktopMenuOpen] = React.useState(false)

  const toggleMobileMenu = () => setMobileMenuOpen((v) => !v)
  const openDesktopMenu = () => setDesktopMenuOpen(true)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 border-b border-accent/20 bg-[#08090B]/95 shadow-[0_1px_0_rgba(199,201,204,0.08)] supports-[backdrop-filter]:bg-[#08090B]/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center py-4">
          {/* Left: menu buttons */}
          <div className="flex items-center">
            {/* Mobile toggle */}
            <button onClick={toggleMobileMenu} className="rounded p-2 text-[#C7C9CC] hover:bg-accent/10 hover:text-accent md:hidden" aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop drawer trigger */}
            <button
              onClick={openDesktopMenu}
              className="hidden items-center rounded p-2 text-[#C7C9CC] hover:bg-accent/10 hover:text-accent md:inline-flex"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/gidzcleaningservices-logo.jpeg"
                alt="Gidz Cleaning Services"
                width={144}
                height={80}
                priority
                className="h-16 w-24 object-contain drop-shadow-[0_0_18px_rgba(0,143,245,0.25)] transition-transform group-hover:scale-105 md:h-20 md:w-36"
              />
            </Link>
          </div>

          {/* Right: Mobile CTA */}
            <div className="md:hidden flex items-center justify-end gap-3">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button size="sm" className="rounded border border-accent/40 bg-accent text-accent-foreground shadow-[0_0_18px_rgba(0,143,245,0.28)] hover:bg-[#0057B8]">
              Call Us
              </Button>
            </a>
            </div>

          {/* Right: Desktop CTA */}
          <div className="hidden md:flex items-center justify-end gap-3">
            <CallWhatsAppMenu />
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen ? (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-accent/20 py-4 md:hidden"
            >
              <NavLinks
                items={NAV_ITEMS}
                onNavigate={closeMobileMenu}
                className="mb-4 flex flex-col gap-3"
              />

              <div className="flex flex-col gap-2">
                <Link href="/quote" onClick={closeMobileMenu}>
                  <Button size="sm" variant="outline" className="w-full border-[#C7C9CC]/35 bg-transparent text-[#E5E7EA] hover:bg-accent/10 hover:text-accent">
                    Quote
                  </Button>
                </Link>

                <CallWhatsAppMenu fullWidth />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Desktop LEFT-side drawer */}
        <DesktopLeftDrawer
          open={desktopMenuOpen}
          onOpenChange={setDesktopMenuOpen}
          items={NAV_ITEMS}
        />
      </div>
    </motion.header>
  )
}

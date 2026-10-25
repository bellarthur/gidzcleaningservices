'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Hero } from '@/components/hero'
import { Section } from '@/components/section'
import { motion } from 'framer-motion'
import { useToast } from '@/hooks/use-toast'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const { toast } = useToast()

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: 'Missing information',
        description: 'Please fill all required fields.',
        variant: 'destructive',
      })
      return
    }

    toast({
      title: 'Message Received!',
      description: 'We will get back to you within 24 hours.',
    })

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <Hero
        headline="Get in Touch"
        subheading="Have questions? Want to schedule a cleaning? We're here to help. Reach out via phone, WhatsApp, or visit our location."
      />

      {/* CONTACT INFO CARDS */}
      <Section className="bg-secondary/20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
          <motion.a
            {...fadeInUp}
            href="tel:+233594636671"
            className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 inline-block rounded-lg bg-accent/10 p-3">
              <Phone className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-primary mb-2">Call Us</h3>
            <p className="text-sm text-foreground/70">059 463 6671</p>
            <p className="text-xs text-foreground/50 mt-2">Mon–Sat, 9am–6pm</p>
          </motion.a>

          <motion.a
            {...fadeInUp}
            href="https://wa.me/233594636671"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 inline-block rounded-lg bg-accent/10 p-3">
              <MessageCircle className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-primary mb-2">WhatsApp</h3>
            <p className="text-sm text-foreground/70">Chat instantly</p>
            <p className="text-xs text-foreground/50 mt-2">Fast replies guaranteed</p>
          </motion.a>

          <motion.a
            {...fadeInUp}
            href="mailto:gidzcleaningservices@gmail.com"
            className="rounded border border-border bg-card p-6 hover:border-accent/50 hover:shadow-[0_0_24px_rgba(0,143,245,0.12)] transition-all"
          >
            <div className="mb-4 inline-block rounded bg-accent/10 p-3">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-primary mb-2">Email Us</h3>
            <p className="break-words text-sm text-foreground/70">gidzcleaningservices@gmail.com</p>
            <p className="text-xs text-foreground/50 mt-2">For bookings and support</p>
          </motion.a>

          <motion.div {...fadeInUp} className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 inline-block rounded-lg bg-accent/10 p-3">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-primary mb-2">Address</h3>
            {/* <p className="text-sm text-foreground/70">Estes Park Street</p> */}
            <p className="text-xs text-foreground/50 mt-2">Little roses, Ashaley Botwe, Accra</p>
          </motion.div>

          <motion.div {...fadeInUp} className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 inline-block rounded-lg bg-accent/10 p-3">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-primary mb-2">Hours</h3>
            <p className="text-sm text-foreground/70">Mon–Sat</p>
            <p className="text-xs text-foreground/50 mt-2">By appointment</p>
          </motion.div>
        </div>
      </Section>

      {/* LOCATION */}
      <Section>
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Find Us in Accra</h2>
        <motion.div {...fadeInUp} className="mx-auto aspect-[16/10] max-w-5xl overflow-hidden rounded-lg border border-border bg-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4978.248891530468!2d-0.12917722411696606!3d5.685331532333789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bc1b6a9461d%3A0xf0caf21e64617189!2sGidz%20Cleaning%20Services!5e1!3m2!1sen!2sgh!4v1792963783537!5m2!1sen!2sgh"
            className="h-full w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Gidz Cleaning Services location"
          />
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section className="bg-secondary/20">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Common Questions</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: 'Do you service my area?',
              a: 'We serve Accra and nearby areas. WhatsApp your location and we\'ll confirm coverage.',
            },
            {
              q: 'How far in advance should I book?',
              a: 'For recurring service, one week advance notice. One-time deep cleans, ideally 2-3 days. Urgent requests—ask us!',
            },
            {
              q: 'What if I\'m not satisfied?',
              a: 'Your satisfaction is guaranteed. If anything isn\'t perfect, we\'ll make it right at no extra charge.',
            },
            {
              q: 'Can you work around my schedule?',
              a: 'Absolutely. We offer flexible scheduling. Early mornings, evenings, weekends—let us know what works.',
            },
          ].map((faq, idx) => (
            <motion.details
              key={idx}
              {...fadeInUp}
              className="rounded-xl border border-border bg-card p-6 cursor-pointer group"
            >
              <summary className="font-semibold text-primary flex items-center justify-between">
                {faq.q}
                <span className="transform group-open:rotate-180 transition-transform text-accent">▼</span>
              </summary>
              <p className="text-foreground/70 mt-4">{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="bg-primary text-primary-foreground text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Connect?</h2>
        <p className="text-lg opacity-90 mb-8">
          Reach out now. We're excited to help with your cleaning needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => window.open('https://wa.me/233594636671', '_blank')}
          >
            Message on WhatsApp
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            asChild
          >
            <a href="tel:+233594636671">Call Us Now</a>
          </Button>
        </div>
      </Section>
    </div>
  )
}

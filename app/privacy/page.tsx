import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { Mail, Phone, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy & Terms | Gidz Cleaning Services',
  description: 'Privacy Policy and Terms & Conditions for Gidz Cleaning Services in Accra, Ghana.',
}

const contactEmail = 'gidzcleaningservices@gmail.com'
const contactPhone = '+233 59 463 6671'

function PolicySection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section className="border-t border-[#C7C9CC]/15 py-8 first:border-t-0 first:pt-0">
      <div className="grid gap-3 sm:grid-cols-[4rem_1fr] sm:gap-6">
        <p className="font-mono text-sm text-accent">{number}</p>
        <div>
          <h2 className="text-xl font-semibold text-[#E5E7EA]">{title}</h2>
          <div className="mt-3 space-y-3 leading-7 text-[#A7ADB7]">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F7FA]">
      <section className="border-b border-accent/20 bg-[radial-gradient(760px_circle_at_50%_0%,rgba(0,143,245,0.18),transparent_68%)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-accent">
            <ShieldCheck className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.16em]">Legal</span>
          </div>
          <h1 className="mt-5 text-4xl font-bold text-[#E5E7EA] sm:text-5xl">Privacy & Terms</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#C7C9CC]">
            How Gidz Cleaning Services handles personal data and the terms that apply when you book our services.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <article>
          <div className="mb-10 flex flex-col gap-4 border-l-2 border-accent pl-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Privacy Policy</p>
              <p className="mt-2 text-[#A7ADB7]">Last updated: October 2026</p>
            </div>
            <p className="text-sm text-[#A7ADB7]">Accra, Ghana</p>
          </div>

          <PolicySection number="01" title="Introduction">
            <p>Welcome to Gidz Cleaning Services. We operate in Accra, Ghana, and are committed to protecting your personal privacy. This policy explains how we collect, use, and safeguard personal data in line with the Ghana Data Protection Act, 2012 (Act 843).</p>
          </PolicySection>

          <PolicySection number="02" title="Data Controller">
            <p>For the purpose of Act 843, the data controller is Gidz Cleaning Services, Accra, Ghana.</p>
            <p><a className="text-[#E5E7EA] hover:text-accent" href={`mailto:${contactEmail}`}>{contactEmail}</a><br /><a className="text-[#E5E7EA] hover:text-accent" href="tel:+233594636671">{contactPhone}</a></p>
          </PolicySection>

          <PolicySection number="03" title="Information We Collect">
            <p>We collect personal data you provide when requesting a quote, booking a service, or contacting us. This may include:</p>
            <ul className="list-disc space-y-2 pl-5 marker:text-accent">
              <li><strong className="font-semibold text-[#C7C9CC]">Identity and contact data:</strong> your full name, phone number, and email address.</li>
              <li><strong className="font-semibold text-[#C7C9CC]">Service data:</strong> the address to be cleaned, preferred cleaning times, and service instructions.</li>
              <li><strong className="font-semibold text-[#C7C9CC]">Technical data:</strong> IP address and browsing data collected automatically when you visit our website.</li>
            </ul>
          </PolicySection>

          <PolicySection number="04" title="Purpose and Lawfulness of Processing">
            <p>In line with Section 18 of the Ghana Data Protection Act, we process data only for specific, explicit, and legitimate purposes:</p>
            <ul className="list-disc space-y-2 pl-5 marker:text-accent">
              <li>To process bookings and perform cleaning contracts.</li>
              <li>To communicate service updates and customer support.</li>
              <li>To meet statutory legal and tax obligations in Ghana.</li>
            </ul>
          </PolicySection>

          <PolicySection number="05" title="Consent and Your Rights">
            <p>By submitting details through our website, messaging channels, or booking forms, you consent to the processing described in this policy. Under Act 843, you may request access to the personal data we hold, correction of inaccurate or incomplete data, or object to processing and request erasure where applicable.</p>
            <p>To exercise these rights, email <a className="text-[#E5E7EA] hover:text-accent" href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
          </PolicySection>

          <PolicySection number="06" title="Data Security and Disclosures">
            <p>We use appropriate administrative and technical measures to protect data from unauthorised access or breaches. We do not sell personal data. We share information only with trained cleaning staff or trusted providers when needed to deliver the service you requested.</p>
          </PolicySection>
        </article>

        <article className="mt-20">
          <div className="mb-10 flex flex-col gap-4 border-l-2 border-accent pl-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">Terms & Conditions</p>
              <p className="mt-2 text-[#A7ADB7]">Last updated: October 2026</p>
            </div>
            <p className="text-sm text-[#A7ADB7]">Accra and surrounding areas</p>
          </div>

          <PolicySection number="01" title="Scope and Contract Formation">
            <p>These Terms & Conditions govern residential and commercial cleaning services provided by Gidz Cleaning Services to clients in Accra and surrounding areas. A binding contract is formed when you accept a quotation in writing, by email, through a digital booking form, or when we begin the service.</p>
          </PolicySection>

          <PolicySection number="02" title="Cleaning Supplies and Equipment">
            <p>We provide the professional cleaning products, materials, and equipment needed for the contracted service. If you request specialty products outside our standard inventory, you must provide them at your own expense and risk.</p>
          </PolicySection>

          <PolicySection number="03" title="Client Obligations and Access">
            <ul className="list-disc space-y-2 pl-5 marker:text-accent">
              <li><strong className="font-semibold text-[#C7C9CC]">Access:</strong> provide our staff unhindered access to the property at the agreed date and time. A 50% lockout fee applies where access is blocked.</li>
              <li><strong className="font-semibold text-[#C7C9CC]">Utilities:</strong> provide electricity and running water on site, free of charge, where required for the team to work.</li>
              <li><strong className="font-semibold text-[#C7C9CC]">Valuables:</strong> secure high-value items, cash, jewellery, fragile belongings, and important documents before our team arrives.</li>
            </ul>
          </PolicySection>

          <PolicySection number="04" title="Pricing and Payment">
            <p>Prices are quoted in Ghanaian Cedis (GHS) and are subject to applicable Ghanaian taxes unless stated otherwise. One-time cleaning services, deep cleans, and bookings from new clients require a 50% deposit to secure the appointment. The remaining balance is due immediately after the service, before the team leaves the premises.</p>
            <p>Deposits may be paid by Mobile Money (MoMo) or bank transfer. The final balance may be paid by MoMo, bank transfer, or cash. We may withhold or suspend service if the deposit has not cleared before the scheduled time.</p>
          </PolicySection>

          <PolicySection number="05" title="Cancellations and Rescheduling">
            <p>You may reschedule or cancel free of charge up to 24 hours before the scheduled start time. Cancellations made with less than 24 hours&apos; notice attract a late cancellation fee equal to 30% of the booking value.</p>
          </PolicySection>

          <PolicySection number="06" title="Complaints and Re-cleaning">
            <p>If an area is missed or poorly cleaned, notify us in writing at <a className="text-[#E5E7EA] hover:text-accent" href={`mailto:${contactEmail}`}>{contactEmail}</a> with photographic evidence within 24 hours of completion. Where a complaint is valid, we will re-clean the disputed area at no charge. No refund or price reduction is issued before a re-cleaning attempt.</p>
          </PolicySection>

          <PolicySection number="07" title="Liability and Insurance">
            <p>We maintain public liability insurance for accidental damage directly caused by the negligence of staff while on duty. We are not liable for unsecured items, existing wear and tear, structural defects, fragile surfaces that react poorly to standard cleaning agents, or delays caused by Accra traffic, extreme weather, or utility outages beyond our reasonable control.</p>
          </PolicySection>

          <PolicySection number="08" title="Governing Law">
            <p>These Terms & Conditions are governed by the laws of the Republic of Ghana. Disputes arising under them are subject to the exclusive jurisdiction of the courts in Accra.</p>
          </PolicySection>
        </article>

        <aside className="mt-12 flex flex-col gap-4 border border-accent/25 bg-[#111318] p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-[#C7C9CC]">Questions about privacy, your data, or these terms?</p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-[#E5E7EA]"><Mail className="h-4 w-4" /> Email us</a>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-[#E5E7EA]"><Phone className="h-4 w-4" /> Contact page</Link>
          </div>
        </aside>
      </main>
    </div>
  )
}

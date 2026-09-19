"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-accent/20 bg-[#08090B] py-16 shadow-[0_-1px_0_rgba(199,201,204,0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Brand */}
          <div>
            {/* Center: Logo */}
            <div className="flex justify-start">
              <Link href="/" className="flex items-center gap-2 group">
                <Image
                  src="/gidzcleaningservices-logo.jpeg"
                  alt="Gidz Cleaning Services"
                  width={96}
                  height={80}
                  className="h-16 w-20 object-contain drop-shadow-[0_0_16px_rgba(0,143,245,0.24)] transition-transform group-hover:scale-105 md:h-20 md:w-24"
                />
              </Link>
            </div>
            <p className="text-sm text-[#A7ADB7]">
              Premium cleaning for homes and short-stays in Kumasi.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#E5E7EA] mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[#A7ADB7]">
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/for-homes"
                  className="hover:text-accent transition-colors"
                >
                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/for-short-stays"
                  className="hover:text-accent transition-colors"
                >
                  Turnover Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-accent transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[#E5E7EA] mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-[#A7ADB7]">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="hover:text-accent transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#E5E7EA] mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-[#A7ADB7]">
              <li>
                <a
                  href="tel:+233595236285"
                  className="hover:text-accent transition-colors"
                >
                  059 523 6285
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/233595236285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="text-[#A7ADB7]">
                Estes Park Street
                <br />
                Kumasi
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#C7C9CC]/15 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#A7ADB7]">
              © {currentYear} Gidz Cleaning Services. All rights reserved.
            </p>
            <p className="text-sm text-[#A7ADB7]">
              Premium cleaning for Kumasi homes and short-stays.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [preference, setPreference] = useState<'man' | 'woman' | 'both'>('man');
  const [agreed, setAgreed] = useState(false);
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[rgba(72,41,34,0.04)] border-t border-[rgba(72,41,34,0.1)]">
      <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[rgba(72,41,34,0.5)] mb-4">
              STAY IN THE LOOP
            </p>
            <p className="text-sm text-[rgba(72,41,34,0.75)] mb-4 leading-relaxed">
              Sign up to our email list and get 10% off your first order:
            </p>

            {/* Email Input */}
            <div className="flex mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@arethebest.com"
                className="flex-1 px-3 py-2.5 text-sm border border-[rgba(72,41,34,0.25)] bg-white text-[rgba(72,41,34,1)] placeholder-[rgba(72,41,34,0.35)] focus:outline-none focus:border-[rgba(72,41,34,0.6)] rounded-l-sm"
              />
              <button className="px-4 py-2.5 bg-[rgba(72,41,34,1)] text-white text-xs font-bold uppercase tracking-wider hover:bg-[rgba(72,41,34,0.85)] transition-colors rounded-r-sm">
                SUBSCRIBE
              </button>
            </div>

            {/* Preferences */}
            <div className="mb-4">
              <p className="text-xs text-[rgba(72,41,34,0.5)] mb-2">Select your preferences:</p>
              <div className="flex gap-4">
                {(['man', 'woman', 'both'] as const).map((pref) => (
                  <label key={pref} className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="preference"
                      value={pref}
                      checked={preference === pref}
                      onChange={() => setPreference(pref)}
                      className="accent-[rgba(72,41,34,1)]"
                    />
                    <span className="text-xs text-[rgba(72,41,34,0.75)] capitalize">{pref}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="privacy"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 accent-[rgba(72,41,34,1)]"
              />
              <label htmlFor="privacy" className="text-xs text-[rgba(72,41,34,0.6)] leading-relaxed cursor-pointer">
                I agree to receive content from VuxClothes via email and have read and accept the{' '}
                <a href="#" className="underline hover:opacity-70">Privacy Policy</a>
              </label>
            </div>
          </div>

          {/* Brand Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[rgba(72,41,34,0.5)] mb-4">Brand</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Vux Members', href: '#' },
                { label: 'About Us', href: '#' },
                { label: 'Stores', href: '#' },
                { label: 'Careers', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[rgba(72,41,34,0.75)] hover:text-[rgba(72,41,34,1)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[rgba(72,41,34,0.5)] mb-4">Support</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Returns', href: '#' },
                { label: 'Order Tracking', href: '#' },
                { label: 'FAQ', href: '#' },
                { label: 'Contact', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[rgba(72,41,34,0.75)] hover:text-[rgba(72,41,34,1)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[rgba(72,41,34,0.5)] mb-4">Boring stuff</p>
            <ul className="space-y-2.5">
              {[
                { label: 'Legal Notice', href: '#' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms and Conditions', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[rgba(72,41,34,0.75)] hover:text-[rgba(72,41,34,1)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[rgba(72,41,34,0.1)] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Country/Language */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[rgba(72,41,34,0.5)]">Country &amp; Language</span>
            <button className="flex items-center gap-1.5 text-xs font-medium text-[rgba(72,41,34,0.75)] border border-[rgba(72,41,34,0.2)] rounded-sm px-2.5 py-1.5 hover:border-[rgba(72,41,34,0.5)] transition-colors">
              <span>ES</span>
              <span className="text-[rgba(72,41,34,0.3)]">|</span>
              <span>EUR €</span>
              <span className="text-[rgba(72,41,34,0.3)]">|</span>
              <span>English</span>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(72,41,34,0.6)] hover:text-[rgba(72,41,34,1)] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" className="text-[rgba(72,41,34,0.6)] hover:text-[rgba(72,41,34,1)] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="text-[rgba(72,41,34,0.6)] hover:text-[rgba(72,41,34,1)] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(72,41,34,0.6)] hover:text-[rgba(72,41,34,1)] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-xs text-[rgba(72,41,34,0.4)]">
            &copy; {year} VuxClothes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

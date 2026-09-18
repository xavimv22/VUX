'use client';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const announcements = [
    '30 days Easy Returns & Exchanges',
    'Free Shipping on Orders Over $150',
    '30 days Easy Returns & Exchanges',
    'Free Shipping on Orders Over $150',
    '30 days Easy Returns & Exchanges',
    'Free Shipping on Orders Over $150',
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[rgba(72,41,34,0.08)] overflow-hidden py-2 text-xs tracking-wide">
        <div className="announcement-marquee">
          {announcements?.concat(announcements)?.map((text, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-[rgba(72,41,34,0.85)] font-medium">
              <span className="w-1 h-1 rounded-full bg-[rgba(72,41,34,0.5)] inline-block"></span>
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm top-0'
            : 'bg-transparent'
        }`}
        style={{ top: isScrolled ? 0 : '2rem' }}
      >
        <div className="flex items-center justify-between px-5 md:px-8 py-3">
          {/* Left Nav */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <span
                className="text-xl font-bold tracking-tight"
                style={{ color: 'rgba(72,41,34,1)', letterSpacing: '-0.04em' }}
              >
                Vux<sup className="text-xs font-normal">®</sup>Clothes
              </span>
            </a>

            {/* Left Nav Links */}
            <nav className="hidden md:flex items-center gap-1">
              <a
                href="#"
                className="px-3 py-1.5 text-sm font-medium text-[rgba(72,41,34,0.75)] hover:text-[rgba(72,41,34,1)] transition-colors"
              >
                Shop
              </a>
              <a
                href="#"
                className="px-3 py-1.5 text-sm font-medium text-[rgba(72,41,34,0.75)] hover:text-[rgba(72,41,34,1)] transition-colors"
              >
                New In
              </a>
            </nav>
          </div>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            <a
              href="#"
              className="px-3 py-1.5 text-sm font-medium text-[rgba(72,41,34,0.75)] hover:text-[rgba(72,41,34,1)] transition-colors"
            >
              Collections
            </a>
            <a
              href="#"
              className="px-3 py-1.5 text-sm font-medium text-[rgba(72,41,34,0.75)] hover:text-[rgba(72,41,34,1)] transition-colors"
            >
              Vux Members
            </a>
            <a
              href="#"
              className="px-3 py-1.5 text-sm font-medium text-[rgba(72,41,34,0.75)] hover:text-[rgba(72,41,34,1)] transition-colors"
            >
              Stores
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button className="hidden md:flex items-center gap-1.5 text-sm text-[rgba(72,41,34,0.75)] hover:text-[rgba(72,41,34,1)] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <span className="text-sm">Search</span>
            </button>

            {/* Account */}
            <button className="hidden md:flex items-center gap-1 text-sm text-[rgba(72,41,34,0.75)] hover:text-[rgba(72,41,34,1)] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>

            {/* Wishlist */}
            <button className="hidden md:flex items-center gap-1 text-sm text-[rgba(72,41,34,0.75)] hover:text-[rgba(72,41,34,1)] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>

            {/* Cart */}
            <button className="flex items-center gap-1.5 text-sm text-[rgba(72,41,34,0.75)] hover:text-[rgba(72,41,34,1)] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span className="text-sm">Cart</span>
            </button>

            {/* Mobile Menu */}
            <button
              className="md:hidden text-[rgba(72,41,34,0.75)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12"/>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[rgba(72,41,34,0.1)] px-5 py-4">
            <nav className="flex flex-col gap-3">
              {['Shop', 'New In', 'Collections', 'Vux Members', 'Stores']?.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-[rgba(72,41,34,0.75)] hover:text-[rgba(72,41,34,1)] py-1"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

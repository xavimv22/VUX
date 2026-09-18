'use client';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Hero Image */}
      <img
        src="https://nude-project.com/cdn/shop/files/ultralight_vertical_3.webp?format=pjpg&quality=70&v=1789490113&width=906"
        alt="VuxClothes FW26 New Arrivals - model wearing puffer jacket collection"
        className="absolute inset-0 w-full h-full object-cover object-center" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="absolute bottom-12 left-6 md:left-10 z-10">
        <p className="text-white/80 text-xs tracking-widest uppercase mb-2 font-medium">FW26 · 01</p>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-5" style={{ letterSpacing: '-0.03em' }}>
          New Arrivals
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="#"
            className="inline-block px-5 py-2.5 bg-white text-[rgba(72,41,34,1)] text-sm font-semibold rounded-full hover:bg-[rgba(72,41,34,1)] hover:text-white transition-all duration-300">
            
            Shop Now
          </a>
          <a
            href="#"
            className="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/40 hover:bg-white/30 transition-all duration-300">
            
            Women&apos;s Exclusive
          </a>
        </div>
      </div>
    </section>);

}
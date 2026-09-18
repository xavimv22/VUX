'use client';
import React from 'react';

interface CategoryBannerProps {
  image: string;
  imageAlt: string;
  subtitle: string;
  title: string;
  shopLink: string;
  position?: 'left' | 'right';
}

export default function CategoryBanner({
  image,
  imageAlt,
  subtitle,
  title,
  shopLink,
  position = 'left',
}: CategoryBannerProps) {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden group">
      {/* Background Image */}
      <a href={shopLink} className="absolute inset-0 block">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </a>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div
        className={`absolute bottom-10 z-10 ${
          position === 'left' ? 'left-8 md:left-12' : 'right-8 md:right-12 text-right'
        }`}
      >
        <p className="text-white/70 text-xs tracking-widest uppercase mb-2 font-medium">{subtitle}</p>
        <h2
          className="text-white text-3xl md:text-4xl font-bold mb-4"
          style={{ letterSpacing: '-0.03em' }}
        >
          {title}
        </h2>
        <a
          href={shopLink}
          className="inline-block px-5 py-2.5 bg-white text-[rgba(72,41,34,1)] text-sm font-semibold rounded-full hover:bg-[rgba(72,41,34,1)] hover:text-white transition-all duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}

'use client';
import React from 'react';

export default function NYStoreBanner() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden group">
      {/* Background Image */}
      <a href="#" className="absolute inset-0 block">
        <img
          src="https://nude-project.com/cdn/shop/files/version-3.webp?format=pjpg&quality=70&v=1788874196&width=906"
          alt="VuxClothes New York ephemeral store - exclusive pop-up event"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
        
      </a>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="absolute bottom-10 right-8 md:right-12 z-10 text-right">
        <a
          href="#"
          className="inline-block px-6 py-3 bg-white text-[rgba(72,41,34,1)] text-sm font-semibold rounded-full hover:bg-[rgba(72,41,34,1)] hover:text-white transition-all duration-300">
          
          See More
        </a>
      </div>
    </section>);

}
'use client';
import React from 'react';

export default function MembersSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Images */}
      <div className="relative h-[50vh] min-h-[350px]">
        <img
          src="https://nude-project.com/cdn/shop/files/banner_accesorios_horizontals_escaneado.png?format=pjpg&quality=70&v=1784123332&width=1900"
          alt="VuxClothes members loyalty program - exclusive accessories collection"
          className="absolute inset-0 w-full h-full object-cover object-center" />
        
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <p className="text-white/70 text-xs tracking-widest uppercase mb-3 font-medium">
            Join Our Loyalty Program
          </p>
          <h2
            className="text-white text-3xl md:text-5xl font-bold mb-6"
            style={{ letterSpacing: '-0.03em' }}>
            
            Vux Members
          </h2>
          <a
            href="#"
            className="inline-block px-7 py-3 bg-white text-[rgba(72,41,34,1)] text-sm font-semibold rounded-full hover:bg-[rgba(72,41,34,1)] hover:text-white transition-all duration-300">
            
            Join Now
          </a>
        </div>
      </div>
    </section>);

}
'use client';
import React, { useRef } from 'react';

interface ColorSwatch {
  url: string;
  color?: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  alt: string;
  sizes: string[];
  badges: string[];
  swatches?: ColorSwatch[];
  disabledSizes?: string[];
}

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
  shopLink?: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex-shrink-0 w-[220px] md:w-[260px] group">
      <div className="relative overflow-hidden bg-[#f5f3f1] mb-3">
        {/* Image */}
        <a href="#" className="block aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.alt}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        {/* Badges */}
        {product.badges.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.badges.map((badge, i) => (
              <span
                key={i}
                className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 bg-white text-[rgba(72,41,34,0.85)] rounded-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Size selector on hover */}
        {product.sizes.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-2 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex flex-wrap gap-1 justify-center">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`text-[11px] font-medium px-2 py-1 border rounded-sm transition-colors ${
                    product.disabledSizes?.includes(size)
                      ? 'border-[rgba(72,41,34,0.15)] text-[rgba(72,41,34,0.3)] line-through cursor-not-allowed'
                      : 'border-[rgba(72,41,34,0.3)] text-[rgba(72,41,34,0.75)] hover:border-[rgba(72,41,34,1)] hover:text-[rgba(72,41,34,1)]'
                  }`}
                  disabled={product.disabledSizes?.includes(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Add to cart for accessories */}
        {product.sizes.length === 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-2 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button className="w-full text-[11px] font-semibold uppercase tracking-wider py-1.5 border border-[rgba(72,41,34,1)] text-[rgba(72,41,34,1)] hover:bg-[rgba(72,41,34,1)] hover:text-white transition-colors rounded-sm">
              Add to Cart
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="px-0.5">
        <h3 className="text-sm font-semibold text-[rgba(72,41,34,1)] mb-1 leading-tight" style={{ letterSpacing: '-0.01em' }}>
          <a href="#" className="hover:opacity-70 transition-opacity">{product.name}</a>
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[rgba(72,41,34,0.5)] font-normal">Regular price</span>
          <span className="text-sm font-semibold text-[rgba(72,41,34,1)]">{product.price}</span>
        </div>

        {/* Color swatches */}
        {product.swatches && product.swatches.length > 0 && (
          <div className="flex gap-1 mt-2">
            {product.swatches.map((swatch, i) => (
              <a
                key={i}
                href={swatch.url}
                className="w-3.5 h-3.5 rounded-full border border-[rgba(72,41,34,0.2)] hover:border-[rgba(72,41,34,0.6)] transition-colors"
                style={{ backgroundColor: swatch.color || '#ccc' }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductCarousel({ title, subtitle, products, shopLink }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 md:py-12">
      <div className="px-5 md:px-8 mb-5 flex items-end justify-between">
        <div>
          {subtitle && (
            <p className="text-xs text-[rgba(72,41,34,0.5)] uppercase tracking-widest mb-1 font-medium">{subtitle}</p>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-[rgba(72,41,34,1)]" style={{ letterSpacing: '-0.03em' }}>
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          {shopLink && (
            <a
              href={shopLink}
              className="text-sm font-semibold text-[rgba(72,41,34,1)] underline underline-offset-2 hover:opacity-70 transition-opacity hidden md:block"
            >
              Shop Now
            </a>
          )}
          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="w-8 h-8 rounded-full border border-[rgba(72,41,34,0.3)] flex items-center justify-center text-[rgba(72,41,34,0.75)] hover:border-[rgba(72,41,34,1)] hover:text-[rgba(72,41,34,1)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-8 h-8 rounded-full border border-[rgba(72,41,34,0.3)] flex items-center justify-center text-[rgba(72,41,34,0.75)] hover:border-[rgba(72,41,34,1)] hover:text-[rgba(72,41,34,1)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Products */}
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-5 md:px-8 pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {products.map((product) => (
          <div key={product.id} style={{ scrollSnapAlign: 'start' }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';
import React, { useRef } from 'react';

interface Store {
  city: string;
  address: string;
  hours: { days: string; time: string }[];
  mapUrl: string;
}

const stores: Store[] = [
  {
    city: 'Barcelona',
    address: 'Carrer Dels Boters, 6, Ciutat Vella, 08002 Barcelona',
    hours: [{ days: 'MON-SAT', time: '11-21' }, { days: 'SUN', time: '12-20' }],
    mapUrl: 'https://maps.app.goo.gl/VtQ2aj9fekWJm1W78',
  },
  {
    city: 'Roma',
    address: 'Via Frattina, 101, 00187 Roma, Italia',
    hours: [{ days: 'MON-FRI', time: '12-20.30' }, { days: 'SAT', time: '12-21' }, { days: 'SUN', time: '12-20' }],
    mapUrl: '#',
  },
  {
    city: 'Las Rozas',
    address: 'C. Juan Ramón Jiménez, 3, Local nº40, 28232 Las Rozas de Madrid',
    hours: [{ days: 'MON-FRI', time: '10-21' }, { days: 'SAT', time: '10-22' }, { days: 'SUN', time: '10-21' }],
    mapUrl: '#',
  },
  {
    city: 'Berlin',
    address: 'Alte Schönhauser Str. 28, 10119 Berlin, Germany',
    hours: [{ days: 'MON-SAT', time: '11-20' }, { days: 'SUN', time: 'Closed' }],
    mapUrl: '#',
  },
  {
    city: 'Amsterdam',
    address: 'Leidsestraat 31, 1017 NT Amsterdam',
    hours: [{ days: 'SUN-WED', time: '11-18' }, { days: 'THUR', time: '11-20' }, { days: 'FRI-SAT', time: '11-19' }],
    mapUrl: '#',
  },
  {
    city: 'Madrid',
    address: 'Fuencarral Street, 18, 28004 Madrid',
    hours: [{ days: 'MON-FRI', time: '11-21' }, { days: 'SAT-SUN', time: '12-20' }],
    mapUrl: '#',
  },
  {
    city: 'Ibiza',
    address: 'Av. de Bartomeu de Roselló, 5, 07800 Eivissa',
    hours: [{ days: 'MON-SUN', time: '11-22' }],
    mapUrl: '#',
  },
  {
    city: 'Milano',
    address: 'Corso di Porta Ticinese, 64, 20123 Milano',
    hours: [{ days: 'MON-THU', time: '11-19.30' }, { days: 'FRI-SAT', time: '11-20' }, { days: 'SUN', time: '15-19' }],
    mapUrl: '#',
  },
  {
    city: 'Lisboa',
    address: 'R. Áurea, 153, 1100-060 Lisboa, Portugal',
    hours: [{ days: 'MON-SAT', time: '10.30-20' }, { days: 'SUN', time: '12-19' }],
    mapUrl: '#',
  },
  {
    city: 'Valencia',
    address: 'Martínez Ferrando Street, 1, 46004 Valencia',
    hours: [{ days: 'MON-SAT', time: '11-21' }, { days: 'SUN', time: 'Closed' }],
    mapUrl: '#',
  },
  {
    city: 'La Roca Village',
    address: 'La Roca Village, 08430, Santa Agnès de Malanyanes, Barcelona',
    hours: [{ days: 'MON-SUN', time: '10-22' }],
    mapUrl: '#',
  },
  {
    city: 'VuxClothes Café',
    address: 'C. de Pujades, 81, 08005 Barcelona',
    hours: [{ days: 'MON-FRI', time: '8-20' }, { days: 'SAT-SUN', time: 'Closed' }],
    mapUrl: '#',
  },
];

function StoreCard({ store }: { store: Store }) {
  return (
    <div className="flex-shrink-0 w-[220px] md:w-[240px] border-t border-[rgba(72,41,34,0.15)] pt-4 pb-6">
      <a href={store.mapUrl} target="_blank" rel="noopener noreferrer" className="block group">
        <h3 className="text-sm font-bold text-[rgba(72,41,34,1)] mb-1 group-hover:opacity-70 transition-opacity" style={{ letterSpacing: '-0.01em' }}>
          {store.city}
        </h3>
        <p className="text-xs text-[rgba(72,41,34,0.6)] mb-3 leading-relaxed">{store.address}</p>
      </a>
      <div className="flex gap-4">
        <div className="flex flex-col gap-0.5">
          {store.hours.map((h, i) => (
            <span key={i} className="text-[11px] text-[rgba(72,41,34,0.5)] font-medium">{h.days}</span>
          ))}
        </div>
        <div className="flex flex-col gap-0.5">
          {store.hours.map((h, i) => (
            <span key={i} className="text-[11px] text-[rgba(72,41,34,0.75)] font-medium">{h.time}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function StoresSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -260, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 260, behavior: 'smooth' });
  };

  return (
    <section className="py-10 md:py-14">
      <div className="px-5 md:px-8 mb-6 flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-[rgba(72,41,34,1)]" style={{ letterSpacing: '-0.03em' }}>
          Our Stores
        </h2>
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

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-5 md:px-8"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {stores.map((store, i) => (
          <div key={i} style={{ scrollSnapAlign: 'start' }}>
            <StoreCard store={store} />
          </div>
        ))}
      </div>
    </section>
  );
}

"use client"

import { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';

const companies = [
  "Al Adel Payment Services Provider L.L.C",
  "N S A Tourism L.L.C",
  "Truxoil Trading L.L.C",
  "MBC Yachts",
  "Smart Mind Information Technology L.L.C",
  "Aroma Valet Parking Services L.L.C",
  "Alef Flowers L.L.C",
  "Golden Sheep Farms Livestock Farming L.L.C",
  "Dofort Readymade Garments Trading L.L.C",
  "Funtasy Virtual Reality & Development Services LLC",
  "Daduru Goods Wholesalers L.L.C",
  "F P C Prisma Goods Wholesalers L.L.C",
  "Al Bastakia Department Store L.L.C",
  "Value Chain Hub VCH Foodstuff Supply Services L.L.C",
  "Smart Ascopa Virtual Assets Broker & Dealer Services L.L.C",
  "Aleilaj Al Sihriy for Medical Surgical Articles and Requisites Trading L.L.C",
  "Dinapoli Restaurant and Café",
  "Telco Vista Mobile Phones & Accessories Trading LLC"
];

const Companies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="relative bg-blue-950 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our <span className="text-amber-500">Affiliated Companies</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <div 
              key={index}
              className={`bg-blue-900/50 backdrop-blur-sm p-4 rounded-lg transition-all duration-500 hover:bg-blue-900/70 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <p className="text-white text-center">{company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
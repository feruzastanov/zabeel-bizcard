"use client"

import { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Building, CheckCircle2 } from 'lucide-react';

const achievements = [
  { number: '88+', text: 'Companies Served' },
  { number: '20+', text: 'Years Experience' },
  { number: '50+', text: 'Industry Experts' },
  { number: '200+', text: 'Projects Completed' },
];

const testimonials = [
  {
    quote: "Zabeel Group helped us redefine our business strategy and improve our processes significantly. Their expertise in our industry was impressive.",
    author: "Mohammed A.",
    position: "CEO, Al Futtaim Group"
  },
  {
    quote: "Working with Zabeel transformed our approach to market challenges. Their team provided innovative solutions that gave us a competitive edge.",
    author: "Fatima R.",
    position: "Director, Emirates Medical Group"
  },
  {
    quote: "The consultancy services provided by Zabeel were instrumental in our expansion. Their international experience proved invaluable.",
    author: "Ahmed K.",
    position: "Founder, Dubai Investments"
  }
];

const keyFeatures = [
  "Dynamic approach to evolving business landscapes",
  "International consultancy experience",
  "Government partnership initiatives",
  "Strategic business development",
  "Process optimization expertise",
  "Customized growth solutions"
];

const Clients = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section 
      id="clients" 
      ref={sectionRef}
      className="relative bg-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-blue-950 mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our <span className="text-amber-500">Success Story</span>
          </h2>
          <div className={`w-24 h-1 bg-amber-500 mx-auto transition-all duration-700 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className={`bg-blue-950 text-white rounded-lg p-6 text-center shadow-lg transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="text-amber-400 text-4xl font-bold mb-2">{item.number}</div>
              <div className="text-gray-300">{item.text}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className={`md:col-span-2 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-blue-950 mb-6">Why Choose Zabeel Group</h3>
            
            <div className="space-y-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-amber-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Building className="text-blue-900 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-950">UAE Government Partner</h4>
                  <p className="text-gray-600 text-sm">Official consultancy partner for government initiatives</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`md:col-span-3 transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-blue-950 mb-6">Client Testimonials</h3>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-amber-500"
                >
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-blue-950">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
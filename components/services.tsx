"use client"

import { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { 
  Building2, 
  Stethoscope, 
  LineChart, 
  Database,
  Plane,
  Wheat,
  Car,
  ShoppingCart,
  Scale,
  Apple,
  Briefcase,
  Box,
  Anchor,
  Store,
  Bitcoin,
  Building,
  Users,
  PenTool
} from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Industry & Contracting Services",
    description: "Offering tailored project management and operational solutions to enhance productivity and efficiency in industrial and contracting sectors."
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Medical & Healthcare Consultancy",
    description: "Assisting healthcare providers in optimizing their services, compliance, and operational management for better patient outcomes."
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Financial & Banking Solutions",
    description: "Providing expert financial advisory services, banking strategies, and risk management solutions for a stable and profitable financial framework."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Technology & Database Systems Design",
    description: "Developing robust and scalable digital solutions to help businesses improve data management, security, and operational efficiency."
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Travel & Tourism Support",
    description: "Enhancing travel agencies with strategic marketing and operational frameworks to attract and retain customers in a competitive industry."
  },
  {
    icon: <Wheat className="w-8 h-8" />,
    title: "Agricultural & Livestock Farming",
    description: "Implementing sustainable farming practices and business models to ensure growth and profitability in the livestock sector."
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Valet Parking Services",
    description: "Delivering seamless, professional, and secure valet parking solutions to enhance customer convenience and satisfaction."
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "General Trading Solutions",
    description: "Facilitating efficient supply chain management, distribution strategies, and procurement processes for businesses in multiple sectors."
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Legal & Regulatory Services",
    description: "Ensuring businesses comply with local and international legal frameworks, minimizing risk, and protecting their assets."
  },
  {
    icon: <Apple className="w-8 h-8" />,
    title: "Foodstuff Trading",
    description: "Offering strategic sourcing, logistics, and distribution solutions to ensure quality and efficiency in food supply chains."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Commercial Brokerage & Trading",
    description: "Facilitating seamless business transactions, trade expansions, and brokerage services to maximize commercial potential."
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "Goods Wholesalers Support",
    description: "Enhancing wholesale business operations by optimizing logistics, inventory management, and supplier relations."
  },
  {
    icon: <Anchor className="w-8 h-8" />,
    title: "Yacht Rental & Leisure Services",
    description: "Providing premium yacht rental services with exceptional customer experiences and safety standards."
  },
  {
    icon: <Store className="w-8 h-8" />,
    title: "Retail & Consumer Goods Services",
    description: "Supporting businesses in retail, department stores, and readymade garments trading to optimize supply chain management and customer satisfaction."
  },
  {
    icon: <Bitcoin className="w-8 h-8" />,
    title: "Virtual Assets Brokerage & Dealer Services",
    description: "Providing expert guidance in digital asset trading, ensuring compliance with financial regulations and industry best practices."
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Department Store Management",
    description: "Implementing effective retail strategies, inventory management, and customer service solutions to maximize profitability and customer experience."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Recruitment & Workforce Solutions",
    description: "Offering expert recruitment strategies, talent acquisition, and HR consultancy services to ensure businesses hire and retain top talent."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Management & Marketing Consultancy",
    description: "Delivering strategic marketing solutions, business development plans, and operational guidance to drive sustainable growth and market leadership."
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gray-50 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-blue-950 mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our <span className="text-amber-500">Services</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-gray-600 mt-4 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Comprehensive business solutions tailored to meet the diverse needs of our clients across multiple sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all border-b-4 border-amber-500 transform hover:-translate-y-1 duration-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-amber-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-950 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
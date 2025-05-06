"use client"

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-blue-900/95 shadow-md backdrop-blur-sm py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white font-bold text-2xl">
            <span className="text-4xl">Z</span>ABEEL GROUP
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-gold-400 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-gold-400 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white hover:text-gold-400 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('clients')}
            className="text-white hover:text-gold-400 transition-colors"
          >
            Clients
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden fixed top-[60px] left-0 right-0 bg-blue-900 transition-all duration-300 ease-in-out overflow-hidden",
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white py-2 text-left"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white py-2 text-left"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white py-2 text-left"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('clients')}
            className="text-white py-2 text-left"
          >
            Clients
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
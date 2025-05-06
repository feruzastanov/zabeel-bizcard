"use client"

import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="text-white font-bold text-2xl mb-4">
                <span className="text-4xl">Z</span>ABEEL GROUP
              </div>
              <p className="text-gray-300">
                Management & Marketing Consultancy established in 2002 in UAE.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="text-amber-500 w-4 h-4" />
                <span className="text-gray-300 text-sm">+97152833533</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-amber-500 w-4 h-4" />
                <span className="text-gray-300 text-sm">zabeel@emirates.net.ae</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-amber-500 w-4 h-4" />
                <span className="text-gray-300 text-sm">Pyramid Centre Office 313A Dubai-U.A.E</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Services</h3>
            <ul className="space-y-2">
              <li><button className="text-gray-300 hover:text-amber-400 transition-colors text-sm">Industrial</button></li>
              <li><button className="text-gray-300 hover:text-amber-400 transition-colors text-sm">Medical</button></li>
              <li><button className="text-gray-300 hover:text-amber-400 transition-colors text-sm">Financial Solutions</button></li>
              <li><button className="text-gray-300 hover:text-amber-400 transition-colors text-sm">Investment</button></li>
              <li><button className="text-gray-300 hover:text-amber-400 transition-colors text-sm">Media</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('clients');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Clients
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to receive updates on our services and industry insights.
            </p>
            
            <div className="space-y-2">
              <input 
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-blue-900 border border-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
              />
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-900 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Zabeel Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
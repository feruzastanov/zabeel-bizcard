"use client"

import { useRef, useState } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here
    setFormSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative bg-blue-950 py-20"
      style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0 100%)' }}
    >
      <div className="container mx-auto px-4 pt-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <div className={`w-24 h-1 bg-amber-500 mx-auto transition-all duration-700 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`max-w-2xl mx-auto text-gray-300 mt-4 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Ready to transform your business? Contact us today for expert consultancy services tailored to your industry and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-amber-500 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-900 p-3 rounded-full">
                  <Phone className="text-amber-500 w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-300 font-medium">Phone</div>
                  <div className="text-white">+97152833533</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-900 p-3 rounded-full">
                  <Mail className="text-amber-500 w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-300 font-medium">Email</div>
                  <div className="text-white">zabeel@emirates.net.ae</div>
                  <div className="text-white">zabeelconsultancy@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-900 p-3 rounded-full">
                  <MapPin className="text-amber-500 w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-300 font-medium">Address</div>
                  <div className="text-white">Pyramid Centre Office 313A</div>
                  <div className="text-white">Dubai, U.A.E</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Thursday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday:</span>
                  <span>9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-950 mb-6">Send us a message</h3>
              
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    variant="outline"
                    className="text-blue-950"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      required
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
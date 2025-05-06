"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold text-blue-950 mb-4 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Get in <span className="text-amber-500">Touch</span>
            </h2>
          </div>

          <div
            className={`space-y-8 transition-all duration-700 delay-300 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="bg-amber-500 p-3 rounded-full">
                <Phone className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-950 mb-2">
                  Phone
                </h3>
                <p className="text-gray-600">+971 52 833 3533</p>
                <p className="text-gray-600">+971 4 334 5656</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-500 p-3 rounded-full">
                <Mail className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-950 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">zabeelconsultancy@gmail.com</p>
                <p className="text-gray-600">zabeell@emirates.net.ae</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-amber-500 p-3 rounded-full">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-950 mb-2">
                  Address
                </h3>
                <p className="text-gray-600">
                  Villa 45, Al Bastakia Department Store,
                  <br />
                  Al Fahidi Historical Neighbourhood,
                  <br />
                  Bur Dubai - U.A.E.
                  <br />
                  P.O. Box: 55611 Dubai, United Arab Emirates
                </p>
              </div>
            </div>

            <div className="text-center pt-8">
              <p className="text-gray-600">Website: www.fuadalbastaki.ae</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

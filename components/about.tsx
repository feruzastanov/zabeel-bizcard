"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} className="relative bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`space-y-6 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8">
              About{" "}
              <span className="text-amber-500">
                Zabeel Management & Marketing Consultancy
              </span>
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Founded in 1995 in the United Arab Emirates, Zabeel Management &
              Marketing Consultancy has steadily grown into a trusted and
              consistent business partner for more than 88 companies across
              various industries. Over the years, we have established ourselves
              as a pillar of excellence, providing an extensive range of
              services designed to support and elevate businesses.
            </p>

            <p className="text-gray-700 leading-relaxed">
              At Zabeel Management & Marketing Consultancy, we are committed to
              delivering exceptional solutions tailored to meet the diverse
              needs of businesses, whether they are startups, SMEs, or large
              corporations. Our dynamic team of professionals works closely with
              each client, offering strategic guidance and practical
              implementation plans that drive performance improvement, growth,
              and diversification within today's competitive global market.
            </p>

            <div className="bg-blue-950 text-white p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-semibold mb-4">Our Leadership</h3>
              <p className="text-gray-300">
                Zabeel Management & Marketing Consultancy is led by our esteemed
                chairman, Fuad Abdul Qader Al Bastaki, whose visionary
                leadership has propelled the company to new heights. Under his
                guidance, we have expanded our services and established strong
                partnerships with multiple organizations across various sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

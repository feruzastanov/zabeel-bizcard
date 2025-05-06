"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-blue-950 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-20"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <img
            src="/fuadAlBastaki.jpeg"
            alt="Fuad Abdul Qader Al Bastaki"
            className="w-52 h-52 rounded-full mx-auto mb-8 object-cover border-4 border-amber-500 shadow-lg"
          />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            FUAD ABDUL QADER <br /> AL BASTAKI
          </h1>
          <p className="text-4xl text-amber-400 mb-6">Chairman</p>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Under his visionary leadership, Zabeel Management & Marketing
            Consultancy has expanded its services and established strong
            partnerships with multiple organizations across various sectors.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-950 to-transparent"></div>
    </section>
  );
};

export default Hero;

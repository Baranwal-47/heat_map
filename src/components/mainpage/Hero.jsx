// Hero.jsx
import React from "react";
import heroImg from "../../assets/mahatma-gandhi-setu-patna.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative isolate w-full min-h-[90vh] overflow-hidden font-montserrat">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Shading overlay */}
            <div className="absolute inset-0 -z-20 pointer-events-none bg-gradient-to-b from-orange-600/60 via-amber-400/45 to-rose-300/35 mix-blend-multiply" />
            
                  {/* Soft dark fade for text contrast */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
      {/* Content */}
      <div className="relative mx-auto max-w-2xl px-6 py-16 sm:py-24 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[#004275]">
          Model <span className="text-[#F70402]">Heat</span> Action Plan for{" "}
          <span className="text-[#148707]">Patna</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90">
          A roadmap to protect communities and build resilience against extreme
          heat.
        </p>
        <div className="mt-8">
          <Link
            to="/analytics"
            className="inline-flex items-center rounded-md bg-[#004275] px-7 py-4 text-sm font-semibold text-white shadow hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            EXPLORE THE HEAT ACTION PLAN
          </Link>
        </div>
      </div>
    </section>
  );
}

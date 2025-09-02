import { Link } from "react-router-dom";

// ExploreCTA.jsx
export default function Explore() {
  return (
    <section className="bg-[#004275] mt-24 font-montserrat">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:py-16">
        <div className="flex flex-col items-center text-center gap-5">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Explore The Heat Action Plan for Patna?
          </h2>

          <p className="text-white/80 text-sm sm:text-base">
            Start your heat resilience assessment today with our comprehensive platform
          </p>

          <Link
            to="/analytics"
            className="group inline-flex items-center gap-3 rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-[#0F4C73] shadow-sm hover:shadow md:px-6 md:py-3 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0F4C73]"
          >
            <span className="inline-flex size-6 items-center justify-center rounded-full border border-[#0F4C73]/30 text-[#0F4C73]">
              {/* Play icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3.5">
                <path d="M6.3 4.9a1 1 0 0 0-1.55.83v8.54a1 1 0 0 0 1.55.83l7.38-4.27a1 1 0 0 0 0-1.66L6.3 4.9z" />
              </svg>
            </span>
            <span>Explore Now</span>
            <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#0F4C73] text-white transition-transform group-hover:translate-x-0.5">
              {/* Arrow icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3.5">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

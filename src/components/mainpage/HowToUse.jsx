// HowToUse.jsx
const steps = [
  {
    n: "01",
    title: "Navigate block-level",
    body:
      "maps to visualize exposure, sensitivity, adaptive capacity, and overall heat vulnerability across Patna.",
  },
  {
    n: "02",
    title: "Simulate future heat risk scenarios",
    body:
      "simulate future heat risk scenarios (2030–2050) to understand how heat risks may evolve over time.",
  },
  {
    n: "03",
    title: "Toggle between indices",
    body:
      "switch among Exposure, Sensitivity, Adaptive Capacity, and Vulnerability indices to understand different risk dimensions and identify hotspots.",
  },
  {
    n: "04",
    title: "Access recommendations",
    body:
      "get preparedness, response, and recovery actions tailored to block‑wise risk profiles.",
  },
  {
    n: "05",
    title: "Leverage data‑driven insights",
    body:
      "support planning, disaster management, public‑health interventions, and community awareness initiatives.",
  },
];

export default function HowToUse() {
  return (
    <section className="bg-slate-50 font-montserrat">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
          How to use model heat action plan?
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-slate-600 text-sm sm:text-base">
          The Model HAP Portal is an interactive decision‑support platform that lets users explore heat risks, simulate scenarios, and access targeted advisories for the district.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-lg"
            >
              <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-[#004275] text-white text-base font-bold ring-2 ring-offset-4 ring-offset-sky-100">
                {s.n}
              </div>

              
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-800">{s.title} </span>
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-xs sm:text-sm ">
          This functionality enables decision‑makers to explore “what‑if” scenarios, design localised responses, and strengthen resilience against extreme heat in Patna.
        </p>
      </div>
    </section>
  );
}

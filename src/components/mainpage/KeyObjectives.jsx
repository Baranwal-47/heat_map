// KeyObjectives.jsx
import leftPhoto from "../../assets/sunset_image.png";
import aiIcon from "../../assets/flight (1).png";
import planIcon from "../../assets/flight.png";
import capacityIcon from "../../assets/flight (2).png";

export default function KeyObjectives() {
  return (
    <section className="relative bg-white font-montserrat">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: photo on rings background */}
          <div className="flex justify-center items-center">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[repeating-radial-gradient(circle_at_20%_50%,_rgba(15,76,115,0.12)_0px,_rgba(15,76,115,0.12)_14px,_transparent_14px,_transparent_60px)]" />
            <img
              src={leftPhoto}
              alt="Sun over Patna city"
              className="w-full rounded-3xl object-cover aspect-[4/3]"
            />
          </div>

          {/* Right: text and cards */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Key Objectives
            </h2>
            <p className="mt-3 text-slate-600">
              The Model Heat Action Plan for Patna has three core objectives
              realized through this digital portal.
            </p>

            <div className="mt-6 space-y-4">
              {/* Card 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <img
                    src={aiIcon}
                    alt=""
                    className="size-9 object-contain"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      AI‑driven heat risk assessment
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Deliver high‑resolution maps and indices to understand
                      current and future heat risks in Patna.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <img
                    src={planIcon}
                    alt=""
                    className="size-9 object-contain"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      Patna‑specific Heat Action Plan
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Provide customized insights based on local
                      vulnerabilities, enabling action on evidence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="my-auto">
                    <img
                      src={capacityIcon}
                      alt=""
                      className="size-10 object-contain"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      Strengthened local capacity
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Create a sustainable digital framework for training,
                      decision‑making, and long‑term resilience planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

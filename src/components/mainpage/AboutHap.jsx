// AboutHap.jsx
import HAP_Image from '../../assets/HAP_Screen.png'

export default function AboutHap() {
  return (
    <section className="relative bg-gradient-to-tr from-indigo-50/70 via-white to-pink-50/70 font-montserrat">
      <div className="mx-auto max-w-4xl  py-16 sm:py-20 text-gray-800">
        {/* Pill label */}
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-800 text-[11px] font-medium px-3 py-1">
            About HAP
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          What is model heat action plan for Patna?
        </h2>

        {/* Copy */}
        <div className="mt-8 space-y-5 text-base sm:text-lg leading-relaxed">
          <p className="text-justify">
          The <span className="font-semibold">Model Heat Action Plan (HAP)</span> for Patna District is a dynamic, data-driven, locally customised, and hyper-granular Heat Action Plan to reduce vulnerability, protect lives and livelihoods, and enhance resilience against extreme heat events in the Patna district. At its core, the focus is on integrating scientific modelling with community-level preparedness to address the growing risks of climate-induced heat stress.
          </p>
          <p className="text-justify">
            The <span className="font-semibold">Heat Vulnerability Assessment</span> conducted is multiparametric and comprises of 3 different modules namely Heat Exposure, Sensitivity and Adaptive Capacity to reach at a composite Vulnerability Index defined for each of the 23 blocks in Patna. This includes both Heat wave index and Heat Risk Index. The future Heat risk scenarios have also been included in the portal for the time frame till 2050.
          </p>
          <p className="text-justify">
            The Model Heat Action Plan Portal for Patna turns this vision into a digital, interactive platform that helps users <span className="font-semibold">understand heat risks</span>, <span className="font-semibold">explore future scenarios</span>, and <span className="font-semibold">strengthen resilience through data‑driven insights</span>.
          </p>
        </div>
      </div>


      <div className='max-w-4xl border-20 border-[#004275] rounded-md mx-auto'>
        <img src={HAP_Image} alt="HAP Screenshot" className="bg-cover" />
      </div>
    </section>
  );
}

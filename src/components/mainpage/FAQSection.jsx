import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is model heat action plan for Patna?",
      answer: "The Model Heat Action Plan for Patna District is a dynamic, data-driven, and locally customised strategy to protect lives and livelihoods from extreme heat. It combines scientific modelling with community preparedness, using block-level Exposure, Sensitivity, and Adaptive Capacity modules to generate a composite Heat Vulnerability Index and future Heat Risk scenarios up to 2050 which is accessible through the interactive portal."
    },
    {
      question: "How does the model heat action plan work?",
      answer: "The Model HAP combines three analytic modules: Exposure, Sensitivity and Adaptive Capacity to produce block-level indices (Exposure, Sensitivity, Adaptive Capacity and a composite Heat Vulnerability Index) plus two risk measures (Heatwave Index and Heat Risk Index). The portal layers these indices with demographic and departmental data (health, water, labour, urban services etc.), lets users toggle indices and run forward simulations to 2030–2050, and supports the translation of those insights into block-wise preparedness actions and planning priorities in the form of advisories and recommendations."
    },
    {
      question: "Why is the model heat action plan important?",
      answer: "Extreme heat is a growing climate risk for Patna. The Model HAP is important because it turns granular risk analysis into operational insight. By flagging which of Patna's 23 blocks are most vulnerable today and under future scenarios, it enables prioritised interventions, focused protection of high-risk populations, and evidence-based allocation of resources. It also creates an auditable, data-driven record to inform policy, financing and monitoring, moving the district from generic advisories to measurable resilience outcomes."
    },
    {
      question: "How can we compare multiple blocks' composite heat-risk-index?",
      answer: "The portal enables users to explore each block individually, with composite Heat Risk Index scores represented through statistical information for clearer interpretation. While blocks are viewed one by one, these pictorial charts make it possible to compare heat risk scenarios across Patna's 23 blocks. Additional layers such as road networks, health facilities, and sewage infrastructure help users contextualise the differences, highlighting how variations in services and exposure shape vulnerability profiles."
    },
    {
      question: "What data sources are used for the model heat action plan?",
      answer: "The model HAP is based on a mix of publicly available datasets including climate records from IMD, satellite observations (Landsat, Sentinel), census and district statistics along with departmental data shared through BSDMA and DDMA. These combined sources ensure that the portal provides a robust, evidence-based picture of heat risks in Patna."
    },
    {
      question: "How can policy makers use the model heat action plan?",
      answer: "Policy makers can use the portal as a decision-support tool to identify hotspots and produce block-level maps and reports for planning and budgeting. It helps set locally appropriate thresholds, target multi-sectoral interventions (health, water, labour, etc.), testing of policy options by comparing future scenario runs, and ongoing performance tracking against KPIs to inform adaptive planning and inter-departmental coordination."
    },
    {
      question: "How can communities use the model heat action plan?",
      answer: "Communities can use the portal to explore block-level heat maps, access simple safety advisories and recommendations in multi-lingual formats. The portal acts as a high-performing and streamlined tool effecting in planning practical actions (timing of outdoor work, hydration points, local awareness drives), locate support services, and feed local observations back into planning processes to improve response relevance and timeliness. By showing risk profiles and protective measures, the portal empowers households, frontline workers, and local organisations to act early, stay safe, and strengthen community-level resilience during heatwaves."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 px-4 font-montserrat">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get answers to common questions about the Model Heat Action Plan for Patna
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-[#004275] overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full cursor-pointer px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#004275]"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <FiChevronUp className="w-5 h-5 text-[#004275]" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-[#004275]" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 pt-2">
                  <div className="border-t border-orange-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}

      </div>
    </section>
  );
};

export default FAQSection;

import React from 'react'
import Footer1 from '../components/Footer1'
import Header1 from '../components/Header1'

const TermsAndConditions = () => {
  return (
    <div>
        <Header1 />
      <div className="max-w-5xl mx-auto p-6 text-gray-800 mb-8 font-montserrat">
      <h1 className="text-3xl font-bold mb-10 mt-6 text-center">Privacy Policy for Heat Action Plan(HAP) Patna</h1>

      <section className="mb-6">
        <p>
          IPE Global Limited (“we”, “us”, “our”, IPE Global) is committed to protecting the privacy and personal data of users interacting with the HAP Patna Dashboard.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Background</h2>
        <p>
          The Heat Action Plan (HAP) is a comprehensive framework designed to address the challenges posed by extreme heat events in urban areas. It aims to enhance the resilience of cities to heat waves and protect vulnerable populations from heat-related health risks.
        </p>
        <p className="mt-2">
          The HAP focuses on key strategies such as early warning systems, public awareness campaigns, and the implementation of heat-resilient infrastructure. It enables data-driven interventions to mitigate the impacts of heat waves on urban communities.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Data We Collect</h2>
        <ul className="list-disc list-inside pl-4">
          <li><strong>Usage Data:</strong> Browser type, device info, IP address, pages visited, interaction patterns</li>
          <li><strong>Feedback or Inputs:</strong> Voluntarily shared feedback or communication</li>
          <li><strong>Cookies and Analytics:</strong> Limited cookies or tools for usage insights</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Purpose of Data Collection</h2>
        <ul className="list-disc list-inside pl-4">
          <li>Improve user experience and dashboard performance</li>
          <li>Analyse aggregate trends for future enhancements</li>
          <li>Ensure system security and functionality</li>
        </ul>
        <p className="mt-2">No personal profiling, targeted marketing, or commercial use of data is undertaken.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Sharing and Disclosure</h2>
        <p>We do not sell, trade, or rent user data. Only aggregate, anonymised metrics may be shared with project partners or donors.</p>
        <p className="mt-2">Data may be disclosed:</p>
        <ul className="list-disc list-inside pl-4">
          <li>To comply with legal obligations</li>
          <li>To enforce Terms of Use</li>
          <li>To trusted technical providers under confidentiality agreements</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <ul className="list-disc list-inside pl-4">
          <li>Secure servers and restricted access</li>
          <li>Regular security audits and encryption</li>
          <li>Firewall and threat-monitoring mechanisms</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Third-Party Tools and Links</h2>
        <p>
          External links or embedded tools may be present. We are not responsible for the privacy practices of those services. Please review their respective policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. User Rights</h2>
        <p>
          Since no personal data is required, individual access or deletion requests do not apply. However, users can request deletion of personal info submitted via feedback forms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Acceptable Use Policy</h2>
        <h3 className="font-semibold">Non-Commercial Usage:</h3>
        <ul className="list-disc list-inside pl-4">
          <li>All content is for non-commercial use only</li>
          <li>Users may cite the CRI Dashboard with attribution for academic, research, or policy purposes</li>
        </ul>
        <h3 className="font-semibold mt-4">Prohibited Activities:</h3>
        <ul className="list-disc list-inside pl-4">
          <li>No commercial, financial, or consulting use</li>
        </ul>
        <h3 className="font-semibold mt-4">Data Accuracy and Liability:</h3>
        <ul className="list-disc list-inside pl-4">
          <li>The platform is provided “as-is” without guarantees</li>
          <li>Developers are not liable for outcomes based on insights</li>
          <li>Third-party services adhere to similar standards</li>
        </ul>
        <h3 className="font-semibold mt-4">Attribution and Citation:</h3>
        <p>Users must properly cite the Climate Readiness Index (CRI) Dashboard and contributors when referencing content.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Policy Updates</h2>
        <p>
          This policy may be revised periodically. Users are encouraged to review the policy on the Dashboard or its hosting site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          For questions or concerns, please contact:
          <br />
          <strong>Climate Change and Sustainability Team</strong><br />
          IPE Global Limited<br />
          Email: <a href="mailto:ccs@ipeglobal.com" className="text-blue-600 underline">ccs@ipeglobal.com</a>
        </p>
      </section>
    </div>
    <Footer1 />
    </div>
  )
}

export default TermsAndConditions

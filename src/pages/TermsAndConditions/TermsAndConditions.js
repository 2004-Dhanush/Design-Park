import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-16 px-6 md:px-32 lg:px-48 text-gray-800">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Terms and Conditions</h1>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">1. Acceptance of Terms</h2>
            <p className="text-base leading-relaxed">By using Design-Park, you agree to be bound by these terms. If you do not accept them, you should not use our services. Continued use of the platform signifies acceptance of any updates or modifications to the terms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">2. Intellectual Property</h2>
            <p className="text-base leading-relaxed">All content, including visuals, code, branding, and other digital assets on Design-Park, is owned by Design-Park and is protected by copyright laws. Any unauthorized use, reproduction, or distribution is prohibited without written consent.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">3. User Responsibilities</h2>
            <p className="text-base leading-relaxed">Users must not use Design-Park for any unlawful, malicious, or harmful purposes. Users agree to use the platform respectfully and within the bounds of applicable laws.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">4. Service Availability & Modifications</h2>
            <p className="text-base leading-relaxed">We may modify or discontinue our services at any time. While we strive for maximum uptime, we may occasionally undergo maintenance or experience technical issues.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">5. Limitation of Liability</h2>
            <p className="text-base leading-relaxed">Design-Park is not liable for any damages resulting from the use or inability to use our services. Users are solely responsible for how they utilize the platform.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">6. Privacy Policy</h2>
            <p className="text-base leading-relaxed">User data is handled in accordance with our Privacy Policy. By using Design-Park, you consent to the collection and use of your data as described therein.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">7. Changes to Terms</h2>
            <p className="text-base leading-relaxed">These terms may be updated periodically. Your continued use of the platform signifies agreement to the updated terms. Please review them regularly.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">8. Governing Law</h2>
            <p className="text-base leading-relaxed">These terms are governed by the laws applicable in India. Any disputes shall be subject to the jurisdiction of courts in India.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">9. Prohibited Conduct</h2>
            <p className="text-base leading-relaxed">Activities such as spamming, hacking, or posting malicious content are strictly prohibited. Violation of these terms may lead to immediate account suspension.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">10. Termination</h2>
            <p className="text-base leading-relaxed">Design-Park may terminate access to services for any breach of terms. Users are expected to maintain compliance with all guidelines.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">11. Indemnification</h2>
            <p className="text-base leading-relaxed">Users agree to indemnify Design-Park against claims arising from their misuse of the platform or violation of these terms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">12. Third-Party Services</h2>
            <p className="text-base leading-relaxed">Design-Park may contain links to third-party sites. We are not responsible for the content or practices of these external platforms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">13. Dispute Resolution</h2>
            <p className="text-base leading-relaxed">We aim to resolve disputes amicably. In case of unresolved issues, legal proceedings shall take place under the jurisdiction stated above.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">14. Service Usage Restrictions</h2>
            <p className="text-base leading-relaxed">Misuse of the service including but not limited to phishing, scamming, or distribution of malicious content will result in access revocation and possible legal action.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">15. Security Measures</h2>
            <p className="text-base leading-relaxed">We implement reasonable security practices but cannot guarantee absolute protection. Users are responsible for safeguarding their credentials.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700">16. Contact Us</h2>
            <p className="text-base leading-relaxed">For any questions, please contact us at <strong className="text-gray-900">dk255767@gmail.com</strong>. We are here to help and support you.</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;

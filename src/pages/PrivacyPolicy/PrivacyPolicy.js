import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PrivacyPolicy = () => {
  const containerStyle = {
    width: '100%',
    margin: 'auto',
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: '40px',
    fontSize: '36px',
    fontFamily: 'Arial, sans-serif'
  };

  const subHeadingStyle = {
    color: '#34495e',
    fontWeight: '600',
    fontSize: '24px',
    marginTop: '30px',
    marginBottom: '15px',
    fontFamily: 'Arial, sans-serif'
  };

  const textStyle = {
    color: '#555',
    fontSize: '18px',
    lineHeight: '1.8',
    fontFamily: 'Arial, sans-serif',
    marginBottom: '20px'
  };

  const listStyle = {
    color: '#555',
    fontSize: '18px',
    lineHeight: '1.8',
    fontFamily: 'Arial, sans-serif',
    paddingLeft: '20px',
    marginBottom: '20px',
  };

  return (
    <>
      <Navbar />
      <div className="container pt-4" style={containerStyle}>
        <h1 style={headingStyle}>Privacy Policy</h1>

        <p style={textStyle}>At Design-Park, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>

        <h3 style={subHeadingStyle}>1. Information We Collect</h3>
        <ul style={listStyle}>
          <li><strong>Personal Information:</strong> Name, email, and other details you provide to us.</li>
          <li><strong>Usage Data:</strong> Information on how you use our platform.</li>
          <li><strong>Cookies:</strong> Used to improve your user experience and site functionality.</li>
        </ul>

        <h3 style={subHeadingStyle}>2. How We Use Your Information</h3>
        <ul style={listStyle}>
          <li><strong>Provide Services:</strong> To personalize your experience and deliver our services.</li>
          <li><strong>Communicate:</strong> To send you updates, promotions, and notifications.</li>
          <li><strong>Improve Our Platform:</strong> To analyze usage and enhance user experience.</li>
        </ul>

        <h3 style={subHeadingStyle}>3. How We Protect Your Data</h3>
        <ul style={listStyle}>
          <li><strong>Security Measures:</strong> We use encryption and other security protocols to protect your data.</li>
          <li><strong>Data Retention:</strong> Your data will be kept only as long as necessary for legal or operational reasons.</li>
        </ul>

        <h3 style={subHeadingStyle}>4. Sharing Your Information</h3>
        <ul style={listStyle}>
          <li><strong>Service Providers:</strong> We may share your data with trusted partners to help provide our services.</li>
          <li><strong>Legal Obligations:</strong> We may disclose your information to comply with legal requirements.</li>
        </ul>

        <h3 style={subHeadingStyle}>5. Your Rights</h3>
        <ul style={listStyle}>
          <li><strong>Access & Correction:</strong> You can access and update your personal information anytime.</li>
          <li><strong>Opt-Out:</strong> You can opt out of marketing emails by unsubscribing at any time.</li>
        </ul>

        <h3 style={subHeadingStyle}>6. Children’s Privacy</h3>
        <p style={textStyle}>Our services are not intended for children under 13 years of age. We do not knowingly collect data from children.</p>

        <h3 style={subHeadingStyle}>7. Changes to This Privacy Policy</h3>
        <p style={textStyle}>We may update this policy from time to time. Any changes will be posted on this page.</p>

        <h3 style={subHeadingStyle}>8. Contact Us</h3>
        <p style={textStyle}><strong>Email:</strong> <a href="mailto:dk255767@gmail.com">dk255767@gmail.com</a></p>
        <p style={textStyle}><strong>Phone:</strong> +91 7502218281</p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

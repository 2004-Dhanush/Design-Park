import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AboutUs = () => {
  const containerStyle = {
    width: '100%',
    margin: 'auto',
    padding: '40px',
    backgroundColor: '#f5f5dc', // Subtle wheat color
  };

  const headingStyle = {
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '30px',
    fontSize: '30px',
    fontFamily: 'Arial, sans-serif'
  };

  const subHeadingStyle = {
    color: '#34495e',
    fontWeight: 'bold',
    fontSize: '22px',
    marginTop: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const textStyle = {
    color: '#555',
    fontSize: '17px',
    lineHeight: '1.8',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <>
      <Navbar />
<div className="max-w-5xl mx-auto px-4 py-12 space-y-12 text-gray-800">
  <section className="text-center">
    <h1 className="text-4xl font-bold mb-4">About Us</h1>
    <p className="text-lg leading-relaxed">
      Design-Park is India’s go-to platform for top-tier design solutions — from posters to UI/UX. Whether you're an individual, startup, or business, we help bring your creative ideas to life with stunning visuals and intuitive design.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
    <p className="text-base leading-relaxed">
      To simplify design for everyone by providing creative, high-quality, and user-centric visual solutions. We empower creators and brands through accessible tools, templates, and expert freelance collaborations.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Poster Design:</strong> Event, branding, and digital posters — customizable and ready to use.</li>
      <li><strong>UI/UX Design:</strong> Modern interfaces crafted for intuitive user experiences.</li>
      <li><strong>Mobile Screen Design:</strong> Pixel-perfect screens tailored for mobile apps.</li>
      <li><strong>Freelance Marketplace:</strong> Connect with creative professionals for custom projects.</li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Creativity:</strong> Original, impactful, and expressive design work.</li>
      <li><strong>User-Centricity:</strong> Designs focused on solving real user problems.</li>
      <li><strong>Quality:</strong> Excellence is our baseline — in design and service.</li>
      <li><strong>Collaboration:</strong> We thrive through shared ideas and co-creation.</li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
    <p className="text-base leading-relaxed">
      Born from a vision to make design more accessible, Design-Park began as a passion project and quickly became a creative force. We've helped individuals and companies level up their brand and digital presence with beautiful, functional design.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>All-in-One:</strong> Posters, screens, and UX — all in one creative hub.</li>
      <li><strong>Custom Service:</strong> We tailor every design to fit your needs.</li>
      <li><strong>Talented Creators:</strong> Work with a curated pool of freelance pros.</li>
      <li><strong>Smart Pricing:</strong> Get premium quality without the premium price.</li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
    <p className="text-base leading-relaxed">Have a project in mind? Let’s create something amazing together.</p>
    <div className="mt-4 space-y-2">
      <p><strong>Email:</strong> <a className="text-blue-600 underline" href="mailto:designparkindia@gmail.com">designparkindia@gmail.com</a></p>
      <p><strong>Phone:</strong> +91 98765 43210</p>
    </div>
  </section>
</div>
<Footer />

    </>
  );
};

export default AboutUs;

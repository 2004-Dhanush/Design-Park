import React from "react";
import './index.css';

const ServicesContainer = () => {
  return (
    <div
      className="bg-white text-gray-900 px-8 py-16 mx-auto rounded-lg shadow-xl"
      style={{ background: "#f9f9f9", width: "100%", maxWidth: "1200px" }}
    >
      <h2 className="text-4xl font-extrabold text-center text-gray-900">
        OUR DESIGN SERVICES AT DESIGN-PARK
      </h2>
      
      <p className="mt-6 text-lg text-gray-700 text-justify leading-relaxed">
        At Design-Park, we are committed to bringing your creative ideas to life. Whether you're looking for a visually stunning website, a memorable logo, or a complete brand identity, we have the expertise to deliver. Our team of designers works closely with you to understand your needs and goals, ensuring that every project reflects your unique vision and message.
      </p>
      
      <h3 className="text-3xl font-bold mt-8 text-gray-900">
        WHAT WE PROVIDE
      </h3>
      
      <ul className="mt-6 list-disc pl-6 text-lg text-gray-700 leading-relaxed">
        <li><strong>UI/UX Design:</strong> We craft intuitive user interfaces and seamless user experiences that make digital products easy to navigate and enjoyable to use.</li>
        <li><strong>Website Design:</strong> From responsive websites to e-commerce platforms, we design visually engaging, user-friendly websites that function perfectly across all devices.</li>
        <li><strong>Brand Identity:</strong> We help you create a strong, consistent brand identity through logo design, color schemes, typography, and brand guidelines.</li>
        <li><strong>Mobile App Design:</strong> Our design process ensures your mobile app looks great and provides an intuitive user experience, optimizing engagement and retention.</li>
        <li><strong>Poster & Graphic Design:</strong> We design eye-catching posters, flyers, and other marketing materials that communicate your message effectively and attract your target audience.</li>
        <li><strong>Freelance Design Services:</strong> Looking for specialized design work? We offer freelance design services for custom projects tailored to your needs.</li>
      </ul>
      
      <h3 className="text-3xl font-bold mt-8 text-gray-900">
        WHY CHOOSE DESIGN-PARK?
      </h3>
      
      <p className="mt-4 text-lg text-gray-700 text-justify leading-relaxed">
        At Design-Park, we focus on more than just aesthetics. We design with purpose, ensuring that every project serves both the functional and visual needs of your business. We prioritize user-centered design, ensuring that the final product is intuitive, efficient, and engaging.
      </p>

      <p className="mt-4 text-lg text-gray-700 text-justify leading-relaxed">
        Our team of designers is passionate about crafting designs that not only look great but also drive results. Whether you need a brand overhaul or a simple design update, we provide the expertise and dedication to take your ideas to the next level.
      </p>

      <h3 className="text-3xl font-bold mt-8 text-gray-900">
        READY TO START YOUR DESIGN JOURNEY?
      </h3>
      
      <p className="mt-4 text-lg text-gray-700 text-justify leading-relaxed">
        Let us bring your vision to life. From concept to execution, we are here to help you create something truly remarkable. Reach out today and start your design journey with us.
      </p>
    </div>
  );
};

export default ServicesContainer;

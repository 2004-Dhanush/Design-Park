import React from "react";
import './index.css';

const ServicesContainer = () => {
  return (
    <div
      className="bg-white text-gray-900 px-8 py-16 mx-auto rounded-2xl shadow-2xl"
      style={{ background: "#f9f9f9", width: "100%", maxWidth: "1200px" }}
    >
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
        OUR CREATIVE SOLUTIONS AT DESIGN-PARK
      </h2>

      <p className="mt-6 text-lg text-gray-700 text-justify leading-relaxed">
        At Design-Park, we specialize in creating exceptional digital experiences that elevate our clients' brands. Whether it's crafting unique promotional posters, building interactive websites, or developing intuitive mobile applications, we bring creativity and innovation to every project. Below is a selection of some of our clients and the work we have done for them.
      </p>

      <h3 className="text-3xl font-bold mt-12 text-gray-900 border-l-4 border-blue-500 pl-4">
        FEATURED CLIENTS & PROJECTS
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {[
          {
            title: "Client 1: Surya Engineering College",
            desc: "We designed a comprehensive brand identity for Surya Engineering College, including eye-catching posters, informative brochures, and consistent visual design elements."
          },
          {
            title: "Client 2: Gym Freak Nutrition",
            desc: "Gym Freak Nutrition needed impactful promotional materials. I designed a high-impact poster that effectively captured attention and elevated brand visibility."
          },
          {
            title: "Client 3: Transportation",
            desc: "For a transportation service, I designed a professional and memorable business card that clearly reflected their brand identity and reliability."
          },
          {
            title: "Client 4: Fashion Design",
            desc: "I created a visually captivating poster for a fashion design and tailoring business, showcasing their craftsmanship and unique style to attract potential clients."
          },
          {
            title: "Client 5: Personal Promotion",
            desc: "I designed a personal promotional poster that effectively highlights my skills and services, using a clean and engaging layout to make a strong visual impact."
          },
          {
            title: "Client 6: KSRCT-(Department)",
            desc: "I designed dynamic promotional posters for my department and college events, aimed at capturing attention, boosting participation, and enhancing the overall event presence."
          }
        ].map((client, index) => (
          <div
            key={index}
            className="client-card bg-white p-6 rounded-xl shadow-lg transition duration-300 transform hover:shadow-2xl hover:scale-105"
          >
            <h4 className="text-xl font-semibold text-gray-900">{client.title}</h4>
            <p className="text-gray-700 mt-4">{client.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="text-3xl font-bold mt-12 text-gray-900 border-l-4 border-green-500 pl-4">
        WHY CHOOSE DESIGN-PARK?
      </h3>

      <p className="mt-4 text-lg text-gray-700 text-justify leading-relaxed">
        At Design-Park, we specialize in creating stunning visuals and seamless user experiences that help businesses stand out. We are passionate about bringing your ideas to life and making sure they connect with your audience in meaningful ways.
      </p>

      <p className="mt-4 text-lg text-gray-700 text-justify leading-relaxed">
        Our team consists of experienced designers dedicated to achieving the best results, whether you need a custom website, a mobile app design, or compelling marketing materials. We work hand-in-hand with you to ensure your project exceeds expectations.
      </p>

      <h3 className="text-3xl font-bold mt-12 text-gray-900 border-l-4 border-purple-500 pl-4">
        READY TO START YOUR DESIGN JOURNEY WITH US?
      </h3>

      <p className="mt-4 text-lg text-gray-700 text-justify leading-relaxed">
        Reach out to us today and start building something incredible. Let’s create designs that speak to your audience and help you achieve your business goals.
      </p>
    </div>
  );
};

export default ServicesContainer;

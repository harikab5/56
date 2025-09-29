import React, { useState } from "react";
import renovationHero from "../assets/heritage.jpg";
import renovation1 from "../assets/feature3.png";
import renovation2 from "../assets/food1.webp";
import renovation3 from "../assets/food2.webp";

import { FaIndustry, FaTools, FaDraftingCompass, FaHardHat, FaCheckCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Factory Owner",
    text: "Our industrial renovation was completed on time and with minimal disruption. The facility is now safer and more efficient!",
  },
  {
    name: "Priya Shah",
    role: "Warehouse Manager",
    text: "The team modernized our warehouse and improved workflow. Highly recommended for industrial upgrades!",
  },
  {
    name: "Vikram Patel",
    role: "Operations Head",
    text: "Excellent project management and quality work. Every milestone was met as promised.",
  },
  {
    name: "Anita Rao",
    role: "Plant Supervisor",
    text: "The renovation process was smooth and the results exceeded our expectations. Our facility looks brand new!",
  },
];

const steps = [
  {
    icon: <FaIndustry size={28} className="text-white" />,
    title: "Consultation",
    description: "Discuss your renovation needs and goals with our experts.",
  },
  {
    icon: <FaTools size={28} className="text-white" />,
    title: "Assessment",
    description: "We evaluate your facility and recommend the best solutions.",
  },
  {
    icon: <FaDraftingCompass size={28} className="text-white" />,
    title: "Design & Planning",
    description: "Our engineers create a detailed renovation plan and timeline.",
  },
  {
    icon: <FaHardHat size={28} className="text-white" />,
    title: "Renovation",
    description: "We upgrade your facility with minimal disruption to operations.",
  },
  {
    icon: <FaCheckCircle size={28} className="text-white" />,
    title: "Handover",
    description: "Move into your improved industrial space, ready for business.",
  },
];

const plans = [
  {
    name: "Basic Upgrade",
    price: "$50k+",
    period: "",
    features: [
      "Essential repairs & safety upgrades",
      "Quick turnaround",
      "Minimal downtime",
    ],
    highlighted: false,
  },
  {
    name: "Modernization",
    price: "$150k+",
    period: "",
    features: [
      "Facility redesign",
      "Energy-efficient systems",
      "Workflow optimization",
    ],
    highlighted: true,
  },
  {
    name: "Full Renovation",
    price: "$300k+",
    period: "",
    features: [
      "Complete overhaul",
      "Custom engineering",
      "Smart facility integration",
    ],
    highlighted: false,
  },
];

const PartyOrdersHero = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[index];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center bg-green-50">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          src={renovationHero}
          alt="Industrial Renovation Hero"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Industrial <span className="text-green-500">Renovation Services</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Upgrade, modernize, and optimize your industrial facility with our expert renovation solutions. Quality, safety, and efficiency for your business growth.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-green-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={renovation1}
              alt="Industrial Renovation"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Why Choose Our Renovation Services?
            </h2>
            <p className="text-black mb-4">
              We specialize in upgrading and modernizing industrial facilities for improved safety, efficiency, and productivity.
            </p>
            <p className="text-black mb-4">
              Our experienced team manages every aspect of your renovation, from assessment and planning to construction and finishing.
            </p>
            <p className="text-black mb-4">
              We use premium materials, innovative techniques, and sustainable practices to ensure your facility is built to last and meets the highest standards.
            </p>
            <p className="text-black mb-4">
              Our transparent process keeps you informed and involved at every stage, so you can watch your facility transform with confidence.
            </p>
            <p className="text-black mb-4">
              Contact us today to start your industrial renovation and experience a seamless, stress-free upgrade journey.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white text-center" id="pricing">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Our Renovation Packages</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Choose a package that fits your facility's needs and budget. Upgrade anytime — no hidden costs!
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center rounded-2xl p-8 shadow-lg border 
                ${plan.highlighted ? "bg-red-500 text-white scale-105" : "bg-white text-gray-800"}`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-extrabold mb-2">
                {plan.price} <span className="text-lg font-medium">{plan.period}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`px-6 py-3 rounded-full font-semibold transition 
                  ${plan.highlighted 
                    ? "bg-white text-green-500 hover:bg-gray-100" 
                    : "bg-green-500 text-white hover:bg-green-600"}`}
                >
                  Get Started
                </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-black mb-6">Client Reviews</h2>
            <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 text-lg italic mb-6">
                "{testimonial.text}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-green-500 text-sm">{testimonial.role}</p>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={renovation2}
              alt="Renovation Facility"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-green-500 mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Renovating your industrial facility is simple and stress-free with our proven process.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <FaArrowRight size={30} className="text-gray-400 mx-6 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={renovation3}
          alt="Renovation Project"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-green-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">Ready to Renovate Your Facility?</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Upgrade your industrial space for the future. Contact us today to get started!
          </p>
          <button
            onClick={() => {
              document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-green-600 py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default PartyOrdersHero;

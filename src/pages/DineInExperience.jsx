import React, { useState } from "react";
import industrialHero from "../assets/feature3.png";
import industrial1 from "../assets/heritage.jpg";
import industrial2 from "../assets/food1.webp";
import industrial3 from "../assets/food2.webp";

import { FaIndustry, FaClipboardList, FaDraftingCompass, FaHardHat, FaCheckCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Suresh Patel",
    role: "Factory Owner",
    text: "Our new manufacturing plant was delivered on time and exceeded all safety standards. The team was professional and efficient throughout the project.",
  },
  {
    name: "Meena Gupta",
    role: "Warehouse Manager",
    text: "The industrial facility is robust, well-designed, and perfectly suited for our logistics needs. Highly recommended for industrial construction!",
  },
  {
    name: "Ravi Singh",
    role: "Operations Head",
    text: "Excellent project management and quality construction. Every milestone was met as promised.",
  },
  {
    name: "Anil Rao",
    role: "Plant Supervisor",
    text: "The team made the entire process stress-free, from planning to handover. Our new facility is top-notch!",
  },
];

const steps = [
  {
    icon: <FaIndustry size={28} className="text-white" />,
    title: "Consultation",
    description: "Discuss your industrial project requirements with our experts.",
  },
  {
    icon: <FaClipboardList size={28} className="text-white" />,
    title: "Planning",
    description: "We create a detailed project plan, timeline, and transparent estimate.",
  },
  {
    icon: <FaDraftingCompass size={28} className="text-white" />,
    title: "Design",
    description: "Our engineers design your facility for maximum efficiency and safety.",
  },
  {
    icon: <FaHardHat size={28} className="text-white" />,
    title: "Construction",
    description: "We build your project using quality materials and skilled professionals.",
  },
  {
    icon: <FaCheckCircle size={28} className="text-white" />,
    title: "Handover",
    description: "Move into your new industrial facility, ready for operations.",
  },
];

const plans = [
  {
    name: "Warehouse Facility",
    price: "$200k+",
    period: "",
    features: [
      "Large storage capacity",
      "Standard safety features",
      "Efficient layout",
    ],
    highlighted: false,
  },
  {
    name: "Manufacturing Plant",
    price: "$500k+",
    period: "",
    features: [
      "Custom production lines",
      "Advanced safety systems",
      "Energy-efficient design",
    ],
    highlighted: true,
  },
  {
    name: "Logistics Hub",
    price: "$1M+",
    period: "",
    features: [
      "Integrated transport access",
      "Smart facility management",
      "Scalable infrastructure",
    ],
    highlighted: false,
  },
];

const DineInExperienceHero = () => {
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
          src={industrialHero}
          alt="Industrial Project Hero"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Leading <span className="text-green-500">Industrial Projects</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Expert construction of factories, warehouses, and logistics hubs. Quality, safety, and efficiency for your industrial growth.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-green-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src={industrial1}
              alt="Our Industrial Project"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              About Our Industrial Projects
            </h2>
            <p className="text-black mb-4">
              We specialize in constructing robust factories, warehouses, and logistics hubs tailored to your operational needs.
            </p>
            <p className="text-black mb-4">
              Our experienced team manages every aspect of your industrial project, from design and planning to construction and finishing.
            </p>
            <p className="text-black mb-4">
              We use premium materials, innovative techniques, and sustainable practices to ensure your facility is built to last and meets the highest standards.
            </p>
            <p className="text-black mb-4">
              Our transparent process keeps you informed and involved at every stage, so you can watch your industrial vision come to life with confidence.
            </p>
            <p className="text-black mb-4">
              Contact us today to start your industrial project and experience a seamless, stress-free building journey.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white text-center" id="pricing">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Our Industrial Packages</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Choose a package that fits your operational needs and budget. Upgrade anytime — no hidden costs!
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
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
          {/* Left Side - Text Card */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-black mb-6">
              Client Reviews
            </h2>
            <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 text-lg italic mb-6">
                "{testimonial.text}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-green-500 text-sm">{testimonial.role}</p>
            </div>

            {/* Arrows */}
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

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src={industrial2}
              alt="Industrial Facility"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-green-500 mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Building your industrial project is simple and stress-free with our proven process.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <FaArrowRight size={30} className="text-gray-400 mx-6 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={industrial3}
          alt="Industrial Project"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-green-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">
            Ready to Start Your Industrial Project?
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Let us help you build your next factory, warehouse, or logistics hub. Contact us today to get started!
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

export default DineInExperienceHero;

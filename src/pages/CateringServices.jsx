import React, { useState } from "react";
import commercialHero from "../assets/feature2.jpg";
import commercial1 from "../assets/feature3.png";
import commercial2 from "../assets/heritage.jpg";
import commercial3 from "../assets/deals.webp";


import { FaBuilding, FaClipboardList, FaDraftingCompass, FaHardHat, FaCheckCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Business Owner",
    text: "Our new office complex was delivered on time and exceeded our expectations. The team was professional and responsive throughout the project.",
  },
  {
    name: "Anita Desai",
    role: "Retail Manager",
    text: "The commercial space is modern, efficient, and perfectly suited for our needs. Highly recommended for business construction!",
  },
  {
    name: "Vikram Singh",
    role: "Investor",
    text: "Excellent project management and quality construction. Every milestone was met as promised.",
  },
  {
    name: "Sunita Rao",
    role: "Franchise Owner",
    text: "The team made the entire process stress-free, from planning to handover. Our new store looks fantastic!",
  },
];

const steps = [
  {
    icon: <FaBuilding size={28} className="text-white" />,
    title: "Consultation",
    description: "Discuss your business goals and project requirements with our experts.",
  },
  {
    icon: <FaClipboardList size={28} className="text-white" />,
    title: "Planning",
    description: "We create a detailed project plan, timeline, and transparent estimate.",
  },
  {
    icon: <FaDraftingCompass size={28} className="text-white" />,
    title: "Design",
    description: "Our architects design your commercial space for maximum efficiency and appeal.",
  },
  {
    icon: <FaHardHat size={28} className="text-white" />,
    title: "Construction",
    description: "We build your project using quality materials and skilled professionals.",
  },
  {
    icon: <FaCheckCircle size={28} className="text-white" />,
    title: "Handover",
    description: "Move into your new commercial space, ready for business.",
  },
];

const plans = [
  {
    name: "Office Space",
    price: "$100k+",
    period: "",
    features: [
      "Modern office construction",
      "Standard interiors",
      "Essential amenities",
    ],
    highlighted: false,
  },
  {
    name: "Retail Outlet",
    price: "$200k+",
    period: "",
    features: [
      "Custom retail construction",
      "Premium finishes",
      "Brand-focused design",
    ],
    highlighted: true,
  },
  {
    name: "Business Center",
    price: "$500k+",
    period: "",
    features: [
      "Large-scale commercial project",
      "Luxury amenities",
      "Smart building solutions",
    ],
    highlighted: false,
  },
];

const CommercialProjectsHero = () => {
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
          src={commercialHero}
          alt="Commercial Project Hero"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Building <span className="text-green-500">Commercial Success</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Expert commercial construction for offices, retail, and business centers. Quality, efficiency, and innovation for your business growth.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-green-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src={commercial1}
              alt="Our Commercial Project"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="text-black">
            <h2 className="text-4xl font-bold text-black mb-6">
              About Our Commercial Projects
            </h2>
            <p className="text-black mb-4">
              We specialize in constructing modern office buildings, retail outlets, malls, and business centers tailored to your business needs.
            </p>
            <p className="text-black mb-4">
              Our experienced team manages every aspect of your commercial project, from design and planning to construction and finishing.
            </p>
            <p className="text-black mb-4">
              We use premium materials, innovative techniques, and sustainable practices to ensure your project is built to last and meets the highest standards.
            </p>
            <p className="text-black mb-4">
              Our transparent process keeps you informed and involved at every stage, so you can watch your business vision come to life with confidence.
            </p>
            <p className="text-black mb-4">
              Contact us today to start your commercial project and experience a seamless, stress-free building journey.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white text-center" id="pricing">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Our Commercial Packages</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Choose a package that fits your business needs and budget. Upgrade anytime — no hidden costs!
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
              What Our Clients Say
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
              src={commercial2}
              alt="Commercial Project"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-green-500 mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Building your commercial project is simple and stress-free with our proven process.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              {/* Step card */}
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>

              {/* Arrow (between steps only, hidden on small screens) */}
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
          src={commercial3}
          alt="Commercial Project"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-green-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">
            Ready to Start Your Commercial Project?
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Let us help you build your next office, retail, or business space. Contact us today to get started!
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

export default CommercialProjectsHero;

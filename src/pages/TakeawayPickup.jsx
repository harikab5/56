import React, { useState } from "react";
import takeVideo from "../assets/take.mp4";
import projectHeroVideo from "../assets/projecthero.mp4";
import take1 from "../assets/p1.jpg";
import take2 from "../assets/p2.jpg";
import take3 from "../assets/p1.jpg";

import { FaShoppingBag, FaClock, FaMobileAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Construction Manager",
    text: "Their project management team kept our build on track and under budget. Communication was excellent!",
  },
  {
    name: "Rahul Verma",
    role: "Business Owner",
    text: "We launched our new office on time thanks to their detailed planning and proactive risk management.",
  },
  {
    name: "Anjali Mehta",
    role: "IT Project Lead",
    text: "The team handled every challenge with professionalism. Our software rollout was a huge success!",
  },
  {
    name: "Vikram Singh",
    role: "Homeowner",
    text: "From design to delivery, their project management made my home renovation stress-free.",
  },
  {
    name: "Sonal Patel",
    role: "Event Coordinator",
    text: "Every milestone was met on time. I highly recommend their project management services!",
  },
];
const plans = [
  {
    name: "Basic Project Plan",
    price: "₹15,000",
    period: "/project",
    features: [
      "Initial project assessment",
      "Timeline & budget planning",
      "Weekly progress reports",
    ],
    highlighted: false,
  },
  {
    name: "Standard Project Plan",
    price: "₹35,000",
    period: "/project",
    features: [
      "All Basic features",
      "Resource allocation",
      "Risk management",
      "Bi-weekly client meetings",
    ],
    highlighted: true,
  },
  {
    name: "Premium Project Plan",
    price: "₹60,000",
    period: "/project",
    features: [
      "All Standard features",
      "On-site supervision",
      "Quality assurance checks",
      "Post-project support",
    ],
    highlighted: false,
  },
];

const steps = [
  {
    icon: <FaMobileAlt size={28} className="text-white" />,
    title: "Define Goals",
    description: "Collaborate to set clear project objectives and deliverables.",
  },
  {
    icon: <FaClock size={28} className="text-white" />,
    title: "Plan & Schedule",
    description: "Develop a detailed timeline, allocate resources, and identify risks.",
  },
  {
    icon: <FaShoppingBag size={28} className="text-white" />,
    title: "Execute & Deliver",
    description: "Monitor progress, communicate updates, and ensure successful completion.",
  },
];

const TakeawayPickupHero = () => {
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
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={projectHeroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Project <span className="text-green-500">Management</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Professional project management for seamless delivery, on time and within budget.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-green-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={take1}
              alt="Project management team"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Why Choose Our Project Management?
            </h2>
            <p className="text-black mb-4">
              We ensure your projects are delivered efficiently, with clear communication and expert coordination at every stage.
            </p>
            <p className="text-black mb-4">
              Our experienced managers handle planning, execution, and risk mitigation for projects of any size or complexity.
            </p>
            <p className="text-black mb-4">
              Enjoy peace of mind with transparent progress tracking and proactive problem-solving.
            </p>
          </div>
        </div>
      </section>
            <section className="py-20 px-6 bg-white text-center" id="pricing">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Project Plans</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Select the project management package that matches your needs and scale.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center rounded-2xl p-8 shadow-lg border 
                ${plan.highlighted ? "bg-green-500 text-white scale-105" : "bg-white text-gray-800"}`}
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
      <section className="py-10 px-4 bg-green-500">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-6">Client Testimonials</h2>
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
              src={take2}
              alt="Project management success"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Our Process</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Effective project management in three clear steps.
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
          src={take3}
          alt="Project management call to action"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-green-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Contact us today to discuss your project and experience stress-free management from start to finish.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Get a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default TakeawayPickupHero;

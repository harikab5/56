import React, { useState } from "react";
import arch1 from "../assets/a1.png";
import arch2 from "../assets/a2.jpg";
import arch3 from "../assets/a1.png";
import architecturalHero from "../assets/architecturalhero.mp4";
import { FaArrowLeft, FaArrowRight, FaRegCheckCircle, FaRegLightbulb, FaRegEdit, FaIndustry, FaTools, FaDraftingCompass, FaHardHat, FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Basic Design Package",
    price: "₹50,000",
    period: "/project",
    features: [
      "2D floor plans",
      "Basic elevations",
      "Standard materials list",
      "Initial consultation",
    ],
    highlighted: false,
  },
  {
    name: "Professional Design",
    price: "₹1,50,000",
    period: "/project",
    features: [
      "3D renderings",
      "Detailed floor plans",
      "Interior design concepts",
      "Structural drawings",
      "Material specifications",
    ],
    highlighted: true,
  },
  {
    name: "Premium Architecture",
    price: "₹3,00,000",
    period: "/project",
    features: [
      "Complete design package",
      "Virtual walkthroughs",
      "Landscape design",
      "Project management",
      "Construction supervision",
    ],
    highlighted: false,
  },
];

const testimonialsData = [
  {
    text: "Their architectural designs transformed our vision into a stunning reality. Exceptional attention to detail!",
    name: "Rajesh P.",
    role: "Homeowner",
  },
  {
    text: "Professional team with innovative ideas. Our office building design exceeded all expectations.",
    name: "Meera S.",
    role: "Business Owner",
  },
  {
    text: "From concept to completion, their architectural expertise made our dream home possible.",
    name: "Vikram T.",
    role: "Property Developer",
  },
];

const steps = [
  {
    icon: <FaRegLightbulb size={28} className="text-white" />,
    title: "Consultation",
    description: "Discuss your architectural vision and project requirements with our experts.",
  },
  {
    icon: <FaTools size={28} className="text-white" />,
    title: "Site Analysis",
    description: "We evaluate your site conditions and local building regulations.",
  },
  {
    icon: <FaDraftingCompass size={28} className="text-white" />,
    title: "Design & Planning",
    description: "Our architects create detailed designs and 3D visualizations.",
  },
  {
    icon: <FaRegEdit size={28} className="text-white" />,
    title: "Documentation",
    description: "We prepare complete architectural drawings and specifications.",
  },
  {
    icon: <FaCheckCircle size={28} className="text-white" />,
    title: "Project Delivery",
    description: "Receive your complete architectural design package, ready for construction.",
  },
];

const SubscriptionMeals = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonial = testimonialsData[testimonialIndex];

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };
  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={architecturalHero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Architectural Design Services
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Professional architectural design solutions for residential, commercial, and industrial projects.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-green-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={arch1}
              alt="Architectural design blueprint"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Why Choose Our Architectural Design Services?
            </h2>
            <p className="text-black mb-4">
              Our experienced architects create innovative designs that blend functionality with aesthetic appeal.
            </p>
            <p className="text-black mb-4">
              Customized solutions for residential, commercial, and industrial projects of all scales.
            </p>
            <p className="text-black mb-4">
              From concept to completion, we ensure your project meets all regulatory requirements and standards.
            </p>
            <p className="text-black mb-4">
              Perfect for homeowners, developers, and businesses looking for professional architectural expertise.
            </p>
            <p className="text-black mb-4">
              Advanced 3D modeling and virtual reality presentations help you visualize your project before construction begins.
            </p>
            <p className="text-black mb-4">
              Sustainable design practices that focus on energy efficiency and environmental responsibility.
            </p>
            <p className="text-black mb-4">
              Expert knowledge in local building codes, zoning laws, and permit processes for hassle-free approvals.
            </p>
            <p className="text-black mb-4">
              Collaborative approach ensuring your vision is brought to life while maximizing functionality and budget efficiency.
            </p>
            <p className="text-black mb-4">
              Comprehensive project documentation including detailed drawings, specifications, and material schedules.
            </p>
            <p className="text-black mb-4">
              Ongoing support during construction phase to ensure design integrity and quality execution.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-6 bg-white text-center" id="pricing">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Design Packages</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Choose the architectural design package that best fits your project requirements and budget.
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
      <section className="py-10 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-black mb-6">What Our Clients Say</h2>
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
              src={arch2}
              alt="Architectural design showcase"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

     {/* Steps Section */}
           <section className="py-20 px-6 bg-white text-center">
             <h2 className="text-4xl font-bold text-green-500 mb-4">How It Works</h2>
             <p className="text-gray-600 max-w-2xl mx-auto mb-12">
               Creating your architectural design is simple and stress-free with our proven process.
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
          src={arch3}
          alt="Architectural design project"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-green-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">Ready to Build Your Dream Project?</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Get started today and transform your vision into stunning architectural reality.
          </p>
          <button
            onClick={() => {
              document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionMeals;

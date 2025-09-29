import React, { useState } from "react";
import foodhero from "../assets/feature1.webp"; // Use a residential project image or video
import residentialhero from "../assets/residentialhero.mp4"; // Residential hero video
import serviceImg from "../assets/residential.jpg";
import food from "../assets/residential2.jpg";
import food3 from "../assets/heritage.jpg";

import { FaUtensils, FaShoppingCart, FaTruck, FaSmile, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Homeowner",
    text: "Our dream home was built on time and with great attention to detail. The team was professional and transparent throughout the process.",
  },
  {
    name: "Priya Verma",
    role: "Apartment Owner",
    text: "The quality of construction and finishing exceeded our expectations. Highly recommended for residential projects!",
  },
  {
    name: "Ravi Kumar",
    role: "Investor",
    text: "Excellent project management and communication. Every milestone was met as promised.",
  },
  {
    name: "Sunita Rao",
    role: "Resident",
    text: "The team made the entire process stress-free, from planning to handover. We love our new home!",
  },
];
 

 const steps = [
  {
    icon: <FaUtensils size={28} className="text-white" />,
    title: "Consultation",
    description: "Discuss your vision and requirements with our residential project experts.",
  },
  {
    icon: <FaShoppingCart size={28} className="text-white" />,
    title: "Planning",
    description: "We create a detailed project plan, timeline, and transparent estimate.",
  },
  {
    icon: <FaTruck size={28} className="text-white" />,
    title: "Design",
    description: "Our architects design your dream home with modern amenities and style.",
  },
  {
    icon: <FaSmile size={28} className="text-white" />,
    title: "Construction",
    description: "We build your home using quality materials and skilled professionals.",
  },
 ];
 const plans = [
    {
      name: "Basic Home",
      price: "$50k+",
      period: "",
      features: [
        "1-2 BHK construction",
        "Standard materials",
        "Essential amenities",
      ],
      highlighted: false,
    },
    {
      name: "Family Home",
      price: "$100k+",
      period: "",
      features: [
        "2-4 BHK construction",
        "Premium materials",
        "Custom interiors",
      ],
      highlighted: true,
    },
    {
      name: "Luxury Villa",
      price: "$250k+",
      period: "",
      features: [
        "4+ BHK construction",
        "Luxury finishes",
        "Landscaping & smart home",
      ],
      highlighted: false,
    },
  ];


const FoodDeliveryHero = () => {
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
  <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-green-50">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          src={residentialhero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Beautiful <span className="text-green-500">Homes</span> Built for You
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Expert residential construction, modern designs, and quality you can trust. Start your dream home journey with us today!
          </p>
        </div>
      </section>

      {/* About Our Service Section */}
      <section className="py-20 px-6 md:px-20 bg-green-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src={serviceImg}
              alt="Our Service"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              About Our Residential Projects
            </h2>
            <p className="text-black mb-4">
  We specialize in building modern, comfortable, and energy-efficient homes tailored to your needs. Our experienced team manages every aspect of your residential project, from design and planning to construction and finishing.
</p>
<p className="text-black mb-4">
  Whether you’re looking for a cozy apartment, a spacious family home, or a luxury villa, we deliver quality craftsmanship and attention to detail in every project.
</p>
<p className="text-black mb-4">
  We use premium materials, innovative techniques, and sustainable practices to ensure your home is built to last and meets the highest standards.
</p>
 
  


          </div>
        </div>
      </section>

      {/*how it works section */  }
       

    <section className="py-20 px-6 bg-white text-center" id="pricing">
      <h2 className="text-4xl font-bold text-green-500 mb-4">Our Home Packages</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Choose a package that fits your lifestyle and budget. Upgrade anytime — no hidden costs!
      </p>

      <div className="grid  md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
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



   <section className="py-10 px-4 bg-green-50">
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
  src={food}
  alt="Residential Project"
        className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
      />
    </div>
  </div>
</section>
<section className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold text-green-500 mb-4">How It Works</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Building your dream home is simple and stress-free with our proven process.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Step card */}
            <div className="flex flex-col  hover:scale-105 transition items-center max-w-[200px]">
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
  {/* Background Image */}
  <img
    src={food3}
    alt="Residential Project"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Green Transparent Overlay */}
  <div className="absolute inset-0 bg-green-500/70 z-0"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
    <h2 className="text-5xl  font-extrabold mb-6">
      Ready to Build Your Home?
    </h2>
    <p className="text-lg md:text-xl mb-8 leading-relaxed">
      Start your residential project with us and experience quality, transparency, and peace of mind. Your dream home is just a step away!
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

export default FoodDeliveryHero;

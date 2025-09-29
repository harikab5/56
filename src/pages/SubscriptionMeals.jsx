import React, { useState } from "react";
import arch1 from "../assets/feature1.webp";
import arch2 from "../assets/feature2.jpg";
import arch3 from "../assets/feature3.png";
import { FaArrowLeft, FaArrowRight, FaRegCheckCircle, FaRegLightbulb, FaRegEdit } from "react-icons/fa";

const plans = [
  {
    name: "Basic Meal Plan",
    price: "₹2,500",
    period: "/month",
    features: [
      "1 meal per day",
      "Vegetarian options",
      "Weekly menu rotation",
      "Free delivery",
    ],
    highlighted: false,
  },
  {
    name: "Balanced Meal Plan",
    price: "₹4,500",
    period: "/month",
    features: [
      "2 meals per day",
      "Veg & Non-Veg options",
      "Customizable menu",
      "Nutritionist support",
      "Free delivery",
    ],
    highlighted: true,
  },
  {
    name: "Premium Meal Plan",
    price: "₹6,500",
    period: "/month",
    features: [
      "3 meals per day",
      "Personalized diet",
      "Chef's specials",
      "Priority delivery",
      "Snack add-ons",
    ],
    highlighted: false,
  },
];

const testimonialsData = [
  {
    text: "The subscription meals are delicious and save me so much time every day!",
    name: "Amit K.",
    role: "Working Professional",
  },
  {
    text: "Healthy, tasty, and always on time. My family loves the variety in the menu.",
    name: "Priya S.",
    role: "Homemaker",
  },
  {
    text: "I finally found a meal service that fits my diet and busy schedule.",
    name: "Rahul M.",
    role: "Fitness Enthusiast",
  },
];

const steps = [
  {
    icon: <FaRegLightbulb size={32} className="text-red-500" />,
    title: "Choose Your Plan",
    description: "Select a meal plan that fits your lifestyle and preferences.",
  },
  {
    icon: <FaRegEdit size={32} className="text-red-500" />,
    title: "Customize & Subscribe",
    description: "Personalize your meals and set your delivery schedule.",
  },
  {
    icon: <FaRegCheckCircle size={32} className="text-red-500" />,
    title: "Enjoy Fresh Meals",
    description: "Receive freshly prepared meals at your doorstep every day.",
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
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-red-500">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Subscription Meals
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            Fresh, healthy, and convenient meal plans delivered to your doorstep every day.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-red-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={arch1}
              alt="Delicious subscription meal"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Why Choose Our Subscription Meals?
            </h2>
            <p className="text-black mb-4">
              Our chefs craft nutritious and tasty meals using fresh, locally sourced ingredients.
            </p>
            <p className="text-black mb-4">
              Flexible plans, customizable menus, and options for every dietary need.
            </p>
            <p className="text-black mb-4">
              Enjoy hassle-free, on-time delivery and never worry about cooking or cleaning again.
            </p>
            <p className="text-black mb-4">
              Perfect for busy professionals, families, and fitness enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-6 bg-white text-center" id="pricing">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Meal Plans</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Choose the subscription that best fits your appetite and schedule.
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
                    ? "bg-white text-red-500 hover:bg-gray-100" 
                    : "bg-red-500 text-white hover:bg-red-600"}`}
              >
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-black mb-6">What Our Customers Say</h2>
            <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 text-lg italic mb-6">
                "{testimonial.text}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-red-500 text-sm">{testimonial.role}</p>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={arch2}
              alt="Healthy meal presentation"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Get started with your meal subscription in three easy steps.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md">
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
          alt="Fresh meal delivery"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-red-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">Ready to Eat Better Every Day?</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Subscribe now and enjoy fresh, healthy meals delivered to your door.
          </p>
          <button
            onClick={() => {
              document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionMeals;

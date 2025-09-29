import React from "react";
import servicehero from "../assets/servicehero.mp4";
import { Link } from "react-router-dom";
import dealsImg from "../assets/deals.webp";
import ImpactSection from "../components/ImpactSection"; // adjust path


// Service images
import img1 from "../assets/feature1.webp";
import img2 from "../assets/feature2.jpg";
import img3 from "../assets/feature3.png";
import img4 from "../assets/heritage.jpg";
import img5 from "../assets/faq.jpg";
import img6 from "../assets/ethical.mp4";




 const categories = [
    {
      title: "Breakfast Specials",
      desc: "Start your day with fresh, wholesome, and energy-packed meals.",
    },
    {
      title: "Lunch Combos",
      desc: "Balanced meals with the perfect mix of taste and nutrition.",
    },
    {
      title: "Dinner Feasts",
      desc: "Indulge in hearty dishes made to bring families together.",
    },
    {
      title: "Desserts & Drinks",
      desc: "Sweet treats and refreshing beverages to complete your meal.",
    },
  ];

const services = [
  {
    title: "Architectural Design",
    desc: "Innovative and sustainable architectural designs tailored to meet client needs. Our team of experienced architects creates functional and aesthetically pleasing spaces, ensuring every project is unique and impactful. From residential homes to commercial buildings, we bring your vision to life with precision and creativity.",
    img: img1,
    path: "/Architectural-Design",
  },
  {
    title: "Project Management",
    desc: "Comprehensive project management services to ensure timely and efficient completion of construction projects. We handle planning, coordination, and execution, keeping quality and budget in focus. Our expertise guarantees smooth workflows and successful outcomes for every project.",
    img: img2,
    path: "/Project-Management",
  },
  {
    title: "Construction Services",
    desc: "High-quality construction services for residential, commercial, and industrial projects. Our skilled team uses advanced techniques and premium materials to deliver durable and reliable structures. From foundation to finishing, we ensure excellence at every stage of construction.",
    img: img3,
    path: "/Construction-Services",
  },
  {
    title: "Renovation & Remodeling",
    desc: "Transform your spaces with our renovation and remodeling services. We specialize in modernizing interiors, upgrading facilities, and enhancing functionality. Whether it’s a single room or an entire building, our team delivers results that exceed expectations.",
    img: img4,
    path: "/Renovation-Remodeling",
  },
  {
    title: "Interior Design",
    desc: "Creative interior design solutions to elevate the look and feel of your spaces. Our designers focus on blending style with functionality, creating environments that inspire and comfort. From furniture selection to lighting, we handle every detail with care.",
    img: img5,
    path: "/Interior-Design",
  },
  {
    title: "Sustainable Building Solutions",
  desc: "Eco-friendly building solutions that prioritize sustainability and energy efficiency. We incorporate green practices and materials to reduce environmental impact while maintaining high standards of quality and performance. Build for the future with our sustainable services.",
    img: img6,
    path: "/Sustainable-Building-Solutions",
  },
];



const ServicesPage = () => {
    
  return (
    <div className="w-full">
      {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={servicehero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Building the Future with <span style={{ color: '#22c55e' }}>Excellence</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Discover our comprehensive construction services—delivering quality, safety, and innovation for every project. From residential to commercial builds, we turn your vision into reality with expert planning, skilled execution, and a commitment to excellence.
            </p>
          </div>
        </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 space-y-12">
  <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Our Construction Services</h2>
        {/* Service: Residential Projects */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={img1} alt="Residential Projects" className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">Residential Projects</h3>
            <p className="text-gray-700 mb-2">We specialize in building modern homes, apartments, and residential complexes tailored to your lifestyle. Our team ensures every project is constructed with the highest standards of quality, comfort, and safety. From initial planning to final handover, we focus on innovative design, energy efficiency, and lasting value, making your dream home a reality.</p>
            <Link to="/residential-projects" className="text-green-600 hover:underline font-semibold">Learn More</Link>
          </div>
        </div>
        {/* Service: Commercial Projects */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={img2} alt="Commercial Projects" className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">Commercial Projects</h3>
            <p className="text-gray-700 mb-2">Our commercial construction services cover office buildings, shopping centers, retail outlets, and more. We deliver spaces that are functional, aesthetically appealing, and built to support your business growth. With a focus on modern standards, safety, and timely delivery, we help you create environments that impress clients and enhance productivity.</p>
            <Link to="/commercial-projects" className="text-green-600 hover:underline font-semibold">Learn More</Link>
          </div>
        </div>
        {/* Service: Industrial Projects */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={img3} alt="Industrial Projects" className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">Industrial Projects</h3>
            <p className="text-gray-700 mb-2">We handle the development of factories, warehouses, and industrial facilities with robust engineering and efficient layouts. Our expertise ensures that every industrial project meets regulatory standards, maximizes operational efficiency, and is built to withstand demanding environments. We provide end-to-end solutions from site selection to commissioning.</p>
            <Link to="/industrial-projects" className="text-green-600 hover:underline font-semibold">Learn More</Link>
          </div>
        </div>
        {/* Service: Renovation Services */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={img4} alt="Renovation Services" className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">Renovation Services</h3>
            <p className="text-gray-700 mb-2">Our renovation services breathe new life into existing spaces, whether residential or commercial. We offer expert remodeling, structural upgrades, and interior redesigns to enhance functionality, comfort, and visual appeal. From minor updates to complete overhauls, we ensure a seamless process and outstanding results that exceed expectations.</p>
            <Link to="/renovation-services" className="text-green-600 hover:underline font-semibold">Learn More</Link>
          </div>
        </div>
        {/* Service: Architectural Designs */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={img5} alt="Architectural Designs" className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">Architectural Designs</h3>
            <p className="text-gray-700 mb-2">Our architectural design team brings creativity, precision, and sustainability to every project. We collaborate closely with clients to develop innovative concepts that reflect your vision and meet practical needs. From initial sketches to detailed blueprints, we ensure every design is functional, beautiful, and environmentally responsible.</p>
            <Link to="/architectural-designs" className="text-green-600 hover:underline font-semibold">Learn More</Link>
          </div>
        </div>
        {/* Service: Project Management */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={img2} alt="Project Management" className="w-full h-64 object-cover rounded-xl shadow-lg" />
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">Project Management</h3>
            <p className="text-gray-700 mb-2">We provide comprehensive project management services to ensure your construction project is completed on time, within budget, and to the highest quality standards. Our experienced managers oversee every phase, from planning and procurement to execution and delivery, ensuring clear communication, risk management, and client satisfaction throughout the process.</p>
            <Link to="/project-management" className="text-green-600 hover:underline font-semibold">Learn More</Link>
          </div>
        </div>
      </section>




<section className="max-w-6xl mx-auto py-16 px-4">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    {/* Left: Image */}
    <div>
      <img
        src={dealsImg}
        alt="Ongoing Deals"
        className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
      />
    </div>

    {/* Right: Content */}
    <div>
  <h2 className="text-3xl font-bold text-green-600 mb-4">
        Why Choose Us?
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
        <li>Special discounts on large-scale residential and commercial projects this season.</li>
        <li>Free site consultation and project estimation for new clients.</li>
  <li>On-going landmark projects: green Valley Apartments, TechnoPark Towers, and City Center Mall.</li>
        <li>10-year structural warranty on all new constructions.</li>
        <li>Fast-track project delivery options for urgent requirements.</li>
        <li>Eco-friendly building materials and sustainable construction practices.</li>
        <li>Dedicated customer support throughout your project journey.</li>
      </ul>
    </div>
  </div>
</section>


 <section className="max-w-full bg-green-50 mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Info */}
      <div>
  <h2 className="text-3xl font-bold text-green-600 mb-4">
          How to Start Your Project
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Ready to build, renovate, or expand? Getting started with us is simple and transparent. We guide you through every step, ensuring your vision becomes reality with ease and confidence.
        </p>
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
          <li><span className="font-semibold text-green-600">Contact Us:</span> Reach out via our website, phone, or visit our office to discuss your project needs.</li>
          <li><span className="font-semibold text-green-600">Consultation & Site Visit:</span> Our experts will schedule a free consultation and site assessment to understand your requirements.</li>
          <li><span className="font-semibold text-green-600">Project Proposal:</span> Receive a detailed proposal including design concepts, timelines, and transparent cost estimates.</li>
          <li><span className="font-semibold text-green-600">Agreement & Planning:</span> Finalize the agreement and project plan, tailored to your goals and budget.</li>
          <li><span className="font-semibold text-green-600">Execution:</span> Our skilled team manages construction, quality checks, and regular updates until completion.</li>
          <li><span className="font-semibold text-green-600">Handover & Support:</span> We deliver your finished project and provide ongoing support for your peace of mind.</li>
        </ol>
      </div>

      {/* Right Visuals: 6 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-green-500">Contact</h3>
        </div>
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-green-500">Consult</h3>
        </div>
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-green-500">Plan</h3>
        </div>
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-green-500">Design</h3>
        </div>
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-green-500">Build</h3>
        </div>
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-green-500">Handover</h3>
        </div>
      </div>
    </section>
 
        <section className="bg-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
           <h2 className="text-3xl font-bold text-green-600 mb-4">Ready to Start Your Construction Project?</h2>
  <p className="text-lg text-gray-700 mb-6">
    Have questions about building, renovating, or expanding your property?  
    Our experienced team is here to guide you through every step—from initial consultation to project completion.  
    Contact us for expert advice, transparent estimates, and a seamless construction experience.  
    Let’s build your vision together!
  </p>

            <Link
              to="/contactus"
              className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Get Started
            </Link>    
          </div>              
        </section>



    </div>
  );
};

export default ServicesPage;

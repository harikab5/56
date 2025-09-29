import React from "react";

import aboutushero from "../assets/aboutushero.mp4";
import vision from "../assets/vision.jpg";
import special2 from "../assets/special2.jpg";
import project1 from "../assets/project1.jpg";
import awards from "../assets/awards.jpg";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
          src={aboutushero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-6xl font-serif font-bold text-white text-center mb-4 drop-shadow-lg">About Us</h1>
          <span className="text-xl md:text-2xl text-white/90 text-center mb-8 max-w-2xl drop-shadow">Building Landmarks, Shaping Communities</span>
        </div>
      </section>
      {/* Our Mission Section */}
  {/* Our Mission Section */}
{/* Our Mission & Vision Section */}
<section className="w-full bg-[#22bb4c1a] py-20 px-4 md:px-0 flex flex-col items-center justify-center">
  <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Left: Image */}
    <div className="w-full h-full">
      <div className="w-full aspect-[16/10]">
        <img
          src={vision}
          alt="Our Mission and Vision"
          className="rounded-2xl shadow-lg w-full h-full object-cover"
        />
      </div>
    </div>
    {/* Right: Content */}
    <div className="grid gap-8 content-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-2">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-lg">
          To deliver exceptional construction solutions that exceed client expectations, combining quality craftsmanship, innovative technology, and a commitment to safety. We strive to create lasting value for our clients and communities through every project we undertake.
        </p>
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-2">Our Vision</h2>
        <p className="text-lg text-gray-700 max-w-lg">
          To be the region’s most trusted construction partner, known for innovation, sustainability, and a commitment to building a better future. We envision communities enhanced by our work and clients who return to us for every new project.
        </p>
      </div>
    </div>
  </div>
</section>
{/* What Makes Us Unique Section */}
<section className="w-full relative py-20 px-4 md:px-0 flex flex-col items-center justify-center" style={{ minHeight: '500px' }}>
  <img src={project1} alt="Construction site" className="absolute inset-0 w-full h-full object-cover z-0" style={{ filter: 'brightness(0.5)' }} />
  <div className="absolute inset-0 bg-black/40 z-0"></div>
  <div className="max-w-6xl w-full mx-auto flex flex-col items-center relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-serif text-center">What Makes Us Unique</h2>
    <div className="grid md:grid-cols-3 gap-10 w-full">
      {/* Unique Point 1 */}
      <div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-2 text-green-700">Client-Centric Approach</h3>
        <p className="text-gray-700 text-center">We prioritize our clients’ needs, offering personalized solutions and transparent communication throughout every project.</p>
      </div>
      {/* Unique Point 2 */}
      <div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-2 text-green-700">Innovative Technology</h3>
        <p className="text-gray-700 text-center">We leverage the latest construction technologies and sustainable practices to deliver efficient, future-ready structures.</p>
      </div>
      {/* Unique Point 3 */}
      <div className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-2 text-green-700">Experienced Team</h3>
        <p className="text-gray-700 text-center">Our skilled professionals bring decades of experience, ensuring quality workmanship and on-time project delivery.</p>
      </div>
    </div>
  </div>
</section>

{/* Awards & Certifications Section */}
<section className="w-full bg-[#22bb4c1a] py-20 px-4 md:px-0 flex flex-col items-center justify-center">
  <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Left: Awards and Certifications Content */}
    <div className="grid gap-4 content-center order-1 md:order-1">
      <h2 className="text-3xl md:text-4xl font-bold text-black font-serif mb-4">Awards & Certifications</h2>
      <p className="text-lg text-black max-w-lg mb-2">
        Our commitment to excellence in construction has been recognized through numerous awards and industry certifications. We take pride in our achievements, which reflect our dedication to quality, safety, and client satisfaction.
      </p>
      <ul className="space-y-2 text-gray-700 list-disc pl-5">
        <li><span className="font-semibold">ISO 9001 Certified:</span> Quality Management Systems</li>
        <li><span className="font-semibold">Best Construction Company 2022</span> - Regional Builders Association</li>
        <li><span className="font-semibold">Green Building Award</span> for sustainable practices</li>
        <li><span className="font-semibold">Safety Excellence Award</span> for outstanding safety records</li>
      </ul>
    </div>
    {/* Right: Image */}
    <div className="w-full h-full order-2 md:order-2 flex justify-center">
      <div className="w-full aspect-[16/10] max-w-md">
        <img
          src={awards}
          alt="Awards and Certifications"
          className="rounded-2xl shadow-lg w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>





      {/* Core Principles Section */}
      <section className="w-full bg-white py-20 px-4 md:px-0 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-serif text-center">Core Principles</h2>
          <div className="grid  md:grid-cols-3 gap-10 w-full">
            {/* Principle 1 */}
            <div className="flex flex-col items-center bg-[#22bb4c1a] rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-2 text-[#22bb4c]">Safety & Quality</h3>
              <p className="text-gray-700 text-center">We uphold the highest standards of safety and quality on every site, ensuring our projects are built to last and our teams work in secure environments.</p>
            </div>
            {/* Principle 2 */}
            <div className="flex flex-col items-center bg-[#22bb4c1a] rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-2 text-[#22bb4c]">Sustainability</h3>
              <p className="text-gray-700 text-center">We are committed to sustainable construction, using eco-friendly materials and methods to minimize our environmental impact.</p>
            </div>
            {/* Principle 3 */}
            <div className="flex flex-col items-center bg-[#22bb4c1a] rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-2 text-[#22bb4c]">Integrity & Respect</h3>
              <p className="text-gray-700 text-center">We treat our clients, partners, and team members with honesty and respect, fostering strong relationships and a collaborative spirit.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
  <section className="w-full bg-[#22bb4c1a] py-16 px-4 md:px-0 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#22bb4c]">Start Your Project with Us!</h2>
          <p className="text-lg text-center text-gray-700 mb-8">Experience excellence in construction, innovative solutions, and a team dedicated to bringing your vision to life. Contact us to discuss your next project and see how we can build success together.</p>
          <div className="flex flex-row sm:flex-row gap-4">
            <a href="#contact" className="px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition bg-[#22bb4c] hover:bg-[#1a9c3d]">Contact Us</a>
            <a href="#services" className="px-10 py-4 rounded-full text-[#22bb4c] font-semibold text-lg shadow-lg transition bg-white hover:bg-[#22bb4c1a] border border-[#22bb4c]">Our Services</a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
import React from "react";
import special1 from "../assets/special1.jpg";
import special2 from "../assets/special2.jpg";
import special3 from "../assets/special3.jpg";
import special4 from "../assets/special4.jpg";
import heritage from "../assets/heritage.jpg";
import person1 from "../assets/person1.jpeg";
import person2 from "../assets/person2.jpeg";
import person3 from "../assets/person3.jpeg";
import home2hero from "../assets/home2hero.mp4";

export default function Home2() {
	return (
		<div className="flex flex-col min-h-screen">
			
			{/* Hero Section */}
			<section className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
				{/* Background Video for Hero Only */}
				<video
					className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
					src={home2hero}
					autoPlay
					loop
					muted
					playsInline
				/>
				{/* Overlay for readability */}
				<div className="absolute inset-0 bg-black/50 z-10" />
				<div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
					<h1 className="text-5xl md:text-6xl font-serif font-bold text-white text-center mb-4 drop-shadow-lg">
						Building Dreams, One Brick at a Time
					</h1>
					<p className="text-lg md:text-xl text-white/90 text-center mb-8 max-w-2xl drop-shadow">
						Welcome to ArchiBuild, where innovation meets craftsmanship. Explore our architectural designs, project management services, and commitment to excellence in every structure we create.
					</p>
					<button className="relative border border-white text-white px-8 py-3 rounded-lg text-lg font-serif flex items-center group bg-transparent hover:bg-white/10 transition">
						Learn More
						<span className="ml-3 w-8 h-0.5 bg-white block group-hover:bg-red-500 transition-all"></span>
					</button>
				</div>
			</section>


			{/* Heritage & Legacy Section */}
			<section className="w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center">
  <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-center rounded-xl shadow-lg p-8">
    <div className="md:w-1/2 w-full order-2 md:order-1 flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Heritage & Legacy</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our restaurant's journey began decades ago, rooted in a passion for authentic flavors and heartfelt hospitality. From humble beginnings to a celebrated culinary destination, our legacy is built on tradition, innovation, and a commitment to excellence. Every dish tells a story—of family, culture, and the joy of sharing great food.
      </p>
      <ul className="text-gray-700 mb-6 list-disc list-inside">
        <li>Established in 1985, serving generations of food lovers</li>
        <li>Family-owned and operated with pride</li>
        <li>Honoring traditional recipes with a modern twist</li>
        <li>Recognized for excellence in taste and service</li>
      </ul>
      <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition">Learn More</button>
    </div>
    <div className="md:w-1/2 w-full order-1 md:order-2 flex justify-center mb-8 md:mb-0">
      <img src={heritage} alt="Heritage & Legacy" className="rounded-xl shadow-lg object-cover w-full h-96 max-w-xl" />
    </div>
  </div>
</section>


			{/* Statistics Section */}
			<section className="w-full bg-green-100 py-24 px-6 md:px-0 flex items-center justify-center">
	<div className="max-w-7xl w-full mx-auto flex flex-wrap md:flex-nowrap gap-12 text-center">
		<div className="flex-1 text-gray-800">
			<h3 className="text-5xl font-bold">1.2k+</h3>
			<p className="text-xl">Satisfied customers</p>
		</div>
		<div className="flex-1 text-gray-800">
			<h3 className="text-5xl font-bold">19+</h3>
			<p className="text-xl">Representative offices</p>
		</div>
		<div className="flex-1 text-gray-800">
			<h3 className="text-5xl font-bold">34+</h3>
			<p className="text-xl">Types of repair services</p>
		</div>
		<div className="flex-1 text-gray-800">
			<h3 className="text-5xl font-bold">800+</h3>
			<p className="text-xl">Completed projects</p>
		</div>
	</div>
</section>

			{/* Meet Our Professionals Section */}
			<section className="w-full bg-white py-20 px-4 md:px-0 flex flex-col items-center justify-center">
				<h2 className="text-5xl md:text-6xl font-serif font-bold text-black text-center mb-16">Meet Our Professionals</h2>
				<div className="max-w-6xl w-full mx-auto grid  md:grid-cols-3 gap-12">
					{/*  */}
					<div className="flex flex-col items-center">
            <img src={person2} alt="Dominique Crenn" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
						{/* Social icons */}
						<div className="absolute left-4 top-10 flex flex-col gap-4 z-10">
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-twitter"></i></a>
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-facebook"></i></a>
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-instagram"></i></a>
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-whatsapp"></i></a>
						</div>
						<h3 className="text-2xl font-serif font-semibold text-black mb-1">Anita Kapoor</h3>
						<span className="text-lg text-black font-serif mb-2">Lead Architect</span>
					</div>
					{/* with social icons */}
					<div className="flex flex-col items-center relative">
						<img src={person1} alt="Dominique Crenn" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
						{/* Social icons */}
						<div className="absolute left-4 top-10 flex flex-col gap-4 z-10">
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-twitter"></i></a>
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-facebook"></i></a>
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-instagram"></i></a>
							<a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-whatsapp"></i></a>
						</div>
						<h3 className="text-2xl font-serif font-semibold text-black mb-1">Rahul Mehta</h3>
						<span className="text-lg text-black font-serif mb-2">Structural Engineer</span>
					</div>
					{/* person3 */}
					<div className="flex flex-col items-center">
						<img src={person3} alt="Auguste Escoffier" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
						<h3 className="text-2xl font-serif font-semibold text-black mb-1">Sara Patel</h3>
						<span className="text-lg text-black font-serif mb-2">Project Manager</span>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="w-full bg-green-50 py-16 px-4 md:px-0 flex flex-col items-center justify-center">
	<div className="max-w-6xl w-full mx-auto text-center">
		<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
			Why Choose Us
		</h2>
		<p className="text-lg text-green-600 mb-8">Why Choose Us</p>
		<div className="flex flex-wrap md:flex-nowrap gap-8">
			<div className="border border-green-300 p-6 rounded-lg shadow-lg bg-white flex-1">
				<div className="flex justify-center mb-4">
					<img src="../assets/icon1.svg" alt="Quality Materials" className="w-12 h-12" />
				</div>
				<h3 className="text-xl font-bold text-gray-800 mb-4">Quality Materials</h3>
				<p className="text-gray-600">We use only the highest-quality materials in every project for unmatched durability and aesthetics.</p>
			</div>
			<div className="border border-green-300 p-6 rounded-lg shadow-lg bg-white flex-1">
				<div className="flex justify-center mb-4">
					<img src="../assets/icon2.svg" alt="Expert Team" className="w-12 h-12" />
				</div>
				<h3 className="text-xl font-bold text-gray-800 mb-4">Expert Team</h3>
				<p className="text-gray-600">Our team of architects and engineers are dedicated to delivering innovative and sustainable designs.</p>
			</div>
			<div className="border border-green-300 p-6 rounded-lg shadow-lg bg-white flex-1">
				<div className="flex justify-center mb-4">
					<img src="../assets/icon3.svg" alt="Sustainable Practices" className="w-12 h-12" />
				</div>
				<h3 className="text-xl font-bold text-gray-800 mb-4">Sustainable Practices</h3>
				<p className="text-gray-600">We prioritize eco-friendly solutions to ensure our projects contribute to a greener future.</p>
			</div>
		</div>
	</div>
</section>

			{/* CTA Section */}
			<section className="w-full bg-gray-100 py-16 px-4 md:px-0 flex flex-col items-center justify-center">
	<div className="max-w-6xl w-full mx-auto text-center">
		<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
			Start Your Dream Project Today!
		</h2>
		<p className="text-lg md:text-xl text-gray-600 mb-8">
			Experience excellence in construction and architectural design. Contact us to explore our services and bring your vision to life with precision and innovation.
		</p>
		<div className="flex justify-center gap-4">
			<button className="bg-green-300 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-400 transition">
				Contact Us
			</button>
			<button className="border border-green-300 text-green-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-300 hover:text-white transition">
				Explore Services
			</button>
		</div>
	</div>
</section>
			
		</div>
	);
}
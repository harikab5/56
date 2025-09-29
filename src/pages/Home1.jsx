import React from "react";
import Header from "../components/Header";
import RestaurantFooter from "../components/Footer";
import home1hero from "../assets/home1hero (1).mp4";
import home1about from "../assets/home1about.mp4";



export default function Home1() {
  return (
    <div className="flex flex-col min-h-screen">
     
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
        {/* Background Video for Hero Only */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
          src={home1hero}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay with less opacity for more brightness */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white text-center mb-4 drop-shadow-lg">
           Where Vision Meets Construction
          </h1>
          <p className="text-lg md:text-xl text-white/90 text-center mb-8 max-w-xl drop-shadow">
            Crafting innovative spaces with precision and excellence. From modern designs to timeless architecture, we bring your vision to life with unmatched quality.          </p>
          <div className="flex gap-6">
            <button className="relative border border-white text-white px-8 py-3 rounded-lg text-lg font-serif flex items-center group bg-transparent hover:bg-white/10 transition">
              Read More
              <span className="ml-3 w-8 h-0.5 bg-white block group-hover:bg-green-500 transition-all"></span>
            </button>
            <button className="bg-white/90 hover:bg-white text-green-700 font-semibold px-8 py-3 rounded-lg text-lg shadow transition">
              Our Projects
            </button>
          </div>
        </div>
      </section>
      {/* About/Feature Section */}
      <section className="relative w-full bg-green-50 py-16 px-8 md:px-16 flex flex-col items-center justify-center z-10">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-stretch">
          <div className="w-full flex justify-center items-center h-full">
            <video
              src={home1about}
              className="rounded-2xl shadow-lg w-full max-w-md h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="flex flex-col items-start justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Discover the ArchiBuild Experience</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-lg">
              At ArchiBuild, we bring visions to life with innovative design and solid craftsmanship. From modern architecture to timeless construction, our team delivers projects with precision, creativity, and unmatched quality. Whether it’s residential, commercial, or industrial, we build structures that stand the test of time.
            </p>
            <ul className="mb-6 space-y-2 text-gray-700">
              <li>Innovative & sustainable designs</li>
              <li>Reliable project delivery</li>
              <li>Award-winning architecture</li>
              <li>Residential, commercial & industrial projects</li>
            </ul>
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded-lg shadow transition">Learn More</button>
          </div>
        </div>
      </section>

      {/* Recent Completed Projects Section */}
      <div>
  <section className="w-full bg-gray-50 py-16 px-4 md:px-0 flex flex-col items-center justify-center">
    <div className="max-w-6xl w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-serif text-center">Recent Completed Projects</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Project Card 1 */}
        <div className="group perspective w-full h-80">
          <div className="relative preserve-3d w-full h-full duration-500 group-hover:rotate-y-180">
            {/* Back Side */}
            <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-green-100 flex items-center justify-center rounded-lg shadow-lg opacity-0 group-hover:opacity-100">
              <p className="text-gray-700 text-center px-4">Renovation services include modernizing interiors with innovative designs and high-quality materials.</p>
            </div>
            {/* Front Side */}
            <div className="absolute backface-hidden w-full h-full">
              <img src="src/assets/renovation.1.jpg" alt="Office interior in modern style" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-green-500 text-lg font-serif">RENOVATION</span>
            <p className="text-gray-700">Office interior in modern style</p>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="group perspective w-full h-80">
          <div className="relative preserve-3d w-full h-full duration-500 group-hover:rotate-y-180">
            {/* Back Side */}
            <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-green-100 flex items-center justify-center rounded-lg shadow-lg opacity-0 group-hover:opacity-100">
              <p className="text-gray-700 text-center px-4">Finishing works include decorative touches to enhance the aesthetic appeal of living spaces.</p>
            </div>
            {/* Front Side */}
            <div className="absolute backface-hidden w-full h-full">
              <img src="src/assets/finishingworks1.jpg" alt="Decorative works in living" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-green-500 text-lg font-serif">FINISHING WORKS</span>
            <p className="text-gray-700">Decorative works in living</p>
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="group perspective w-full h-80">
          <div className="relative preserve-3d w-full h-full duration-500 group-hover:rotate-y-180">
            {/* Back Side */}
            <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-green-100 flex items-center justify-center rounded-lg shadow-lg opacity-0 group-hover:opacity-100">
              <p className="text-gray-700 text-center px-4">Redevelopment services focus on repairing and upgrading apartments to meet modern standards.</p>
            </div>
            {/* Front Side */}
            <div className="absolute backface-hidden w-full h-full">
              <img src="src/assets/redevelopment.jpg" alt="Repair of apartments" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-green-500 text-lg font-serif">REDEVELOPMENT</span>
            <p className="text-gray-700">Repair of apartments</p>
          </div>
        </div>
        {/* Project Card 4 */}
        <div className="group perspective w-full h-80">
          <div className="relative preserve-3d w-full h-full duration-500 group-hover:rotate-y-180">
            {/* Back Side */}
            <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-green-100 flex items-center justify-center rounded-lg shadow-lg opacity-0 group-hover:opacity-100">
              <p className="text-gray-700 text-center px-4">Modern bathroom designs combine functionality with luxury for a refreshing experience.</p>
            </div>
            {/* Front Side */}
            <div className="absolute backface-hidden w-full h-full">
              <img src="src/assets/finishingworks1.jpg" alt="Modern bathroom" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-green-500 text-lg font-serif">FINISHING WORKS</span>
            <p className="text-gray-700">Modern bathroom</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

      {/* Calculate Cost of Repairs Section */}
      <div>
  <section className="w-full bg-green-50 py-16 px-4 md:px-0 flex flex-col items-center justify-center">
    <div className="max-w-6xl w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-serif text-center">We will calculate the cost of repairs</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white">
          <option>Renovation</option>
          <option>Interior Design</option>
          <option>Structural Repairs</option>
          <option>Landscaping</option>
          <option>Custom Architecture</option>
        </select>
        <input type="text" placeholder="Size of apartment (m²)" className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white" />
        <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white">
          <option>California</option>
          <option>Texas</option>
          <option>New York</option>
          <option>Florida</option>
          <option>Illinois</option>
        </select>
        <input type="text" placeholder="Your name" className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white" />
        <div className="flex items-center">
          <input type="text" placeholder="Phone number" className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white w-full" />
          <button className="bg-black text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-800 transition ml-4">Order Now</button>
        </div>
      </div>
    </div>
  </section>
</div>
      {/* Testimonial Section */}
      <div>
  <section className="w-full bg-green-50 py-16 px-8 md:px-16 flex flex-col items-center justify-center">
    <div className="max-w-6xl w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 font-serif text-center">What Our Clients Say</h2>
      <p className="text-lg text-black text-center mb-8">Real feedback from businesses that trust us! See how we bring visions to life with precision and excellence.</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-black mb-4">Innovative Designs for Modern Spaces</h3>
          <p className="text-sm text-black mb-6 text-center">ArchiBuild transformed our outdated office into a sleek, modern workspace that boosted productivity and client satisfaction. Their attention to detail was unmatched.</p>
          <div className="flex items-center gap-4">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Client" className="w-12 h-12 rounded-full" />
            <div>
              <p className="text-sm font-semibold text-black">Adnan Ashif</p>
              <p className="text-xs text-black">CEO, BuildLogic</p>
            </div>
          </div>
          <div className="mt-4 flex gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-black mb-4">Reliable Project Delivery</h3>
          <p className="text-sm text-black mb-6 text-center">From concept to completion, ArchiBuild delivered our residential project on time and exceeded our expectations with their innovative designs and craftsmanship.</p>
          <div className="flex items-center gap-4">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-12 h-12 rounded-full" />
            <div>
              <p className="text-sm font-semibold text-black">Sarah Lamin</p>
              <p className="text-xs text-black">CMO, HomeWorks</p>
            </div>
          </div>
          <div className="mt-4 flex gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-black mb-4">Creative and Sustainable Solutions</h3>
          <p className="text-sm text-black mb-6 text-center">Working with ArchiBuild was a fantastic experience! They delivered a stunning commercial building that is both eco-friendly and beautifully designed.</p>
          <div className="flex items-center gap-4">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-12 h-12 rounded-full" />
            <div>
              <p className="text-sm font-semibold text-black">Esther Howard</p>
              <p className="text-xs text-black">Founder, GreenBuild</p>
            </div>
          </div>
          <div className="mt-4 flex gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-yellow-500">★</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
      {/* Ready to Build Your Dream Project? Section */}
      <div>
  <section className="w-full bg-white py-16 px-4 md:px-0 flex flex-col items-center justify-center">
    <div className="max-w-6xl w-full mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-6 font-serif">Ready to Build Your Dream Project?</h2>
      <p className="text-lg text-gray-700 mb-8">
        Let our experts help you design and construct your dream space with precision and excellence. Contact us today for a free consultation!
      </p>
      <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition">
        Get Started
      </button>
    </div>
  </section>
</div>
      
    </div>
  );
}
import logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RestaurantFooter() {
  // Theme state logic (copied from Blog/other pages)
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
  }, []);
  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = localStorage.getItem('theme') || 'light';
      setTheme(newTheme);
    };
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);
  return (
    <footer className={theme === 'dark' ? 'bg-[#18181b] border-t mt-0 text-white' : 'bg-white border-t mt-0 text-black'}>
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-5 gap-8">
        {/* Logo & Brand */}
        <div className="col-span-1 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Stackly Logo" className="h-24 w-24 object-contain" />
          </div>
          <span className="text-green-600 font-semibold mt-2">Building Your Dreams, Every Day!</span>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-green-700 font-semibold mb-2">Quick Links</h3>
          <ul className={theme === 'dark' ? 'space-y-1 text-gray-300' : 'space-y-1 text-gray-700'}>
            <li>
              <Link to="/home1" className="hover:text-green-600">Home</Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-green-600">About Us</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-green-600">Blog</Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-green-600">Contact Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-green-600">Services</Link>
            </li>
          </ul>
        </div>
        {/* Explore Services */}
        <div>
          <h3 className="text-green-700 font-semibold mb-2">Our Services</h3>
          <ul className={theme === 'dark' ? 'space-y-1 text-gray-300' : 'space-y-1 text-gray-700'}>
            <li>
              <Link to="/Residential-Projects" className="hover:text-green-600">Residential Projects</Link>
            </li>
            <li>
              <Link to="/Commercial-Projects" className="hover:text-green-600">Commercial Projects</Link>
            </li>
            <li>
              <Link to="/Industrial-Projects" className="hover:text-green-600">Industrial Projects</Link>
            </li>
            <li>
              <Link to="/Renovation-Services" className="hover:text-green-600">Renovation Services</Link>
            </li>
            <li>
              <Link to="/Architectural-Designs" className="hover:text-green-600">Architectural Designs</Link>
            </li>
            <li>
              <Link to="/Project-Management" className="hover:text-green-600">Project Management</Link>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-green-700 font-semibold mb-2">Contact Us</h3>
          <div className={theme === 'dark' ? 'text-gray-300 text-sm' : 'text-gray-700 text-sm'}>
            <div><span className="font-semibold">Address:</span> 456 Build Street, Architect City</div>
            <div><span className="font-semibold">Phone:</span> (987) 654-3210</div>
            <div><span className="font-semibold">Email:</span> support@archibuild.com</div>
            <div><span className="font-semibold">Hours:</span> Mon–Fri, 9 AM – 6 PM</div>
          </div>
          <div className="mt-3">
            <span className={theme === 'dark' ? 'font-semibold text-gray-300' : 'font-semibold text-gray-700'}>Follow Us</span>
            <div className={theme === 'dark' ? 'flex gap-3 mt-1 text-xl text-gray-300' : 'flex gap-3 mt-1 text-xl text-gray-600'}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-green-600"><i className="fab fa-instagram"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-green-600"><i className="fab fa-facebook"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-green-600"><i className="fab fa-linkedin"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-green-600"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        {/* Buy Now Section */}
        <div>
          <h3 className="text-green-700 font-semibold mb-2">Buy Now</h3>
          <p className={theme === 'dark' ? 'text-gray-300 text-sm mb-4' : 'text-gray-700 text-sm mb-4'}>Looking to start your dream project? Contact us today and explore our services for building excellence!</p>
          <a href="/contactus" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition">Buy Now</a>
        </div>
      </div>
      <div className={theme === 'dark' ? 'border-t text-center text-gray-400 text-xs py-4' : 'border-t text-center text-gray-500 text-xs py-4'}>
        <div className="flex flex-row md:flex-row justify-center gap-4 mb-2">
          <a href="#" className="hover:text-green-600">Privacy Policy</a>
          <a href="#" className="hover:text-green-600">Terms &amp; Conditions</a>
          <a href="#" className="hover:text-green-600">Disclaimer</a>
        </div>
        ©️ 2025 ArchiBuild. All rights reserved.
      </div>
    </footer>
  );
}
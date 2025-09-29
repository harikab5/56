import React from "react";
import blogHero from "../assets/blog.mp4";
import { Brain, Code, BarChart3 } from "lucide-react";
import feature1 from "../assets/article1.jpg"; // re
import feature2 from "../assets/article2.jpg"; // replace with your delivery-related image
import feature3 from "../assets/article3.jpg"; // replace with your cuisine variety image
import { Link } from "react-router-dom";
const categories = [
  {
    name: "Architecture & Design",
    desc: "Latest trends, tips, and inspiration for modern building design.",
  },
  {
    name: "Construction Technology",
    desc: "Innovations and tools transforming the construction industry.",
  },
  {
    name: "Project Management",
    desc: "Best practices for planning, scheduling, and delivering projects on time.",
  },
  {
    name: "Safety & Compliance",
    desc: "Guides and updates on site safety, regulations, and quality standards.",
  },
];
const constructionTips = [
  {
    tip: "Always check site conditions and soil quality before starting foundation work.",
  },
  {
    tip: "Use proper PPE (Personal Protective Equipment) at all times on site.",
  },
  {
    tip: "Schedule regular safety briefings to keep your team updated on best practices.",
  },
  {
    tip: "Double-check measurements before cutting or pouring materials to avoid costly mistakes.",
  },
  {
    tip: "Keep construction documents and plans easily accessible for all team members.",
  },
  {
    tip: "Invest in quality tools and maintain them regularly for better efficiency.",
  },
  {
    tip: "Monitor weather forecasts to plan critical construction activities accordingly.",
  },
  {
    tip: "Document progress with photos and daily logs for better project tracking.",
  },
];

const features = [
  {
    title: "Sustainable Building Materials",
    description:
      "Explore the latest eco-friendly materials that improve durability and reduce environmental impact in construction projects.",
    image: feature1,
    link: "/blog/1",
  },
  {
    title: "Smart Construction Technology",
    description:
      "Discover how drones, BIM, and IoT are revolutionizing site management, safety, and efficiency.",
    image: feature2,
    link: "/blog/2",
  },
  {
    title: "Modern Project Management",
    description:
      "Learn about agile methods, digital tools, and best practices for delivering projects on time and within budget.",
    image: feature3,
    link: "/blog/3",
  },
];


const services = [
  {
    name: "Site Supervision",
    features: [
      "Daily site inspections",
      "Quality control checks",
      "Safety compliance monitoring",
      "Progress documentation",
    ],
  },
  {
    name: "Project Planning",
    features: [
      "Detailed scheduling",
      "Resource allocation",
      "Budget estimation",
      "Risk assessment",
    ],
  },
  {
    name: "Design & Engineering",
    features: [
      "Architectural drawings",
      "Structural analysis",
      "MEP coordination",
      "Sustainable solutions",
    ],
  },
  {
    name: "Procurement",
    features: [
      "Vendor management",
      "Material sourcing",
      "Cost negotiation",
      "Timely delivery",
    ],
  },
  {
    name: "Client Reporting",
    features: [
      "Weekly progress updates",
      "Transparent communication",
      "Issue tracking",
      "Photo documentation",
    ],
  },
  {
    name: "Post-Construction",
    features: [
      "Final inspections",
      "Handover documentation",
      "Warranty support",
      "Maintenance planning",
    ],
  },
];


export default function BlogHero() {
  // Theme state synced with Header
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
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
    }
  }, []);
  // Read blogs from localStorage
  

  return (
    <div className={theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'}>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center" style={{ color: theme === 'dark' ? '#fff' : '#222' }}>
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={blogHero}
          autoPlay
          muted
          loop
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center px-6" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Construction <span style={{ color: '#ef4444' }}>Insights</span>
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            Stay updated with the latest trends, innovations, and best practices in construction, architecture, engineering, and project management. Build smarter with our expert tips and industry news!
          </p>
        </div>
      </section>

      {/* Latest Blogs Section */}
      

      {/* Featured Articles Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-green-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured Construction Articles
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <article
                key={index}
                className={`rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-gray-50 text-black'}`}
              >
                {/* Image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                 <Link
  to={feature.link}
  className="text-green-500 font-semibold hover:underline"
>
  Read More →
</Link>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
        <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore by <span style={{ color: '#ef4444' }}>Construction Topics</span>
            </h2>
            <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
  Our blog is organized to help you easily find articles on architecture, technology, project management, and safety—everything you need to succeed in construction.
</p>
<p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
  Browse through our categories and discover expert advice, case studies, and the latest industry updates. Whether you’re a builder, architect, engineer, or project owner, our blog has something for you.
</p>

          </div>

          {/* Right Cards Grid */}
          <div className="grid  sm:grid-cols-2 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}
              >
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#ef4444' }}>{cat.name}</h3>
                <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-green-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Service Comparison
            </h2>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className={`w-full border rounded-lg shadow-md text-left ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <thead className={theme === 'dark' ? 'bg-[#111] text-white' : 'bg-[#000] text-white'}>
              <tr>
                <th className="px-6 py-3">Features</th>
                {services.map((service, idx) => (
                  <th key={idx} className="px-6 py-3 text-center">
                    {service.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={theme === 'dark' ? 'bg-[#222] divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}>
              {services[0].features.map((_, i) => (
                <tr key={i}>
                  {/* Feature Name */}
                  <td className={`px-6 py-4 font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    {services[0].features[i]}
                  </td>
                  {/* Features across services */}
                  {services.map((service, j) => (
                    <td
                      key={j}
                      className={`px-6 py-4 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      {service.features[i] || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>




  <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
    <div className="max-w-6xl mx-auto px-6">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: '#ef4444' }}>
        Construction Myths & Facts
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
  {/* Item 1 */}
  <div className="space-y-4">
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Myth:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Green buildings are always more expensive to build.
      </p>
    </div>
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Fact:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Sustainable design can reduce long-term costs and many eco-friendly materials are now competitively priced.
      </p>
    </div>
  </div>

  {/* Item 2 */}
  <div className="space-y-4">
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Myth:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Project delays are unavoidable in construction.
      </p>
    </div>
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Fact:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        With proper planning, risk management, and communication, most delays can be prevented or minimized.
      </p>
    </div>
  </div>

  {/* Item 3 */}
  <div className="space-y-4">
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Myth:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Prefabricated buildings are low quality.
      </p>
    </div>
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Fact:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Modern prefab construction uses high-quality materials and strict standards, often exceeding traditional builds.
      </p>
    </div>
  </div>

  {/* Item 4 */}
  <div className="space-y-4">
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Myth:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Safety gear is only needed for high-risk jobs.
      </p>
    </div>
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Fact:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        PPE is essential for all construction activities to prevent injuries and save lives.
      </p>
    </div>
  </div>

  {/* Item 5 */}
  <div className="space-y-4">
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Myth:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Technology slows down construction work.
      </p>
    </div>
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Fact:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Digital tools and automation actually speed up processes, improve accuracy, and enhance collaboration.
      </p>
    </div>
  </div>

  {/* Item 6 */}
  <div className="space-y-4">
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Myth:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Only large companies can afford project management services.
      </p>
    </div>
    <div className="flex gap-2">
      <h3 className="text-green-600 font-bold">Fact:</h3>
      <p className={theme === 'dark' ? 'text-white' : 'text-black'}>
        Project management benefits projects of all sizes and is scalable to fit any budget.
      </p>
    </div>
  </div>
</div>

    </div>
  </section>

<div className={`py-10 ${theme === 'dark' ? 'bg-[#000]' : 'bg-green-50'}`}>
  <h2 className={`text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
    Construction Tips �️
  </h2>

  <div className="grid  md:grid-cols-2 gap-6 max-w-4xl mx-auto ">
    {constructionTips.map((item, index) => (
      <div 
        key={index} 
        className="p-4 border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition"
      >
        <p className={theme === 'dark' ? 'text-black' : 'text-black'}>
          {item.tip}
        </p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

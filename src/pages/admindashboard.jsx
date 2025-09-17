import { useState, useEffect } from "react";
import clsx from "clsx";
import Header from "../components/Header";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  AreaChart,
  Area,
} from "recharts";
const revenueData = [
    { month: "January", revenue: 25000 },
    { month: "February", revenue: 35000 },
    { month: "March", revenue: 30000 },
    { month: "April", revenue: 45000 },
    { month: "May", revenue: 55000 },
    { month: "June", revenue: 70000 },
    { month: "July", revenue: 40000 },
  ];



  const milestonesData = [
    { milestone: "Design Phase", progress: 50 },
    { milestone: "Construction", progress: 70 },
    { milestone: "Inspection", progress: 90 },
    { milestone: "Completion", progress: 100 },
  ];

  const clientsData = [
    { month: "Jan", clients: 50 },
    { month: "Feb", clients: 55 },
    { month: "Mar", clients: 60 },
    { month: "Apr", clients: 70 },
  ];

  const feedbackData = [
    { name: "Positive", value: 80 },
    { name: "Neutral", value: 15 },
    { name: "Negative", value: 5 },
  ];
  const COLORS = ["#22c55e", "#eab308", "#34d399"];

  const dealsData = [
    { deal: "Discount on Materials", redemptions: 140 },
    { deal: "Free Consultation", redemptions: 100 },
    { deal: "Referral Bonus", redemptions: 170 },
  ];

  const projectDistributionData = [
    { name: "Residential", value: 15 },
    { name: "Commercial", value: 10 },
    { name: "Industrial", value: 7 },
    { name: "Renovation", value: 12 },
  ];

  const COLORS_PROJECTS = ["#34d399", "#60a5fa", "#22c55e", "#34d399"];

export default function UserDetailsSection() {
  // Theme state
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  useEffect(() => {
    const syncTheme = () => setTheme(localStorage.getItem("theme") || "light");
    window.addEventListener("storage", syncTheme);
    window.addEventListener("theme-changed", syncTheme);
    return () => {
      window.removeEventListener("storage", syncTheme);
      window.removeEventListener("theme-changed", syncTheme);
    };
  }, []);

  // NOTE: In your theme toggle logic (e.g., in Header), after updating localStorage, add:
  // window.dispatchEvent(new Event("themeChanged"));
  // Remove a blog (same logic as webinars)
  const handleRemoveBlog = (idx) => {
    const newBlogs = blogs.filter((_, i) => i !== idx);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setBlogs(newBlogs);
    setEditIdx(null);
  };

  // Start editing a blog (same logic as webinars)
  const handleEditBlog = (idx) => {
    setEditIdx(idx);
    const b = blogs[idx];
    setEditForm({
      title: b.title || '',
      image: b.image || '',
      author: b.author || '',
      description: b.description || ''
    });
  };

  // Save edited blog (same logic as webinars)
  const handleBlogEditSave = (idx) => {
    if (!editForm.title || !editForm.image || !editForm.author || !editForm.description) return;
    const newBlogs = blogs.map((b, i) => i === idx ? { ...editForm, createdAt: b.createdAt } : b);
    setBlogs(newBlogs);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setEditIdx(null);
  };
  const [editIdx, setEditIdx] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', date: '', time: '', description: '' });
  const [webinarRegistrations, setWebinarRegistrations] = useState([]);
  const [webinars, setWebinars] = useState([]);
  const [webinarForm, setWebinarForm] = useState({ title: '', date: '', time: '', description: '' });

  const [signupDetails, setSignupDetails] = useState([]);
  const [instructorDetails, setInstructorDetails] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [blogForm, setBlogForm] = useState({ title: '', image: '', author: '', description: '' });

  // Prepare data for signup graph (signups per day)
  
  // Prepare data for instructor graph (instructors per expertise)
  

  useEffect(() => {
    // Fetch all admin data from localStorage
    const fetchDetails = () => {
      const storedUsers = localStorage.getItem("users");
      setSignupDetails(storedUsers ? JSON.parse(storedUsers) : []);
    
    };
    fetchDetails();
    window.addEventListener("storage", fetchDetails);
    return () => window.removeEventListener("storage", fetchDetails);
  }, []);

 


  return (
    <div className={clsx(
      "min-h-screen w-full",
      theme === "dark" ? "bg-[#10141c] text-white" : "bg-[#f6fafd] text-[#22223b]"
    )}>
      <Header />

      {/* Updated Section Title */}
      <div className={clsx(
        "rounded-xl shadow p-6 mt-16 bg-white text-black border border-green-500"
      )}>
        <h2 className="text-2xl font-bold mb-4 text-green-600">Project Signup Details</h2>
        {signupDetails.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border rounded-lg border-green-500">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="px-4 py-2 text-center">S.No</th>
                  <th className="px-4 py-2 text-center">First Name</th>
                  <th className="px-4 py-2 text-center">Last Name</th>
                  <th className="px-4 py-2 text-center">Email</th>
                  <th className="px-4 py-2 text-center">Signup Time</th>
                  <th className="px-4 py-2 text-center">Signup Date</th>
                </tr>
              </thead>
              <tbody>
                {signupDetails.map((user, idx) => (
                  <tr key={user.email || idx} className="border-b border-green-200">
                    <td className="px-4 py-2 text-center">{idx + 1}</td>
                    <td className="px-4 py-2 text-center">{user.firstName}</td>
                    <td className="px-4 py-2 text-center">{user.lastName}</td>
                    <td className="px-4 py-2 text-center">{user.email}</td>
                    <td className="px-4 py-2 text-center">{user.signupTime}</td>
                    <td className="px-4 py-2 text-center">{user.signupDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No project signup details found.</p>
        )}
      </div>

    <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* 2. Project Distribution (Pie Chart) */}
        <div className="p-6 rounded-2xl shadow bg-white text-black border border-green-500">
          <h2 className="text-xl font-semibold mb-4 text-green-600">Project Distribution (Pie Chart)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectDistributionData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {projectDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS_PROJECTS[index % COLORS_PROJECTS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 3. Milestones Progress & 4. Client Acquisition */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Milestones Progress */}
          <div className="p-6 rounded-2xl shadow bg-white text-black border border-green-500">
            <h2 className="text-xl font-semibold mb-4 text-green-600">Milestones Progress</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={milestonesData}>
                <defs>
                  <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="milestone" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="progress" stroke="#22c55e" fill="url(#colorProgress)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
           
          <div className="p-6 rounded-2xl shadow bg-white text-black border border-green-500">
            <h2 className="text-xl font-semibold mb-4 text-green-600">Client Acquisition (Monthly)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={clientsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="clients" stroke="#22c55e" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 6. Deals Performance */}
        <div className="p-6 rounded-2xl shadow bg-white text-black border border-green-500">
          <h2 className="text-xl font-semibold mb-4 text-green-600">Deals Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dealsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="deal" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="redemptions" fill="#22c55e" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 1. Revenue Overview */}
        <div className="p-6 rounded-2xl shadow bg-white text-black border border-green-500">
          <h2 className="text-xl font-bold mb-4 text-green-600">Revenue Overview (Monthly)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
     </div>
  );
}

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "ℹ️" },
    { path: "/gallery", label: "Gallery", icon: "🖼️" },
    { path: "/quotes", label: "Quotes", icon: "💬" },
    { path: "/facts", label: "Trivia", icon: "🎯" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  return (
    <>
      {/* Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-red-300 shadow-lg shadow-red-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent hover:from-red-500 hover:to-red-500 transition-all"
          >
            ✨ Marin
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isActive(item.path) ? "text-red-600" : "text-red-700 hover:text-red-500"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ${
                    isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block text-red-600 text-sm font-semibold">My Dress-Up Darling</div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute h-0.5 w-full bg-red-600 transition-all duration-300 ${
                  isSidebarOpen ? "rotate-45 top-2" : "top-0"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-full bg-red-600 top-2 transition-all duration-300 ${
                  isSidebarOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-full bg-red-600 transition-all duration-300 ${
                  isSidebarOpen ? "-rotate-45 top-2" : "top-4"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* Translucent Sidebar */}
          <div className="fixed top-16 right-0 w-64 max-w-xs z-40 md:hidden">
            <div className="bg-white/80 backdrop-blur-xl border-l border-b border-red-200/50 rounded-bl-2xl shadow-2xl shadow-red-300/20">
              <div className="p-6 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-400/30"
                        : "text-red-700 hover:bg-red-50/50"
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}

                {/* Divider */}
                <div className="my-4 h-px bg-red-200/30"></div>

                {/* Sidebar Footer */}
                <div className="text-center">
                  <p className="text-xs text-red-600 font-semibold">My Dress-Up Darling</p>
                  <p className="text-xs text-red-500 mt-1">Fan Site</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

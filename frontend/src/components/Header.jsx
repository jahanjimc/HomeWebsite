import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#f4f7f3] sticky top-0 z-50 border-b border-[#dfe6dd]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Jahanji Logo" className="w-11 h-11 object-contain" />
            <span className="text-2xl font-semibold tracking-widest text-[#4f5f4d]">
              JAHANJI
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            {["/", "/events", "/about", "/contact"].map((path, i) => {
              const names = ["Home", "Events", "About Jahanji", "Contact"];
              return (
                <Link
                  key={path}
                  to={path}
                  className={`transition-colors ${
                    isActive(path)
                      ? "text-[#6B7F69]"
                      : "text-gray-600 hover:text-[#6B7F69]"
                  }`}
                >
                  {names[i]}
                </Link>
              );
            })}
          </nav>

          {/* Button */}
          <a 
            href="https://forms.gle/XfFMvDZT6pQKw7nM9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button className="bg-[#6B7F69] hover:bg-[#5a6b58] text-white px-6 py-2 rounded-xl shadow-sm">
              Register now
            </Button>
          </a>

          {/* Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-5 bg-white rounded-2xl shadow-lg p-5">
            <nav className="flex flex-col gap-4">
              {[
                { path: "/", name: "Home" },
                { path: "/events", name: "Events" },
                { path: "/about", name: "About Jahanji" },
                { path: "/contact", name: "Contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${
                    isActive(item.path)
                      ? "text-[#6B7F69]"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="https://forms.gle/XfFMvDZT6pQKw7nM9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-[#6B7F69] hover:bg-[#5a6b58] text-white rounded-xl mt-2">
                  Register now
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
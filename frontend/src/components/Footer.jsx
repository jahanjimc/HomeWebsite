import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#dfe6dd] mt-20">
      <div className="container mx-auto px-6 py-10 md:py-14">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Jahanji Logo"
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-semibold tracking-widest text-[#4f5f4d]">
              JAHANJI
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm font-medium">
            {[
              { path: "/", label: "Home" },
              { path: "/events", label: "Events" },
              { path: "/about", label: "About Jahanji" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-[#6B7F69] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 pt-8 border-t border-[#e2e8e0] flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-[#f4f7f3] p-2.5 rounded-full text-gray-600 hover:bg-[#6B7F69] hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs md:text-sm text-gray-500 text-center">
            © 2026 Jahanji Meditation Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

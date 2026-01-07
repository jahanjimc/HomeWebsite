import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flower2 } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-[#6B7F69] rounded-full p-2">
              <Flower2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-wider text-gray-800">JAHANJI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-[#6B7F69] ${
                isActive('/') ? 'text-[#6B7F69]' : 'text-gray-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`text-sm font-medium transition-colors hover:text-[#6B7F69] ${
                isActive('/events') ? 'text-[#6B7F69]' : 'text-gray-600'
              }`}
            >
              Events
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-[#6B7F69] ${
                isActive('/about') ? 'text-[#6B7F69]' : 'text-gray-600'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-[#6B7F69] ${
                isActive('/contact') ? 'text-[#6B7F69]' : 'text-gray-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          <Button className="bg-[#6B7F69] hover:bg-[#5a6b58] text-white px-6 py-2 rounded-md transition-all duration-300 shadow-sm hover:shadow-md">
            Download Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Music, LayoutGrid, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Width */}
      <section className="relative w-full">
        {/* Hero Image - Full Width */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2400"
            alt="Beach Yoga"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60"></div>
          
          {/* Hero Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-[0.2em] md:tracking-[0.3em] text-gray-800 mb-3 md:mb-4 text-center drop-shadow-sm">
              JAHANJI MEDITATION CENTER
            </h1>
            <p className="text-gray-700 max-w-4xl text-center leading-relaxed text-xs md:text-sm lg:text-base drop-shadow-sm px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Event Banner - Overlapping */}
        <div className="container mx-auto px-4 md:px-6 relative -mt-8 md:-mt-12">
          <div className="bg-white border-t-4 border-[#6B7F69] py-4 md:py-6 text-center shadow-xl rounded-md max-w-4xl mx-auto">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 md:mb-2">Next Event</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 tracking-wide">
              FEB 17th 5:00 PM to 7:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#f0f4f0]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12 md:mb-20 tracking-wide">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-center">
            {/* Get Started Card - Dark Green with Call to Action - Taller */}
            <Card className="bg-[#6B7F69] text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl overflow-hidden sm:col-span-2 lg:col-span-1">
              <CardContent className="p-8 md:p-10 flex flex-col items-center justify-center text-center h-full min-h-[320px] md:min-h-[420px]">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Get Started</h3>
                <h4 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">With Us</h4>
                <p className="text-white/95 mb-6 md:mb-8 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
                <Button
                  variant="outline"
                  className="bg-white text-[#6B7F69] hover:bg-gray-50 border-0 px-6 md:px-8 py-4 md:py-6 text-sm md:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get started today
                </Button>
              </CardContent>
            </Card>

            {/* Music Service - Elegant White Card - Smaller */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl overflow-hidden border border-gray-100">
              <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full min-h-[320px]">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-5 rounded-full mb-4 md:mb-5 shadow-inner">
                  <Music className="w-8 h-8 md:w-10 md:h-10 text-[#6B7F69]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Music</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
            </Card>

            {/* Dance Service - Elegant White Card - Smaller */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl overflow-hidden border border-gray-100">
              <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full min-h-[320px]">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-5 rounded-full mb-4 md:mb-5 shadow-inner">
                  <LayoutGrid className="w-8 h-8 md:w-10 md:h-10 text-[#6B7F69]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Dance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
            </Card>

            {/* Free Lessons Service - Elegant White Card - Smaller */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl overflow-hidden border border-gray-100">
              <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full min-h-[320px]">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-5 rounded-full mb-4 md:mb-5 shadow-inner">
                  <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-[#6B7F69]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Free Lessons</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12 md:mb-20 tracking-wide">
            Time Line
          </h2>
          <div className="h-48 md:h-64 flex items-center justify-center">
            <p className="text-gray-400 text-base md:text-lg italic">Timeline content coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

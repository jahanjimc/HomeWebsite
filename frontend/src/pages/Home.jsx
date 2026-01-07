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
        <div className="relative w-full h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2400"
            alt="Beach Yoga"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60"></div>
          
          {/* Hero Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-[0.3em] text-gray-800 mb-4 text-center drop-shadow-sm">
              JAHANJI MEDITATION CENTER
            </h1>
            <p className="text-gray-700 max-w-4xl text-center leading-relaxed text-sm md:text-base drop-shadow-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Event Banner - Overlapping */}
        <div className="container mx-auto px-6 relative -mt-12">
          <div className="bg-white border-t-4 border-[#6B7F69] py-6 text-center shadow-xl rounded-md max-w-4xl mx-auto">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Next Event</p>
            <p className="text-3xl font-bold text-gray-600 tracking-wide">
              FEB 17th 5:00 PM to 7:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#f0f4f0]">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-20 tracking-wide">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Get Started Card - Dark Green with Call to Action */}
            <Card className="bg-[#6B7F69] text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl overflow-hidden">
              <CardContent className="p-10 flex flex-col items-center justify-center text-center h-full min-h-[420px]">
                <h3 className="text-3xl font-bold mb-2">Get Started</h3>
                <h4 className="text-2xl font-semibold mb-6">With Us</h4>
                <p className="text-white/95 mb-8 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
                <Button
                  variant="outline"
                  className="bg-white text-[#6B7F69] hover:bg-gray-50 border-0 px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get started today
                </Button>
              </CardContent>
            </Card>

            {/* Music Service - Elegant White Card */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl overflow-hidden border border-gray-100">
              <CardContent className="p-10 flex flex-col items-center text-center h-full min-h-[420px] justify-between">
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-full mb-6 shadow-inner">
                    <Music className="w-12 h-12 text-[#6B7F69]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Music</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dance Service - Elegant White Card */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl overflow-hidden border border-gray-100">
              <CardContent className="p-10 flex flex-col items-center text-center h-full min-h-[420px] justify-between">
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-full mb-6 shadow-inner">
                    <LayoutGrid className="w-12 h-12 text-[#6B7F69]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Dance</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Free Lessons Service - Elegant White Card */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl overflow-hidden border border-gray-100">
              <CardContent className="p-10 flex flex-col items-center text-center h-full min-h-[420px] justify-between">
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-full mb-6 shadow-inner">
                    <GraduationCap className="w-12 h-12 text-[#6B7F69]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Free Lessons</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-20 tracking-wide">
            Time Line
          </h2>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-400 text-lg italic">Timeline content coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

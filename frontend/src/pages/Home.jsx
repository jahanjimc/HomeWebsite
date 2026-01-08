import React, { useEffect, useRef, useState } from 'react';
import { Music, LayoutGrid, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const servicesRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsContainerRef.current) return;

      const container = cardsContainerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the container has scrolled into view
      // Start animation when container is more into viewport
      const startPoint = windowHeight * 0.5; // Start when container is 50% into viewport
      const endPoint = -rect.height + windowHeight * 0.5; // End when container is leaving
      
      let progress = 0;
      if (rect.top < startPoint && rect.top > endPoint) {
        progress = (startPoint - rect.top) / (startPoint - endPoint);
        progress = Math.max(0, Math.min(1, progress));
      } else if (rect.top <= endPoint) {
        progress = 1;
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate individual card positions based on scroll progress
  const getCardTransform = (cardIndex) => {
    const totalCards = 4;
    // Slow down the animation - each card takes more scroll distance
    const cardStartProgress = cardIndex / (totalCards * 1.5);
    const cardEndProgress = (cardIndex + 1) / (totalCards * 1.5);
    
    let cardProgress = 0;
    if (scrollProgress > cardStartProgress) {
      cardProgress = Math.min(1, (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress));
    }
    
    // Calculate initial offset (starting position below)
    const initialOffset = cardIndex * 380; // 380px gap between cards initially
    
    // Calculate final position (all stacked at top)
    const finalOffset = 0;
    
    // Interpolate between initial and final with easing
    const easeProgress = cardProgress * cardProgress * (3 - 2 * cardProgress); // Smooth easing
    const currentOffset = initialOffset - (easeProgress * initialOffset);
    
    return currentOffset;
  };

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
        <div className="container mx-auto px-4 md:px-6 relative -mt-8 md:-mt-12 z-20">
          <div className="bg-white border-t-4 border-[#6B7F69] py-4 md:py-6 text-center shadow-xl rounded-md max-w-4xl mx-auto">
            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 md:mb-2">Next Event</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-600 tracking-wide">
              FEB 17th 5:00 PM to 7:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Spacer for mobile scroll animation */}
      <div className="lg:hidden h-32 bg-[#f0f4f0]"></div>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 md:py-24 bg-[#f0f4f0] relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12 md:mb-20 tracking-wide">
            Our Services
          </h2>

          {/* Desktop Layout - Hidden on mobile/tablet */}
          <div className="hidden lg:grid grid-cols-4 gap-6 max-w-7xl mx-auto items-center">
            {/* Get Started Card */}
            <Card className="bg-[#6B7F69] text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl overflow-hidden">
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

            {/* Music Service */}
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

            {/* Dance Service */}
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

            {/* Free Lessons Service */}
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

          {/* Mobile/Tablet Stacking Layout */}
          <div 
            ref={cardsContainerRef}
            className="lg:hidden relative mx-auto max-w-sm"
            style={{ minHeight: '2400px' }}
          >
            {/* Get Started Card - Base card */}
            <div 
              className="sticky top-24 w-full transition-all duration-500 ease-out"
              style={{ 
                transform: `translateY(${getCardTransform(0)}px)`,
                zIndex: 10
              }}
            >
              <Card className="bg-[#6B7F69] text-white shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8 flex flex-col items-center justify-center text-center min-h-[360px]">
                  <h3 className="text-2xl font-bold mb-2">Get Started</h3>
                  <h4 className="text-xl font-semibold mb-4">With Us</h4>
                  <p className="text-white/95 mb-6 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                  </p>
                  <Button
                    variant="outline"
                    className="bg-white text-[#6B7F69] hover:bg-gray-50 border-0 px-6 py-4 text-sm font-semibold rounded-xl shadow-lg"
                  >
                    Get started today
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Music Card */}
            <div 
              className="sticky top-24 w-full transition-all duration-500 ease-out -mt-[360px]"
              style={{ 
                transform: `translateY(${getCardTransform(1)}px)`,
                zIndex: 20
              }}
            >
              <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center min-h-[340px]">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-full mb-4 shadow-inner">
                    <Music className="w-8 h-8 text-[#6B7F69]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Music</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Dance Card */}
            <div 
              className="sticky top-24 w-full transition-all duration-500 ease-out -mt-[340px]"
              style={{ 
                transform: `translateY(${getCardTransform(2)}px)`,
                zIndex: 30
              }}
            >
              <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center min-h-[340px]">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-full mb-4 shadow-inner">
                    <LayoutGrid className="w-8 h-8 text-[#6B7F69]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Dance</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Free Lessons Card */}
            <div 
              className="sticky top-24 w-full transition-all duration-500 ease-out -mt-[340px]"
              style={{ 
                transform: `translateY(${getCardTransform(3)}px)`,
                zIndex: 40
              }}
            >
              <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
                <CardContent className="p-6 flex flex-col items-center text-center min-h-[340px]">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-full mb-4 shadow-inner">
                    <GraduationCap className="w-8 h-8 text-[#6B7F69]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Free Lessons</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </CardContent>
              </Card>
            </div>
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

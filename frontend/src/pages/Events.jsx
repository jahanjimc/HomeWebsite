import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const Events = () => {
  const events = [
    {
      id: 1,
      heading: 'Heading',
      subHeading: 'Sub Heading',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800'
    },
    {
      id: 2,
      heading: 'Heading',
      subHeading: 'Sub Heading',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Latest Classes
          </h1>
          <p className="text-gray-600 text-base md:text-lg">Sub Heading</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          {events.map((event) => (
            <Card key={event.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0 md:gap-8">
                  <div className="bg-gray-200 h-[250px] md:h-auto">
                    <img
                      src={event.image}
                      alt={event.heading}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {event.heading}
                    </h2>
                    <p className="text-[#6B7F69] font-semibold mb-4">
                      {event.subHeading}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

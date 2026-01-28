import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Shirt, SquareStack, Coffee } from 'lucide-react';

const Events = () => {
  const scheduleItems = [
    {
      id: 1,
      time: '15 min',
      title: 'Breathing Exercises'
    },
    {
      id: 2,
      time: '15 min',
      title: 'Yoga Exercises'
    },
    {
      id: 3,
      time: '1 hour',
      title: 'Kundalini Meditation'
    },
    {
      id: 4,
      time: '15 min',
      title: 'Celebration & Dance'    }
  ];

  return (
    <div className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Event Details
          </h1>
        </div>

        {/* Schedule Items */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 mb-12 md:mb-16">
          {scheduleItems.map((item) => (
            <Card key={item.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-emerald-600" />
                  <span className="text-emerald-600 font-bold text-xl">{item.time}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What to Bring Section */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center min-h-[240px] flex flex-col justify-center">
                <div className="flex justify-center mb-5">
                  <div className="bg-purple-200 p-4 rounded-full">
                    <Shirt className="w-9 h-9 text-purple-700" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Comfortable Clothing</h3>
                <p className="text-gray-700 text-base">
                  Wear loose, breathable attire
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-300 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center min-h-[240px] flex flex-col justify-center">
                <div className="flex justify-center mb-5">
                  <div className="bg-indigo-200 p-4 rounded-full">
                    <SquareStack className="w-9 h-9 text-indigo-700" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Yoga Mat</h3>
                <p className="text-gray-700 text-base">
                  Bring your own mat for comfort
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center min-h-[240px] flex flex-col justify-center">
                <div className="flex justify-center mb-5">
                  <div className="bg-orange-200 p-4 rounded-full">
                    <Coffee className="w-9 h-9 text-orange-700" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Refreshments</h3>
                <p className="text-gray-700 text-base">
                  Light snacks served after event
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
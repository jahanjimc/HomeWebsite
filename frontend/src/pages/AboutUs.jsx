import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import instruc_img from '../assets/instructer_img.jpeg'

const AboutUs = () => {
  return (
    <div className="min-h-screen py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            About Our Jahanji
          </h1>
          <p className="text-gray-600 text-sm md:text-base">Meet Our Author</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
                <div className="md:col-span-2 order-2 md:order-1">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    Jahanji <span className="text-gray-600 text-xl md:text-2xl">(joe bandra)</span>
                  </h2>
                  
                  <div className="space-y-4 mt-6">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                    </p>
                  </div>

                  <div className="mt-8 md:mt-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">BOOKS</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((book) => (
                        <div
                          key={book}
                          className="bg-gray-200 h-32 md:h-48 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                          <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                            Book {book}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center md:justify-end order-1 md:order-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6B7F69] to-[#8B9F89] rounded-2xl transform rotate-3"></div>
                    <img
                      src={instruc_img}
                      alt="Instructor Jahanji"
                      className="relative w-56 h-72 md:w-72 md:h-96 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

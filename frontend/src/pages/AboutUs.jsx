import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import instruc_img from '../assets/instructer_img.jpeg';
import book_img from '../assets/book_snap.jpg';
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Jahanji
          </h1>
          <p className="text-gray-600 text-sm md:text-base">Meet Our Guru</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6 md:p-12">

              {/* ================= INTRO SECTION ================= */}
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">

                {/* Bio */}
                <div className="md:col-span-2 order-2 md:order-1">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    Jahanji <span className="text-gray-600 text-xl md:text-2xl">(joe bandra)</span>
                  </h2>

                  <div className="space-y-4 mt-6">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Jahanji is an unconventional philosopher, a guide with a punchline and a seeker who never stops asking the big questions. With a background in medical physics, healthcare leadership, yoga, and meditation, Joe blends scientific clarity with spiritual depth, offering a rare combination of grounded wisdom, sharp insight, and disarming humor. Educated at both Stanford and Harvard Universities, he brings a rigorous academic foundation to his explorations of self-inquiry and consciousness.
                    </p>

                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      For over two decades, Joe has walked alongside others through the raw terrain of personal transformation, understanding both the ache of human struggle and the quiet joy of returning to what's always been present-the stillness of our true self. In Finding Nevaeh, Joe weaves storytelling, lived experience, and philosophical inquiry into a journey that is both emotionally honest and spiritually profound. The book's fictional guide, "The Philosopher," mirrors Joe's own approach-not through dogma but through dialogue, not with rigid answers but with questions that invite readers to awaken from the illusion of separation.
                    </p>

                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      His teachings draw from traditions such as Advaita Vedanta, Christian mysticism, Sufism, Buddhism, and modern nondualism, all while staying rooted in the everyday messiness of identity, ego, grief, love, fear, and the deep longing to come home to wholeness. For Joe, philosophy isn't merely something to be studied-it's a life to be lived, a daily practice of peeling back illusion and remembering the quiet simplicity of being. He lives near Antioch, Illinois, where conversations run deep, the coffee is strong, and every journey home begins with a single, silent moment of presence.
                    </p>
                  </div>
                </div>

                {/* Image */}
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

              {/* ================= AUTHOR / BOOK SECTION ================= */}
              <div className="mt-16">

                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Author
                  </h3>
                  <h6 className="text-xl md:text-2xl font-light text-gray-800">
                    Finding Nevaeh, Published Aug 15, 2025.
                  </h6>
                </div>

                <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-white rounded-2xl shadow-md p-6 md:p-10">

                  {/* Book Image */}
                  <div className="w-full md:w-80 flex justify-center">
                    <div className="w-40 h-56 md:w-48 md:h-64 bg-gray-200 rounded-xl shadow-lg">
                      <img
                        src={book_img}
                        alt="Finding Nevaeh book cover"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="w-full md:flex-1 text-center md:text-left">
                    <h4 className="text-xl md:text-2xl font-semibold text-[#4f5f4d] mb-3">
                      Finding Nevaeh
                    </h4>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                      In the heart of Lincoln Park, Chicago, where the city's vibrant pulse meets the calm of nature, there's Nevaeh-a young woman caught in life's noise.

Like so many of us, she's grappling with the question that tugs at the core of existence: Who am I? It's not a quiet or facile question; it churns, pushes, and pulls, leaving her suspended between the reality of her physical self and the whirlwind of her inner thoughts. Feeling more adrift than ever, Nevaeh hears about a Philosopher named Joe Bandra, known simply as "J." It is believed that he's cracked the code of existence, uncovered life's secrets, and lives a simple, insightful existence by Salem Lakes, just outside Antioch, Illinois. J is somewhat of an unconventional philosopher with a relaxed presence, known for his piercing clarity in seeing through life's illusions. Nevaeh places a phone call to The Philosopher and receives an invitation to visit. With no other path calling, Nevaeh boards a train, hope-ful that this stranger might help her make sense of the chaos within.
                    </p>

                    <p className="text-sm text-gray-500 mb-4">
                      By Jahanji
                    </p>

                    <Link
                      to="https://www.amazon.co.uk/Finding-Nevaeh-Joe-Bandra/dp/B0FH5WQ531"
                      className="inline-block px-5 py-2 rounded-xl bg-[#6B7F69] text-white text-sm hover:bg-[#5a6b58] transition"
                    >
                      Learn More
                    </Link>
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

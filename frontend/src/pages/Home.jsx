import React from "react";
import { MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

import { eventConfig } from "./eventConfig";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f7faf6]">

      {/* HERO */}
      <section className="relative bg-[#f0f4f0]">
        <div className="relative py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-[0.25em] text-[#4f5f4d] mb-4">
              JAHANJI's<br />
              YOGA & MEDITATION CENTER
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed font-bold">
              Join Us For Yoga, Guided Meditation, Mindfullness & Celebration
            </p>
          </div>
        </div>

        {/* EVENT STRIP */}
        <div className="container mx-auto px-4 pb-16">
          <div className="bg-white border-4 border-[#6B7F69] rounded-2xl shadow-xl px-6 py-5 text-center max-w-5xl mx-auto">
            <p className="text-sm mb-4 font-extrabold text-[#6B7F69]">
              Upcoming Events
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
              {eventConfig.events.map((event, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-3 ${event.open ? "bg-[#f0f4f0]" : "bg-gray-200 opacity-60"}`}
                >
                  <p className="text-base md:text-lg font-extrabold text-[#6B7F69]">
                    {event.label}
                  </p>
                  <p className="text-sm font-semibold text-[#6B7F69]">
                    {event.time}
                  </p>
                  <p className={`text-xs mt-1 font-bold ${event.open ? "text-green-600" : "text-red-600"}`}>
                    {event.open ? "Registrations Open" : "Registrations Closed"}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm mt-3 font-bold text-[#6B7F69]">
              {eventConfig.capacity} Members (first come first serve basis)
            </p>
            <p className="text-sm mt-1 font-medium text-[#6B7F69]">
              Session's Language: {eventConfig.language}
            </p>

            <a
              href={eventConfig.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm text-gray-600 hover:text-[#6B7F69] transition-colors cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>{eventConfig.address}</span>
            </a>

            <div className="mt-5">
              <a
                href={eventConfig.formLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#6B7F69] hover:bg-[#5a6d58] text-white px-12 py-6 text-lg rounded-lg font-semibold">
                  Register Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CURVE */}
      <section className="relative bg-[#fafcf8]">
        <svg viewBox="0 0 1440 120" className="w-full block" preserveAspectRatio="none">
          <path
            fill="#f0f4f0"
            d="M0,64L60,74.7C120,85,240,107,360,96C480,85,600,43,720,32C840,21,960,43,1080,58.7C1200,75,1320,85,1380,90.7L1440,96L1440,0L0,0Z"
          />
        </svg>
      </section>
    </div>
  );
};

/* SERVICE CARD */
const ServiceCard = ({ icon, title, text, width = "200px", height = "200px" }) => (
  <Card
    style={{ width, height }}
    className="bg-white rounded-2xl shadow-xl flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-2xl"
  >
    <CardContent className="p-5 text-center flex flex-col justify-center h-full">
      <div className="w-8 h-8 mx-auto text-[#6B7F69]">{icon}</div>
      <h3 className="mt-2 text-sm font-semibold">{title}</h3>
      <p className="mt-1 text-xs text-gray-600 leading-relaxed">{text}</p>
    </CardContent>
  </Card>
);

export default Home;
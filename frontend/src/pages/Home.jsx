import React from "react";
import { Music, LayoutGrid, GraduationCap,Users,LocateIcon, MapPin} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import homeBg from "../assets/home-background-1.jpg"

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f7faf6]">

{/* HERO */}
      <section className="relative">
        <div className="relative h-[420px] md:h-[520px] lg:h-[560px]">
          <img
            src={homeBg}
            alt="Meditation"
            className="w-full h-full object-cover object-[10%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />

          <div className="absolute inset-0 flex flex-col items-center justify-start md:justify-center text-center px-4 pt-8 md:pt-0">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold tracking-[0.25em] text-[#4f5f4d] mb-4">
              JAHANJI's<br />
              YOGA & MEDITATION CENTER
            </h1>
            <p className="max-w-3xl text-gray-600 text-sm md:text-base leading-relaxed font-bold">
              Join Us for Yoga, Guided Meditation, Mindfullness & Celebration
              </p>
          </div>
        </div>

        {/* EVENT STRIP */}
        <div className="container mx-auto px-4 -mt-10 relative z-10 mb-16">
          <div className="bg-white border-4 border-[#6B7F69] rounded-2xl shadow-xl px-6 py-5 text-center max-w-5xl mx-auto">
            <p className="text-sm text-500 mt-1 font-extrabold text-[#6B7F69]">
              Next Event
            </p>
            <p className="text-xl md:text-2xl font-extrabold text-[#6B7F69]">
              FEB 17th 5:00 PM to 7:00 PM
            </p>
            <p className="text-sm text-500 mt-1 font-bold text-[#6B7F69]">
              35 Members (first come first serve basis)
            </p >
            <p className="text-sm text-500 mt-1 font-medium text-[#6B7F69]">
              Session's Language: English
            </p >
            <p className="mt-2 flex items-center justify-center gap-2 text-sm text-gray-500">
              {<MapPin />} Dilsuknagar, Hyderabad
            </p>
            <a 
                href="https://forms.gle/XfFMvDZT6pQKw7nM9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
            <Button className="mt-4 bg-[#6B7F69] hover:bg-[#5a6d58] text-white px-8 py-2 rounded-lg font-semibold">
              Register Now
            </Button>
            </a>
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
const ServiceCard = ({
  icon,
  title,
  text,
  width = "200px",
  height = "200px",
}) => (
  <Card
    style={{ width, height }}
    className="
      bg-white rounded-2xl shadow-xl
      flex items-center justify-center
      transition-all duration-300 ease-out
      hover:-translate-y-3 hover:shadow-2xl
    "
  >
    <CardContent className="p-5 text-center flex flex-col justify-center h-full">
      <div className="w-8 h-8 mx-auto text-[#6B7F69]">{icon}</div>
      <h3 className="mt-2 text-sm font-semibold">{title}</h3>
      <p className="mt-1 text-xs text-gray-600 leading-relaxed">{text}</p>
    </CardContent>
  </Card>
);

export default Home;
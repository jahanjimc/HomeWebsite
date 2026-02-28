import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

// ============================================================
//  📋 GOOGLE SHEET CSV URL
//  Replace the URL below with your published Google Sheet CSV link.
//  How to get it:
//    1. Open your Google Sheet
//    2. File → Share → Publish to web
//    3. Choose the sheet → publish as CSV
//    4. Copy the URL and paste it below
// ============================================================
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcYP-blT09nvxlqwtRI2VCTuVPJn8IxVGP32t0B4YegSpaIIIE0BZPgBOd_0tCsv1SzNruCRUH1BuV/pub?gid=0&single=true&output=csv";

// ============================================================
//  ⚙️  STATIC SETTINGS (change these directly here)
//  These don't change often so no need to put them in the sheet
// ============================================================
const CONFIG = {
  capacity: 35,
  language: "English",
  mapsLink: "https://maps.app.goo.gl/sW3JE1YKhsMDby9XA",
  formLink: "https://forms.gle/XfFMvDZT6pQKw7nM9",
  address: "16-1-143/2RT Saidabad Colony, Opposite Ramalayam Temple, Hyderabad 500059 TS",
};

// Strips surrounding quotes that Google Sheets adds to CSV values
const clean = (val) => val?.trim().replace(/^"|"$/g, "").trim() || "";

// Parses the raw CSV text into an array of event objects
const parseCSV = (csvText) => {
  const lines = csvText.trim().split("\n");
  const headers = lines[0].split(",").map(clean);
  return lines.slice(1).map((line) => {
    // Split by comma but respect quoted fields (e.g. "5:00 PM - 7:00 PM")
    const values = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];
    const obj = {};
    headers.forEach((h, i) => (obj[h] = clean(values[i] || "")));
    return {
      label: obj.label || "",
      time:  obj.time  || "",
      open:  obj.open?.trim().toUpperCase() === "TRUE",
    };
  });
};

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.text();
      })
      .then((text) => {
        setEvents(parseCSV(text));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

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

            {/* LOADING STATE */}
            {loading && (
              <p className="text-sm text-gray-400 py-6">Loading events...</p>
            )}

            {/* ERROR STATE */}
            {error && (
              <p className="text-sm text-red-500 py-6">
                Could not load events. Please try again later.
              </p>
            )}

            {/* EVENTS GRID */}
            {!loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                {events.map((event, index) => (
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
            )}

            <p className="text-sm mt-3 font-bold text-[#6B7F69]">
              {CONFIG.capacity} Members (first come first serve basis)
            </p>
            <p className="text-sm mt-1 font-medium text-[#6B7F69]">
              Session's Language: {CONFIG.language}
            </p>

            <a
              href={CONFIG.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm text-gray-600 hover:text-[#6B7F69] transition-colors cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>{CONFIG.address}</span>
            </a>

            <div className="mt-5">
              <a
                href={CONFIG.formLink}
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

export default Home;
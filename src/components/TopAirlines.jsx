"use client";
import React from "react";
import Image from "next/image";

const TopAirlines = () => {
  const airlines = [
    {
      id: 1,
      logo: "https://res.cloudinary.com/bytestore/image/upload/v1766379103/Turkish_Airlines_logo_fpgmdb.png",
    },
    {
      id: 2,
      logo: "https://res.cloudinary.com/bytestore/image/upload/v1766379102/American-Airlines-Logo_mtaynl.png",
    },
    {
      id: 3,
      logo: "https://res.cloudinary.com/bytestore/image/upload/v1766379103/Qatar-Airways-Logo_rz6yxx.png",
    },
    {
      id: 4,
      logo: "https://res.cloudinary.com/bytestore/image/upload/v1766379103/Qantas-Logo_foyr5j.png",
    },
    {
      id: 5,
      logo: "https://res.cloudinary.com/bytestore/image/upload/v1766379103/ABX-Air-logo_r6rqvp.png",
    },
    {
      id: 6,
      logo: "https://res.cloudinary.com/bytestore/image/upload/v1766379103/United-Airlines-Logo_ox7sr3.png",
    },
    {
      id: 7,
      logo: "https://res.cloudinary.com/bytestore/image/upload/v1766379103/Singapore-Airlines-Logo_zvbdvt.png",
    },
    {
      id: 8,
      logo: "https://res.cloudinary.com/bytestore/image/upload/v1766379102/KLM-logo_fke2qa.png",
    },
  ];

  const duplicatedAirlines = [...airlines, ...airlines];

  return (
    <section className="py-12 pt-12 bg-[#F9FAFB] overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Top <span className="text-[#FBBF24]">Airlines</span> With Us
          </h2>
        </div>

        {/* Marquee Container */}
        <div
          className="relative bg-white rounded-md  shadow-sm border border-gray-100 overflow-hidden marquee-container"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          {/* Edge Glow */}
          <div className="absolute inset-0 pointer-events-none flex justify-between z-10">
            <div className="w-40 h-full bg-blue-900/5 blur-3xl" />
            <div className="w-40 h-full bg-blue-900/5 blur-3xl" />
          </div>

          {/* Scrolling Content */}
          <div className="marquee-content flex items-center">
            {duplicatedAirlines.map((airline, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-44 md:w-56 flex items-center justify-center px-8"
              >
                <Image
                  src={airline.logo}
                  alt="Airline Logo"
                  width={140}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pure CSS Animation for guaranteed hover stop */}
      <style jsx>{`
        .marquee-content {
          width: max-content;
          animation: marquee-scroll 30s linear infinite; /* Animation speed */
        }

        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Hover korle theme jabe */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused !important;
        }

        /* Mouse sorale jekhane themeche shekhan thekei smoothly start hobe */
      `}</style>
    </section>
  );
};

export default TopAirlines;

"use client";
import React from "react";
import Image from "next/image";

const SimplifyingTravel = () => {
  const features = [
    "Exclusive Deals",
    "Personalized Support",
    "Hassle-Free Bookings",
  ];

  return (
    <section className="py-10 bg-[#F9FAFB] mt-14">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* items-start use kora hoyeche jate text container-ti top thake */}
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left Content Side - 60% Width */}
          <div className="flex-1 md:w-[60%]">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
              Simplifying Travel{" "}
              <span className="text-[#D31B27]">from the UK</span>
            </h2>

            <p className="text-gray-700 text-md mb-4 leading-relaxed">
              Whether you are flying for business, leisure, or family reunions,
              ITT Demo ensures a smooth and budget-friendly experience. Our
              focus is on providing travelers from London with unparalleled
              service, whether you are booking cheap flight tickets to Harare,
              flights to Pakistan, or exploring global destinations.
            </p>

            {/* Features List with Triangle Arrow */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  {/* Image er moto exact triangle icon */}
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent transition-transform group-hover:translate-x-1"></div>
                  <span className="text-gray-800 text-md">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image Side - 40% Width */}
          <div className="md:w-[40%] w-full">
            <div className="relative h-[400px] w-full rounded-md overflow-hidden shadow-sm">
              <Image
                src="https://res.cloudinary.com/bytestore/image/upload/v1766377655/onur-kaya-SsQjhEoTHaU-unsplash_vbwrjz.jpg"
                alt="UK Travel Destination"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifyingTravel;

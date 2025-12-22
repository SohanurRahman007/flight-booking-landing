"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      city: "Harare, Zimbabwe",
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_3_otfmrr.png",
      description:
        "Discover cheap flights to Harare and explore the vibrant culture, stunning landscapes, and rich history of Zimbabwe.",
    },
    {
      id: 2,
      city: "Lagos, Nigeria",
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_4_uwg0qh.png",
      description:
        "Book affordable flights from United Kingdom to Lagos, Abuja, and other cities in Nigeria, perfect for business or leisure travel.",
    },
    {
      id: 3,
      city: "Islamabad, Pakistan",
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1764936497/image_vgytkr.png",
      description:
        "Secure cheap flights to Islamabad and other cities in Pakistan for family visits, holidays, or business trips.",
    },
    {
      id: 4,
      city: "Manila, Philippines",
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_1_ygokbh.png",
      description:
        "Travel to the tropical paradise of Manila and other cities in Philippines with cheap flight tickets to Manila, Cebu, and other iconic locations.",
    },
    {
      id: 5,
      city: "Istanbul, Turkey",
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_6_lfb0fk.png",
      description:
        "Discover the vibrant charm of Istanbul, a city where East meets West, with affordable flight tickets to Istanbul and other enchanting destinations.",
    },
    {
      id: 6,
      city: "Johannesburg, South Africa",
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_5_gsofek.png",
      description:
        "Enjoy unbeatable deals on flights to Johannesburg and immerse yourself in South Africa's dynamic urban culture.",
    },
  ];

  return (
    <section className="mt-16 bg-white max-w-6xl mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Flight Tickets To Popular Destinations - Explore The World
        </h2>
        <p className="text-gray-700 max-w-6xl mx-auto text-sm md:text-base">
          At ITT Demo, we specialize in connecting you to some of the most
          sought-after destinations from the UK. Here are some of the popular
          locations we cater to.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((dest) => (
          <motion.div
            key={dest.id}
            whileHover="hover"
            className="relative h-[250px] w-full rounded-xl overflow-hidden group cursor-pointer shadow-lg"
          >
            {/* Background Image */}
            <Image
              src={dest.image}
              alt={dest.city}
              fill
              className="object-cover transition-transform duration-700"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />

            {/* Content Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <h3 className="text-xl font-bold mb-2">Flights to {dest.city}</h3>
              <p className="text-md opacity-90 line-clamp-3 font-medium">
                {dest.description}
              </p>
            </div>

            {/* Flipping Animation Logic (Mone korun ekhane ekti icon thakle flip hoto) */}
            <motion.div
              variants={{
                hover: { rotateY: 180 },
              }}
              transition={{ duration: 0.6 }}
              className="absolute top-4 right-4 bg-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100"
            >
              {/* Apni ekhane lucide icon dile seta flip hobe */}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;

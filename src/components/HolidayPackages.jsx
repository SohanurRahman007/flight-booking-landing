"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Button } from "./ui/button"; // Shadcn Button
import { FlightStore } from "@/store/store";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const HolidayPackages = () => {
  const packages = FlightStore.useState((s) => s.holidayPackages);

  return (
    <section className="  max-w-6xl mx-auto">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#D31B27] mb-4 tracking-tighter leading-none">
            ITT Demo UK{" "}
            <span className="text-gray-900">
              – Your Trusted Partner for Flight Deals & Holiday Packages
            </span>
          </h2>
          <p className="max-w-6xl mx-auto text-gray-600 font-medium text-sm md:text-base leading-relaxed">
            At ITT Demo UK, we make travel simple, affordable, and stress-free.
            Whether youre flying home or planning your next adventure, we
            provide exclusive flight deals, holiday packages, and ground
            transportation to destinations across Zimbabwe, Philippines, South
            Africa, <br /> Nigeria, India, Pakistan, and more.
            <br />
            With our{" "}
            <span className="text-[#D31B27] font-bold">
              Book Now – Pay Later
            </span>{" "}
            option, you can secure the best flight deals.
          </p>
        </div>

        {/* 8-Card Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 15 },
          }}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="pb-4"
        >
          {packages.map((pkg) => (
            <SwiperSlide key={pkg.id}>
              {/* Card Main Container */}
              <div className="bg-white rounded-sm overflow-hidden group border-none shadow-sm transition-all duration-300 cursor-pointer">
                <div className="relative h-[280px] w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.city}
                    fill
                    className="object-cover  transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Overlay Content */}
                  <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                    <h3 className="text-3xl font-semibold tracking-tight mb-2">
                      {pkg.city}
                    </h3>
                    <p className="text-lg font-semibold leading-tight ">
                      Famous for: {pkg.description}
                    </p>
                    <p className="text-lg font-semibold opacity-90">
                      Best for: Luxury travelers, family vacations, city
                      explorers.
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-2 flex items-end justify-between bg-white border-t border-gray-50">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <span className="text-sm font-bold text-gray-800">
                        From:
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-4xl font-extrabold text-gray-900 leading-none">
                        ৳
                      </span>
                      <span className="text-4xl font-bold text-gray-900 tracking-tighter leading-none">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  <Button className="bg-[#051C62] hover:bg-[#03154d] text-white font-semibold text-md py-4 px-4 rounded-md uppercase">
                    BOOK NOW
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HolidayPackages;

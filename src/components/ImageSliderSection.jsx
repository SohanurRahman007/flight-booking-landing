"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const ImageSlider = () => {
  const slidesData = [
    {
      url: "https://res.cloudinary.com/bytestore/image/upload/v1758142998/cld-sample-4.jpg",
      title: "UNBEATABLE DOMESTIC FARES",
      subtitle: "ONLY WITH AKIJ AIR",
      btnText: "BOOK NOW",
    },
    {
      url: "https://res.cloudinary.com/bytestore/image/upload/v1764936497/image_vgytkr.png",
      title: "EXCLUSIVE DEALS ON EMIRATES",
      subtitle: "ENJOY UNMATCHED RATES",
      btnText: "VIEW DEALS",
    },
    {
      url: "https://res.cloudinary.com/bytestore/image/upload/v1758142991/samples/people/bicycle.jpg",
      title: "ADVENTURE TOURS 2025",
      subtitle: "GET 20% DISCOUNT",
      btnText: "EXPLORE",
    },
    {
      url: "https://res.cloudinary.com/bytestore/image/upload/v1758142990/samples/animals/reindeer.jpg",
      title: "WILDLIFE EXPEDITIONS",
      subtitle: "EXPERIENCE THE NATURE",
      btnText: "BOOK TRIP",
    },
    {
      url: "https://res.cloudinary.com/bytestore/image/upload/v1758142924/sample.jpg",
      title: "LUXURY HOTEL BOOKING",
      subtitle: "WITH BEST AMENITIES",
      btnText: "BOOK NOW",
    },
    {
      url: "https://res.cloudinary.com/bytestore/image/upload/v1758142990/samples/landscapes/girl-urban-view.jpg",
      title: "CITY BREAK PACKAGES",
      subtitle: "DISCOVER NEW CITIES",
      btnText: "START TOUR",
    },
    {
      url: "https://res.cloudinary.com/bytestore/image/upload/v1758142991/samples/ecommerce/leather-bag-gray.jpg",
      title: "TRAVEL ACCESSORIES",
      subtitle: "GEAR UP FOR JOURNEY",
      btnText: "SHOP NOW",
    },
    {
      url: "https://res.cloudinary.com/bytestore/image/upload/v1758142995/samples/balloons.jpg",
      title: "HOLIDAY CELEBRATIONS",
      subtitle: "MAKE MEMORIES FOREVER",
      btnText: "JOIN NOW",
    },
  ];

  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative group">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            loop={true}
            className="rounded-lg"
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[230px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={slide.url}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                  {/* Overlay Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5">
                    <p className="text-white text-[10px] font-bold tracking-widest">
                      {slide.subtitle}
                    </p>
                    <h3 className="text-white text-lg font-bold mb-3">
                      {slide.title}
                    </h3>
                    <button className="bg-yellow-400 text-black text-[10px] font-bold px-3 py-1.5 rounded-sm w-fit uppercase">
                      {slide.btnText}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-blue-900 border border-gray-200 hover:bg-blue-900 hover:text-white transition-all">
            <ChevronLeft size={24} />
          </button>

          <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-blue-900 border border-gray-200 hover:bg-blue-900 hover:text-white transition-all">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-1">
            Popular Flight Routes
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            International
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              "Flights from London to Paris",
              "Flights from London to Dubai",
              "Flights from London to New-York",
              "Flights from London to Dublin",
              "Flights from London to Barcelona",
              "Flights from Edinburgh to Lisbon",
              "Flights from Manchester to Amsterdam",
              "Flights from London to Milan",
            ].map((route, i) => (
              <p
                key={i}
                className="text-gray-600 hover:underline cursor-pointer text-sm transition-colors"
              >
                {route}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;

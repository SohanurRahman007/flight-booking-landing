"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FlightStore } from "../store/store";
import { fetchAirports } from "../lib/api";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const BannerSection = () => {
  const store = FlightStore.useState((s) => s);

  useEffect(() => {
    fetchAirports().then((data) =>
      FlightStore.update((s) => {
        s.airports = data;
      })
    );
  }, []);

  const tabs = [
    "Flight",
    "Hotel",
    "Tour",
    "Visa",
    "Umrah",
    "Activities",
    "Transfer",
    "Train",
  ];

  return (
    <div className="relative w-full pb-20">
      {/* 1. HERO SLIDER */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5000 }}
        className="h-[450px] md:h-[550px]"
      >
        {[1, 2, 3].map((i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/bytestore/image/upload/v1766346726/josh-hild-epgwTpvo04U-unsplash_bwe9qy.jpg')`,
              }}
            >
              {/* Overlay for text visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

              {/* Plane Icon Animation (image_d10c7c.png type) */}
              <img
                src="https://res.cloudinary.com/bytestore/image/upload/v1766349419/arp-removebg-preview_qbr71o.png"
                className="absolute top-10 left-10 w-24 md:w-36 brightness-200 opacity-80 animate-pulse"
                alt="plane"
              />

              <div className="container mx-auto px-6 relative z-10 text-white">
                <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-tight drop-shadow-2xl">
                  FLY TO PAKISTAN
                </h1>
                <div className="mt-4 flex items-center gap-2 bg-white/20 backdrop-blur-md p-2 rounded-lg w-fit border border-white/30">
                  <span className="text-xl font-bold">
                    🏨 Enjoy 2 Nights Stay in Makkah
                  </span>
                </div>
              </div>

              {/* Badges - Right Side (image_d03a86.jpg style) */}
              <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
                <div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center border-4 border-black text-black">
                  <span className="text-[10px] font-black italic">ATOL</span>
                  <span className="text-[8px] font-bold">PROTECTED</span>
                </div>
                <div className="w-24 h-24 bg-[#0152CC] rounded-full flex flex-col items-center justify-center border-4 border-white text-white">
                  <span className="text-[8px] uppercase">Financial</span>
                  <span className="text-2xl font-black italic leading-none">
                    100%
                  </span>
                  <span className="text-[8px] uppercase tracking-tighter">
                    Protection
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 2. FLOATING SEARCH BOX (image_d11b06.jpg style) */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-30">
        <div className="bg-white rounded-2xl shadow-[0_15px_60px_rgba(0,0,0,0.15)] overflow-visible">
          {/* Tabs Menu */}
          <div className="flex items-center gap-4 px-6 pt-4 border-b overflow-x-auto whitespace-nowrap scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  FlightStore.update((s) => {
                    s.activeTab = tab;
                  })
                }
                className={`flex items-center gap-2 pb-3 text-sm font-bold transition-all ${
                  store.activeTab === tab
                    ? "text-blue-900 border-b-4 border-blue-900"
                    : "text-gray-400"
                }`}
              >
                {tab === "Flight" && "✈️"} {tab}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* Trip Selection (One Way, Round Trip) */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex bg-gray-100 p-1 rounded-full text-xs font-bold">
                {["One Way", "Round Trip", "Multi City"].map((type) => (
                  <button
                    key={type}
                    onClick={() =>
                      FlightStore.update((s) => {
                        s.tripType = type;
                      })
                    }
                    className={`px-4 py-1.5 rounded-full transition ${
                      store.tripType === type
                        ? "bg-white text-blue-900 shadow-sm"
                        : "text-gray-500"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div className="text-xs font-bold text-gray-600 flex gap-4 items-center">
                <span className="cursor-pointer">
                  👤 {store.passengerCount} ▾
                </span>
                <span className="cursor-pointer">💺 {store.cabinClass} ▾</span>
              </div>
            </div>

            {/* Main Inputs (image_db22f5.png style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border rounded-xl overflow-hidden">
              <div className="p-4 border-r border-gray-100 hover:bg-gray-50 transition">
                <p className="text-[10px] font-black text-gray-400 uppercase">
                  Leaving From
                </p>
                <Input
                  value={store.from}
                  onChange={(e) =>
                    FlightStore.update((s) => {
                      s.from = e.target.value;
                    })
                  }
                  className="border-none p-0 h-8 text-sm font-bold text-blue-900 focus-visible:ring-0 shadow-none bg-transparent"
                />
              </div>
              <div className="p-4 border-r border-gray-100 hover:bg-gray-50 transition relative">
                <p className="text-[10px] font-black text-gray-400 uppercase">
                  Going To
                </p>
                <Input
                  value={store.to}
                  onChange={(e) =>
                    FlightStore.update((s) => {
                      s.to = e.target.value;
                    })
                  }
                  className="border-none p-0 h-8 text-sm font-bold text-blue-900 focus-visible:ring-0 shadow-none bg-transparent"
                />
                <div className="absolute right-[-15px] top-1/2 -translate-y-1/2 bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center z-10 border-2 border-white shadow-md cursor-pointer">
                  ⇌
                </div>
              </div>
              <div className="p-4 hover:bg-gray-50 transition">
                <p className="text-[10px] font-black text-gray-400 uppercase">
                  Departure Date
                </p>
                <Input
                  type="text"
                  value={store.departureDate}
                  readOnly
                  className="border-none p-0 h-8 text-sm font-bold text-blue-900 focus-visible:ring-0 shadow-none bg-transparent"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-12 py-6 rounded-lg text-lg font-black uppercase italic tracking-widest shadow-xl transition-all active:scale-95">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

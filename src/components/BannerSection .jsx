"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FlightStore } from "../store/store";
import { fetchAirports } from "../lib/api"; // Apnar fetch function
import { Button } from "./ui/button";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const BannerSection = () => {
  const store = FlightStore.useState((s) => s);

  // States for dropdown and search
  const [activeDropdown, setActiveDropdown] = useState(null); // 'from' or 'to'
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  // Load dynamic data from API
  useEffect(() => {
    fetchAirports().then((data) =>
      FlightStore.update((s) => {
        s.airports = data;
      })
    );

    // Dropdown close logic (Click outside)
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter airports based on search query or show all if empty
  const filteredAirports = store.airports
    .filter((airport) =>
      airport.search_contents.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 10);

  const handleSelect = (airport, type) => {
    FlightStore.update((s) => {
      s[type] = `${airport.code} - ${airport.city_name}`;
    });
    setActiveDropdown(null);
    setSearchTerm("");
  };

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
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
              <div className="container mx-auto px-6 relative z-10 text-white">
                <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-tight uppercase">
                  FLY TO WORLD
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 2. FLOATING SEARCH BOX */}
      <div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-30"
        ref={dropdownRef}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100">
          {/* Tabs */}
          <div className="flex items-center gap-4 px-6 pt-4 border-b">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() =>
                  FlightStore.update((s) => {
                    s.activeTab = tab;
                  })
                }
                className={`pb-3 text-sm font-bold transition-all ${
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border rounded-xl relative">
              {/* --- LEAVING FROM --- */}
              <div
                className="p-4 border-r border-gray-100 hover:bg-gray-50 cursor-pointer relative"
                onClick={() => {
                  setActiveDropdown("from");
                  setSearchTerm("");
                }}
              >
                <p className="text-[10px] font-black text-gray-400 uppercase">
                  Leaving From
                </p>
                <h3 className="text-sm font-bold text-blue-900 truncate">
                  {store.from || "LHR - London Heathrow Airport"}
                </h3>

                {activeDropdown === "from" && (
                  <div
                    className="absolute left-0 top-0 w-80 bg-white shadow-2xl z-[100] border rounded-lg overflow-hidden animate-in fade-in zoom-in duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-3 border-b bg-gray-50 flex items-center gap-2">
                      <span className="text-gray-400">🔍</span>
                      <input
                        autoFocus
                        placeholder="Airport code, city, name or country"
                        className="w-full text-sm bg-transparent outline-none py-1"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {filteredAirports.map((airport, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleSelect(airport, "from")}
                          className="p-3 hover:bg-blue-50 border-b last:border-none flex items-center justify-between transition cursor-pointer"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-gray-400 mt-1">✈️</span>
                            <div>
                              <p className="text-sm font-bold text-gray-800">
                                {airport.city_name} - {airport.country_name}
                              </p>
                              <p className="text-[10px] text-gray-500 uppercase">
                                {airport.airport_name}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-black text-gray-400 uppercase">
                            {airport.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* --- GOING TO --- */}
              <div
                className="p-4 border-r border-gray-100 hover:bg-gray-50 cursor-pointer relative"
                onClick={() => {
                  setActiveDropdown("to");
                  setSearchTerm("");
                }}
              >
                <p className="text-[10px] font-black text-gray-400 uppercase">
                  Going To
                </p>
                <h3 className="text-sm font-bold text-blue-900 truncate">
                  {store.to || "KHI - Karachi Airport"}
                </h3>

                {activeDropdown === "to" && (
                  <div
                    className="absolute left-0 top-0 w-80 bg-white shadow-2xl z-[100] border rounded-lg overflow-hidden animate-in fade-in zoom-in duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-3 border-b bg-gray-50 flex items-center gap-2">
                      <span className="text-gray-400">🔍</span>
                      <input
                        autoFocus
                        placeholder="Search destination..."
                        className="w-full text-sm bg-transparent outline-none py-1"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {filteredAirports.map((airport, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleSelect(airport, "to")}
                          className="p-3 hover:bg-blue-50 border-b last:border-none flex items-center justify-between transition cursor-pointer"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-gray-400 mt-1">✈️</span>
                            <div>
                              <p className="text-sm font-bold text-gray-800">
                                {airport.city_name} - {airport.country_name}
                              </p>
                              <p className="text-[10px] text-gray-500 uppercase">
                                {airport.airport_name}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-black text-gray-400 uppercase">
                            {airport.code}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* --- DEPARTURE DATE --- */}
              <div className="p-4 hover:bg-gray-50 transition">
                <p className="text-[10px] font-black text-gray-400 uppercase">
                  Departure Date
                </p>
                <input
                  type="date"
                  className="w-full text-sm font-bold text-blue-900 outline-none bg-transparent cursor-pointer"
                  onChange={(e) =>
                    FlightStore.update((s) => {
                      s.departureDate = e.target.value;
                    })
                  }
                />
              </div>
            </div>

            {/* SEARCH BUTTON */}
            <div className="absolute bottom-[-25px] left-1/2 -translate-x-1/2">
              <Button
                onClick={() => {
                  if (!store.from || !store.to || !store.departureDate) {
                    alert("Please select Departure, Destination and Date");
                    return;
                  }
                  // Airport code extract kora (Ex: "LHR - London" theke "LHR")
                  const fromCode = store.from.split(" - ")[0];
                  const toCode = store.to.split(" - ")[0];

                  // Search Result page-e redirect kora query string shoho
                  window.location.href = `/search?from=${fromCode}&to=${toCode}&date=${store.departureDate}`;
                }}
                className="bg-blue-900 hover:bg-blue-800 text-white px-12 py-6 rounded-lg text-lg font-black uppercase italic tracking-widest shadow-xl transition-all active:scale-95"
              >
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

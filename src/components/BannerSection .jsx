"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FlightStore } from "../store/store";
import { fetchAirports } from "../lib/api";
import { Button } from "./ui/button";
import {
  Plane,
  Hotel,
  Map,
  CreditCard,
  User,
  Settings,
  Car,
  TrainFront,
  ArrowLeftRight,
  Search,
  MapPin,
  ChevronDown,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSection = () => {
  const router = useRouter();
  const store = FlightStore.useState((s) => s);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'from' or 'to'
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const loadAirports = async () => {
      const data = await fetchAirports();
      FlightStore.update((s) => {
        s.airports = data;
      });
    };
    loadAirports();

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (airport, type) => {
    FlightStore.update((s) => {
      s[type] = `${airport.code} - ${airport.city_name}`;
    });
    setActiveDropdown(null);
    setSearchTerm("");
  };

  const sliders = [
    {
      title: "Fly to Pakistan",
      subtitle: "Stopover in Saudi Arabia",
      offer: "Enjoy 2 Nights Stay In Makkah",
      img: "https://res.cloudinary.com/bytestore/image/upload/v1766346726/josh-hild-epgwTpvo04U-unsplash_bwe9qy.jpg",
    },
    {
      title: "Explore the World",
      subtitle: "Unbeatable Flight Deals",
      offer: "Exclusive Discounts on Visa Processing",
      img: "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_3_otfmrr.png",
    },
    {
      title: "Book Now Pay Later",
      subtitle: "Flexible Payment Plans",
      offer: "Stress-free booking starts today!",
      img: "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_6_lfb0fk.png",
    },
  ];

  const tabs = [
    { name: "Flight", icon: <Plane size={20} /> },
    { name: "Hotel", icon: <Hotel size={20} /> },
    { name: "Tour", icon: <Map size={20} /> },
    { name: "Visa", icon: <CreditCard size={20} /> },
    { name: "Umrah", icon: <User size={20} /> },
    { name: "Activities", icon: <Settings size={20} /> },
    { name: "Transfer", icon: <Car size={20} /> },
    { name: "Train", icon: <TrainFront size={20} /> },
  ];

  return (
    <div className="relative w-full">
      {/* 1. HERO SLIDER */}
      <div className="relative h-[500px] md:h-[600px] w-full group overflow-hidden">
        <div className="absolute top-8 left-0 right-0 z-20 px-10 flex justify-between items-center w-full">
          <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20">
            <img
              src="https://res.cloudinary.com/bytestore/image/upload/v1766349419/arp-removebg-preview_qbr71o.png"
              alt="ATOL Protected"
              className="h-14 md:h-16 w-auto object-contain brightness-0 invert"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-white flex flex-col items-center justify-center text-white text-center shadow-2xl">
              <span className="text-[8px] md:text-[10px] font-bold leading-none uppercase">
                Financial
              </span>
              <span className="text-base md:text-xl font-black leading-none">
                100%
              </span>
              <span className="text-[7px] md:text-[9px] font-medium leading-none">
                Protection
              </span>
            </div>
            <div className="bg-white h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-blue-600 flex flex-col items-center justify-center text-blue-900 text-center shadow-2xl">
              <span className="text-[10px] font-black uppercase leading-tight">
                ATOL
                <br />
                PROTECTED
              </span>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop
          autoplay={{ delay: 6000 }}
          speed={1000}
          className="h-full w-full"
        >
          {sliders.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.img}')` }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="container mx-auto h-full px-6 flex flex-col justify-center relative z-10 mb-20">
                  <h1 className="text-white text-4xl md:text-6xl font-black uppercase leading-[1.1] drop-shadow-2xl">
                    {slide.title} <br />{" "}
                    <span className="text-blue-400">{slide.subtitle}</span>
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. FLOATING SEARCH SECTION */}
      <div
        className="container mx-auto px-4 relative z-40 -mt-28 md:-mt-36 flex flex-col items-center"
        ref={dropdownRef}
      >
        {/* TABS */}
        <div className="w-full max-w-4xl flex justify-start">
          <div className="flex items-center bg-white rounded-t-2xl shadow-lg overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() =>
                  FlightStore.update((s) => {
                    s.activeTab = tab.name;
                  })
                }
                className={`flex items-center  px-6 py-5 text-sm font-bold transition-all border-b-4 whitespace-nowrap ${
                  store.activeTab === tab.name
                    ? "text-blue-900 border-blue-900 bg-gray-50"
                    : "text-gray-500 border-transparent hover:bg-gray-50"
                }`}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN SEARCH BOX - Width increased and all corners rounded */}
        <div className="w-full max-w-5xl bg-white p-6 md:p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 relative">
          {/* Top Options Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button className="flex items-center gap-2 bg-blue-50 text-blue-900 px-5 py-2.5 rounded-full text-xs font-black border border-blue-100">
              <div className="bg-blue-900 text-white rounded-full p-0.5">
                <Plane size={10} className="rotate-45" />
              </div>{" "}
              One Way
            </button>
            <button className="flex items-center gap-2 text-gray-500 px-4 py-2 text-xs font-bold hover:text-blue-900 transition-all">
              <ArrowLeftRight size={14} /> Round Trip
            </button>

            <div className="hidden lg:flex items-center gap-6 ml-auto">
              <div className="flex items-center gap-1 text-xs font-bold text-gray-600 cursor-pointer border p-2 rounded-lg">
                Preferred Carrier <ChevronDown size={14} />
              </div>
              <div className="flex items-center gap-6 border-l pl-6 border-gray-200">
                <span className="text-xs font-bold text-gray-600 flex items-center gap-1">
                  <Plane size={14} /> Any Flight
                </span>
                <span className="text-xs font-bold text-gray-600 flex items-center gap-1">
                  <User size={14} /> 1 Passenger
                </span>
                <span className="text-xs font-bold text-gray-600 flex items-center gap-1">
                  <Settings size={14} /> Economy
                </span>
              </div>
            </div>
          </div>

          {/* Search Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 relative">
            {/* LEAVING FROM */}
            <div className="md:col-span-4 relative">
              <div
                onClick={() => {
                  setActiveDropdown("from");
                  setSearchTerm("");
                }}
                className={`p-5 border-2 rounded-2xl cursor-pointer transition-all ${
                  activeDropdown === "from"
                    ? "border-blue-500 bg-blue-50/20"
                    : "border-gray-100 hover:border-blue-200"
                }`}
              >
                <p className="text-[11px] font-black text-gray-400 uppercase mb-1">
                  Leaving From
                </p>
                <h3 className="text-[15px] font-extrabold text-gray-800 truncate">
                  {store.from || "Select Departure"}
                </h3>
              </div>

              {activeDropdown === "from" && (
                <div className="absolute left-0 top-full mt-2 w-full md:w-[450px] bg-white shadow-2xl z-[100] border border-gray-200 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <div className="p-4 bg-gray-50 border-b flex items-center gap-3">
                    <Search size={18} className="text-blue-900" />
                    <input
                      autoFocus
                      placeholder="Search city or airport..."
                      className="w-full bg-transparent outline-none text-sm font-bold text-gray-800"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {store.airports
                      .filter((a) =>
                        a.search_contents
                          ?.toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .slice(0, 10)
                      .map((airport, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleSelect(airport, "from")}
                          className="p-4 hover:bg-blue-50 border-b border-gray-50 flex items-center justify-between cursor-pointer group"
                        >
                          <div className="flex items-center gap-3">
                            <MapPin
                              size={18}
                              className="text-gray-400 group-hover:text-blue-900"
                            />
                            <div>
                              <p className="text-sm font-bold text-gray-800 leading-none">
                                {airport.city_name}
                              </p>
                              <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase">
                                {airport.airport_name}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-black text-blue-900 bg-blue-100 px-2 py-1 rounded">
                            {airport.code}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* GOING TO */}
            <div className="md:col-span-4 relative">
              <div
                onClick={() => {
                  setActiveDropdown("to");
                  setSearchTerm("");
                }}
                className={`p-5 border-2 rounded-2xl cursor-pointer transition-all ${
                  activeDropdown === "to"
                    ? "border-blue-500 bg-blue-50/20"
                    : "border-gray-100 hover:border-blue-200"
                }`}
              >
                <p className="text-[11px] font-black text-gray-400 uppercase mb-1">
                  Going To
                </p>
                <h3 className="text-[15px] font-extrabold text-gray-800 truncate">
                  {store.to || "Select Destination"}
                </h3>
              </div>

              {activeDropdown === "to" && (
                <div className="absolute left-0 top-full mt-2 w-full md:w-[450px] bg-white shadow-2xl z-[100] border border-gray-200 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <div className="p-4 bg-gray-50 border-b flex items-center gap-3">
                    <Search size={18} className="text-blue-900" />
                    <input
                      autoFocus
                      placeholder="Search city or airport..."
                      className="w-full bg-transparent outline-none text-sm font-bold text-gray-800"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {store.airports
                      .filter((a) =>
                        a.search_contents
                          ?.toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .slice(0, 10)
                      .map((airport, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleSelect(airport, "to")}
                          className="p-4 hover:bg-blue-50 border-b border-gray-50 flex items-center justify-between cursor-pointer group"
                        >
                          <div className="flex items-center gap-3">
                            <MapPin
                              size={18}
                              className="text-gray-400 group-hover:text-blue-900"
                            />
                            <div>
                              <p className="text-sm font-bold text-gray-800 leading-none">
                                {airport.city_name}
                              </p>
                              <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase">
                                {airport.airport_name}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-black text-blue-900 bg-blue-100 px-2 py-1 rounded">
                            {airport.code}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* DEPARTURE DATE */}
            <div className="md:col-span-4 p-5 border-2 border-gray-100 rounded-2xl hover:border-blue-200 transition-all cursor-pointer relative">
              <p className="text-[11px] font-black text-gray-400 uppercase mb-1">
                Departure Date
              </p>
              <input
                type="date"
                className="w-full text-[15px] font-extrabold text-gray-800 bg-transparent outline-none cursor-pointer"
                value={store.departureDate || ""}
                onChange={(e) =>
                  FlightStore.update((s) => {
                    s.departureDate = e.target.value;
                  })
                }
              />
            </div>

            {/* Center Switch Icon */}
            <div className="absolute left-[32%] top-1/2 -translate-y-1/2 z-30 bg-blue-900 text-white p-2.5 rounded-full border-4 border-white shadow-md hidden md:block">
              <ArrowLeftRight size={16} />
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">
            <Button
              onClick={() =>
                router.push(`/search?from=${store.from}&to=${store.to}`)
              }
              className="bg-blue-900 hover:bg-blue-800 text-white px-12 py-6 rounded-xl text-lg font-black  tracking-widest shadow-xl transition-all hover:scale-105"
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="h-36" />
    </div>
  );
};

export default BannerSection;

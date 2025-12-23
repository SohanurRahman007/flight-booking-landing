"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Clock, Phone, ChevronDown, Menu } from "lucide-react";

const SearchResultPage = () => {
  const searchParams = useSearchParams();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  // Real-time Timer State (274 seconds = 04:34 minutes match image)
  const [secondsLeft, setSecondsLeft] = useState(274);

  const from = searchParams.get("from") || "SPD";
  const to = searchParams.get("to") || "DAC";
  const date = searchParams.get("date") || "December 30, 2025";

  // 1. Countdown Timer Logic
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // 2. Fetch Data Logic
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch(
          "https://serviceapi.b2b.innovatedemo.com/tools/airlines-data",
          {
            headers: {
              apikey: "S2422476141575634428",
              secretecode: "y2WUIjSSe8xkQaGq3RkOQf53ZP9nbcu3dnf",
            },
          }
        );
        const result = await response.json();
        if (result.data) {
          setFlights(Object.values(result.data).slice(0, 10));
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching flights:", error);
        setLoading(false);
      }
    };
    fetchFlights();
  }, []);

  if (loading)
    return (
      <div className="p-20 text-center font-bold text-blue-900 animate-pulse">
        Searching Best Flights...
      </div>
    );

  return (
    <div className="bg-[#f4f7fa] min-h-screen font-sans">
      {/* Top Search Bar (Responsive) */}
      <div className="bg-white border-b p-3 md:p-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col md:flex-row border rounded-md divide-y md:divide-y-0 md:divide-x overflow-hidden w-full md:w-auto">
            <div className="px-4 py-2 bg-gray-50 text-[10px] md:text-xs font-semibold text-gray-400 italic leading-tight">
              LEAVING FROM <br />
              <span className="text-[#00205b] not-italic font-bold text-xs md:text-sm">
                {from} - Saidpur Airport
              </span>
            </div>
            <div className="px-4 py-2 bg-gray-50 text-[10px] md:text-xs font-semibold text-gray-400 italic leading-tight">
              GOING TO <br />
              <span className="text-[#00205b] not-italic font-bold text-xs md:text-sm">
                {to} - Hazrat Shahjalal Airport
              </span>
            </div>
            <div className="px-4 py-2 bg-gray-50 text-[10px] md:text-xs font-semibold text-gray-400 italic leading-tight">
              DEPARTURE DATE <br />
              <span className="text-[#00205b] not-italic font-bold text-xs md:text-sm">
                {date}
              </span>
            </div>
          </div>
          <Button className="bg-[#00205b] text-white px-10 h-10 md:h-12 font-bold uppercase tracking-widest text-xs w-full md:w-auto">
            Search
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 md:px-4 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar (Filters) - Responsive Hidden on small, but we'll stack it */}
        <div className="col-span-1 md:col-span-3 space-y-4 order-2 md:order-1">
          <div className="bg-[#00205b] text-white p-4 rounded-t-lg flex items-center justify-between border-b border-blue-800">
            <span className="text-[10px] font-bold uppercase flex items-center gap-2 tracking-wider">
              <Clock size={14} /> Time Remaining
            </span>
            <span className="text-xl font-mono font-bold">
              {formatTime(secondsLeft)}
            </span>
          </div>
          <div className="bg-[#00205b] p-4 text-white text-center rounded-b-lg shadow-md">
            <p className="text-[10px] font-bold mb-2 uppercase opacity-70 tracking-tighter">
              Contact Us for Details
            </p>
            <div className="flex items-center justify-center gap-2 text-sm font-bold">
              <Phone size={16} className="text-blue-300" /> 020 3818 1875
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border shadow-sm hidden md:block">
            <h4 className="text-[10px] font-black text-gray-400 mb-6 uppercase border-b pb-2 tracking-widest">
              Filters
            </h4>
            <div className="mb-6">
              <p className="text-[11px] font-bold text-gray-600 mb-2 uppercase italic">
                Price Range
              </p>
              <input
                type="range"
                className="w-full h-1.5 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-[#00205b]"
              />
              <div className="flex justify-between text-[10px] font-bold mt-2 text-gray-400">
                <span>4799</span>
                <span>340362</span>
              </div>
            </div>
          </div>
        </div>

        {/* Flight Results */}
        <div className="col-span-1 md:col-span-9 space-y-4 order-1 md:order-2">
          {/* Top Tabs (Responsive Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-3 bg-white border rounded-lg overflow-hidden text-center h-16 shadow-sm">
            <div className="border-r flex flex-col justify-center bg-blue-50 border-b-2 border-b-[#00205b]">
              <span className="text-[11px] font-black text-[#00205b] uppercase">
                Cheapest
              </span>
              <span className="text-[9px] text-gray-400 font-bold italic">
                From ৳ 4799 • 00h 55m
              </span>
            </div>
            <div className="border-r flex flex-col justify-center hover:bg-gray-50 cursor-pointer group">
              <span className="text-[11px] font-black text-gray-500 uppercase group-hover:text-[#00205b]">
                Fastest
              </span>
              <span className="text-[9px] text-gray-400 font-bold italic">
                From ৳ 83512 • 00h 55m
              </span>
            </div>
            <div className="hidden md:flex flex-col justify-center text-[11px] font-black text-gray-400 uppercase tracking-tighter">
              {flights.length} Flights found
            </div>
          </div>

          {/* Flight Card List */}
          {flights.map((flight, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all border-gray-100"
            >
              <div className="p-4 md:p-6 flex flex-col md:grid md:grid-cols-12 items-center gap-6">
                {/* 1. Airline Info */}
                <div className="md:col-span-3 flex items-center gap-3 w-full md:w-auto">
                  <div className="w-14 h-14 bg-white border rounded-lg p-2 flex items-center justify-center shadow-sm">
                    <img
                      src="https://logowik.com/content/uploads/images/emirates-airline-new6363.logowik.com.webp"
                      alt="Airline"
                      className="w-full grayscale opacity-80"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-gray-600 uppercase tracking-tighter">
                      {flight.airline_name}
                    </h3>
                    <div className="inline-block border-2 border-dashed border-[#00205b] px-2 py-0.5 mt-1 rounded">
                      <span className="text-[9px] font-black text-[#00205b] uppercase italic">
                        ECONOMY
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2. Route & Time */}
                <div className="md:col-span-6 flex items-center justify-between w-full px-2 md:px-6">
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-black text-[#00205b]">
                      11:40
                    </p>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">
                      {from}
                    </p>
                    <p className="hidden md:block text-[9px] text-gray-400 font-bold italic">
                      Saidpur Airport
                    </p>
                  </div>

                  <div className="flex-1 px-4 md:px-8 text-center relative">
                    <p className="text-[9px] font-black text-gray-400 uppercase italic mb-1">
                      0h 55m
                    </p>
                    <div className="h-[2px] bg-gray-100 w-full relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-gray-200 bg-white"></div>
                    </div>
                    <p className="text-[9px] font-black text-gray-400 mt-1 uppercase tracking-tighter">
                      Direct Flight
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-black text-[#00205b]">
                      12:35
                    </p>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">
                      {to}
                    </p>
                    <p className="hidden md:block text-[9px] text-gray-400 font-bold italic">
                      Hazrat Shahjalal Int.
                    </p>
                  </div>
                </div>

                {/* 3. Price & Action */}
                <div className="md:col-span-3 text-right bg-gray-50/80 p-5 -my-6 border-l w-full md:w-auto h-full flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end">
                  <div className="text-left md:text-right">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest md:hidden">
                      Total Fare
                    </p>
                    <p className="text-xl md:text-2xl font-black text-[#00205b]">
                      ৳ 4799
                    </p>
                  </div>
                  <Button className="bg-[#00205b] hover:bg-black text-white font-black h-10 text-[10px] uppercase tracking-widest px-6 md:w-full transition-transform active:scale-95 shadow-md">
                    See Packages
                  </Button>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-white px-6 py-2 border-t flex justify-between items-center text-[9px] md:text-[10px] font-black text-blue-900/60 uppercase italic tracking-tighter">
                <div className="flex gap-4">
                  <button className="hover:text-[#00205b] transition-colors flex items-center gap-1">
                    Partially Refundable <ChevronDown size={10} />
                  </button>
                  <button className="hidden md:flex hover:text-[#00205b] transition-colors items-center gap-1">
                    Fare Rules <ChevronDown size={10} />
                  </button>
                </div>
                <button className="hover:text-[#00205b] flex items-center gap-1">
                  Flight Details <ChevronDown size={10} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;

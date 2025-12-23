"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Briefcase, Phone, Search, Filter } from "lucide-react";
import { FlightStore } from "@/store/store";

// Airline Logo Component
const AirlineLogo = ({ src, name }) => {
  return (
    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border shadow-sm p-1 flex-shrink-0">
      <img
        src={
          src ||
          "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Biman_Bangladesh_Airlines_Logo.svg/1200px-Biman_Bangladesh_Airlines_Logo.svg.png"
        }
        alt={name}
        className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full"
      />
    </div>
  );
};

const SearchResultPage = () => {
  const searchParams = useSearchParams();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  const fromCode = searchParams.get("from") || "Dhaka";
  const toCode = searchParams.get("to") || "Saidpur";
  const date = searchParams.get("date") || "Tue, 30 Dec 2025";

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        setLoading(true);
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
        if (result.data) setFlights(Object.values(result.data).slice(0, 10));
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFlights();
  }, []);

  if (loading)
    return (
      <div className="p-20 text-center font-bold text-[#00205b] animate-pulse">
        Loading Flights...
      </div>
    );

  return (
    <div className="bg-[#f0f4f8] min-h-screen font-sans text-[#2d3748]">
      <div className="bg-white border-b p-3 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 border rounded-md divide-y md:divide-y-0 md:divide-x bg-white">
            <div className="p-2 px-4 flex flex-col justify-center">
              <label className="text-[10px] text-gray-400 block font-bold uppercase">
                Leaving From
              </label>
              <div className="font-semibold text-sm truncate">{fromCode}</div>
            </div>
            <div className="p-2 px-4 flex flex-col justify-center">
              <label className="text-[10px] text-gray-400 block font-bold uppercase">
                Going To
              </label>
              <div className="font-semibold text-sm truncate">{toCode}</div>
            </div>
            <div className="p-2 px-4 flex flex-col justify-center">
              <label className="text-[10px] text-gray-400 block font-bold uppercase">
                Departure Date
              </label>
              <div className="font-semibold text-sm truncate">{date}</div>
            </div>
          </div>
          <Button className="bg-[#00205b] text-white px-8 h-12 font-bold flex items-center justify-center gap-2 w-full md:w-auto">
            <Search size={16} /> <span className="md:inline">Search</span>
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3 space-y-4 order-1 lg:order-1">
          <div className="bg-[#272f3d] text-white p-3 rounded-md flex items-center justify-center lg:justify-start gap-2">
            <Phone size={16} />{" "}
            <span className="text-sm font-bold">020 3818 1875</span>
          </div>

          <div className="bg-white rounded-lg border p-5 shadow-sm">
            <h3 className="font-bold text-sm mb-6 flex justify-between items-center border-b pb-2">
              <span className="flex items-center gap-2">
                <Filter size={16} /> Filters
              </span>
              <span className="text-xs text-blue-600 font-normal cursor-pointer">
                Reset
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* Price Range */}
              <div>
                <p className="text-[11px] font-bold mb-4 uppercase text-gray-500">
                  Price Range
                </p>
                <div className="px-2">
                  <div className="h-1.5 bg-gray-200 rounded-full relative">
                    <div className="absolute h-full bg-[#00205b] left-[10%] right-[20%] rounded-full"></div>
                    <div className="absolute w-4 h-4 bg-white border-2 border-[#00205b] rounded-full top-1/2 left-[10%] -translate-y-1/2 shadow"></div>
                  </div>
                  <div className="flex justify-between mt-3 text-[10px] font-bold text-gray-400">
                    <span>4,799</span>
                    <span>3,40,244</span>
                  </div>
                </div>
              </div>

              {/* Baggage */}
              <div>
                <p className="text-[11px] font-bold mb-3 uppercase text-gray-500">
                  Baggage
                </p>
                <div className="flex flex-row lg:flex-col gap-4 lg:gap-3">
                  {["No-Baggage", "20 Kg"].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 text-xs font-medium cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-[#00205b]"
                      />{" "}
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-9 space-y-4 order-2 lg:order-2">
          {/* Tabs */}
          <div className="grid grid-cols-2 bg-white border rounded-lg overflow-hidden">
            <div className="py-3 flex flex-col items-center justify-center bg-white border-b-4 border-[#00205b]">
              <span className="text-sm font-bold">Cheapest</span>
              <span className="text-[10px] text-gray-400 hidden sm:block">
                From Tk 4,799
              </span>
            </div>
            <div className="py-3 flex flex-col items-center justify-center bg-gray-50 text-gray-500">
              <span className="text-sm font-bold">Fastest</span>
              <span className="text-[10px] text-gray-400 hidden sm:block">
                From Tk 83,512
              </span>
            </div>
          </div>

          {flights.map((flight, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-lg shadow-sm overflow-hidden hover:border-blue-300 transition-all"
            >
              <div className="flex flex-col md:flex-row items-stretch">
                <div className="p-4 md:p-6 flex md:flex-col items-center gap-3 md:w-[20%] border-b md:border-b-0 md:border-r bg-gray-50/30">
                  <AirlineLogo src={flight.logo} name={flight.airline_name} />
                  <div className="text-center">
                    <div className="text-xs font-bold text-gray-600">
                      {flight.airline_code || "BG"}
                    </div>
                    <div className="text-[9px] font-bold text-blue-800 border border-blue-800 px-2 py-0.5 rounded uppercase mt-1">
                      Economy
                    </div>
                  </div>
                </div>

                {/* Route Section */}
                <div className="flex-1 p-4 md:p-6 flex flex-row items-center justify-between gap-2 md:gap-6">
                  {/* Departure */}
                  <div className="text-center flex-1">
                    <div className="text-xl md:text-2xl font-black text-[#00205b]">
                      {flight.departure_time || "12:55"}
                    </div>
                    <div className="text-[10px] text-gray-500 font-bold sm:block hidden">
                      {date}
                    </div>
                    <div className="text-xs md:text-sm font-bold text-gray-700 mt-1 uppercase">
                      {fromCode}
                    </div>
                  </div>

                  {/* Arrow/Duration */}
                  <div className="flex flex-col items-center w-20 md:w-32">
                    <span className="text-[10px] text-gray-400 font-bold mb-1">
                      55M
                    </span>
                    <div className="w-full h-[1px] bg-gray-300 relative">
                      <div className="absolute -top-1 left-0 w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                      <div className="absolute -top-1 right-0 w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    </div>
                    <span className="text-[9px] text-gray-400 font-bold mt-1 text-center leading-tight">
                      Direct Flight
                    </span>
                  </div>

                  {/* Arrival */}
                  <div className="text-center flex-1">
                    <div className="text-xl md:text-2xl font-black text-[#00205b]">
                      {flight.arrival_time || "13:50"}
                    </div>
                    <div className="text-[10px] text-gray-500 font-bold sm:block hidden">
                      {date}
                    </div>
                    <div className="text-xs md:text-sm font-bold text-gray-700 mt-1 uppercase">
                      {toCode}
                    </div>
                  </div>
                </div>

                {/* Price Section */}
                <div className="p-4 md:p-6 bg-gray-50 flex flex-row md:flex-col items-center justify-between md:justify-center md:w-[22%] border-t md:border-t-0 md:border-l gap-3">
                  <div className="text-xl md:text-2xl font-bold text-[#00205b]">
                    <span className="text-sm md:text-lg mr-1 font-sans">৳</span>
                    {Number(flight.fare || 83483).toLocaleString()}
                  </div>
                  <Button className="bg-[#00205b] text-white px-6 md:w-full rounded font-bold h-10 md:h-11 shadow-sm">
                    {flight.airline_name.includes("US-Bangla")
                      ? "Packages"
                      : "Select"}
                  </Button>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50/50 border-t px-4 md:px-6 py-2 flex justify-between items-center text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-tighter sm:tracking-normal">
                <div className="flex items-center gap-1 cursor-pointer">
                  Partially Refundable <ChevronDown size={12} />
                </div>
                <div className="flex items-center gap-1 cursor-pointer text-[#00205b]">
                  Flight Details <ChevronDown size={12} />
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default SearchResultPage;

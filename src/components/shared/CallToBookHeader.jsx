import React from "react";
import { Phone, Clock } from "lucide-react";

const CallToBookHeader = () => {
  return (
    <div className="bg-blue-900 text-white py-3 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Mobile View */}
          <div className="flex md:hidden justify-between w-full">
            {/* Left: Call Number */}
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="font-medium">0203 8181875</span>
            </div>
            {/* Right: Timing */}
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">9 AM - 6 PM</span>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex w-full justify-between items-center">
            {/* Left: Call To Book */}
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="font-medium">Call To Book | 0203 8181875</span>
            </div>

            {/* Center: Offers */}
            <div className="text-center flex-1">
              <span className="font-semibold text-md">
                Great Offers on flights and holidays
              </span>
            </div>

            {/* Right: Timing */}
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">© 7 Days a Week | 9 AM - 6 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToBookHeader;

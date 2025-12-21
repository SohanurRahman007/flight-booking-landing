import React from "react";
import { Phone, Clock } from "lucide-react";

const CallToBookHeader = () => {
  return (
    <div className=" bg-blue-900 text-white py-3 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Left: Call To Book */}
          <div className="flex items-center font-medium space-x-2">
            <Phone className="w-5 h-5" />
            <span className="font-medium">Call To Book |</span>
            <span className="">0203 8181875</span>
          </div>

          {/* Center: Offers Text */}
          <div className="text-center">
            <span className="font-semibold text-md">
              Great Offers on flights and holidays
            </span>
          </div>

          {/* Right: Timing */}
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span className="font-medium">
              <span className="">© 7 Days a Week</span> | 9 AM - 6 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToBookHeader;

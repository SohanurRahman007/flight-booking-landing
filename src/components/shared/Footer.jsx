"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Music2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#001B44] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="https://res.cloudinary.com/bytestore/image/upload/v1766343029/innovate-removebg-preview_nnfdix.png"
                alt="ITT Demo Logo"
                width={120}
                height={50}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              ITT Demo UK - Your trusted partner for unforgettable journeys!
              From flights and hotels to holiday packages and transfers, we
              offer unbeatable deals and personalized service. Connect with us
              on WhatsApp or call for exclusive offers not found online!
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Music2 size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                "Flights",
                "Hotels",
                "Tours",
                "Visa",
                "Umrah Packages",
                "Activities",
                "Transfers",
                "Trains",
                "Cruises",
                "Holidays Packages",
                "Ground Transportations",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                "Home",
                "About",
                "Contact",
                "Cookies Policy",
                "Terms & Conditions",
                "Flights to Nigeria",
                "User Agreement",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Payment & Trust */}
          <div>
            <h4 className="text-lg font-bold mb-6">Payment Methods</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {/* Payment Icons Placeholder */}
              <div className="bg-white p-1 rounded-sm w-12 h-8 flex items-center justify-center text-[8px] text-black font-bold">
                AMEX
              </div>
              <div className="bg-white p-1 rounded-sm w-12 h-8 flex items-center justify-center text-[8px] text-red-600 font-bold">
                MASTER
              </div>
              <div className="bg-white p-1 rounded-sm w-12 h-8 flex items-center justify-center text-[8px] text-blue-600 font-bold">
                VISA
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 grayscale brightness-200">
                {/* ATOL & Protection Placeholders */}
                <div className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center text-[8px]">
                  ATOL
                </div>
                <div className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center text-[8px]">
                  100%
                </div>
                <div className="text-[10px] leading-tight">
                  travel
                  <br />
                  aware
                </div>
              </div>
              <div className="flex items-center gap-2 text-white font-bold">
                <span>★</span> Trustpilot
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-semibold text-md text-gray-200">
          <p>Copyright © 2025 ITT Demo . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

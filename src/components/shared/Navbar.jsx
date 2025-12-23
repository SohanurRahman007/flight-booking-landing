"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, ChevronDown, Menu, X, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("BDT");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll hole shadow add korar jonno ekti effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currencies = ["BDT", "USD", "EUR", "GBP", "INR", "AED", "SAR"];

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "FLIGHTS", href: "/flights" },
    { name: "HOTELS", href: "/hotels" },
    { name: "TOURS", href: "/tours" },
    { name: "VISA", href: "/visa" },
    { name: "UMRAH", href: "/umrah" },
    { name: "BLOGS", href: "/blogs" },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    // Sticky classes added here: sticky, top-0, z-50
    <nav
      className={`sticky top-0 z-[100] w-full bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        {/* Main Header - All Devices */}
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo - Always Visible */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://res.cloudinary.com/bytestore/image/upload/v1766343029/innovate-removebg-preview_nnfdix.png"
              alt="Innovate Solution Logo"
              width={140}
              height={45}
              className="max-h-12 md:max-h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation (768px and above) */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 font-bold hover:text-blue-600 transition-colors text-[13px] lg:text-[14px] whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Desktop Only */}
          <div className="hidden md:flex gap-4 items-center">
            {/* Currency Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-gray-700 font-bold hover:text-blue-600 transition-colors focus:outline-none text-sm">
                  <span>{selectedCurrency}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="end">
                <DropdownMenuLabel>Currency</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {currencies.map((currency) => (
                  <DropdownMenuItem
                    key={currency}
                    onClick={() => setSelectedCurrency(currency)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span>{currency}</span>
                    {selectedCurrency === currency && (
                      <Check className="w-4 h-4 text-blue-600" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login/Register Button */}
            <div className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-all shadow-sm">
              <User className="w-4 h-4" />
              <div className="flex items-center font-bold text-[13px]">
                <Link
                  href="/login"
                  className="hover:text-blue-200 transition-colors"
                >
                  Sign in
                </Link>
                <span className="mx-1">/</span>
                <Link
                  href="/register"
                  className="hover:text-blue-200 transition-colors"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Right Side */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 p-1 bg-gray-100 rounded-md"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white border-t shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-5">
            <div className="py-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-6 py-4 text-gray-700 font-bold hover:text-blue-600 hover:bg-gray-50 border-b border-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between border p-3 rounded-lg">
                  <span className="font-bold text-gray-500">Currency</span>
                  <span className="font-black text-blue-900">
                    {selectedCurrency}
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2 bg-blue-900 text-white px-4 py-4 rounded-xl shadow-lg">
                  <User className="w-5 h-5" />
                  <div className="flex items-center font-black text-sm uppercase tracking-wide">
                    <Link
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign in
                    </Link>
                    <span className="mx-3 text-blue-400">|</span>
                    <Link
                      href="/register"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import React, { useState } from "react";
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
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto">
        {/* Main Header - All Devices */}
        <div className="flex items-center justify-between py-4">
          {/* Logo - Always Visible */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://res.cloudinary.com/bytestore/image/upload/v1766343029/innovate-removebg-preview_nnfdix.png"
              alt="Innovate Solution Logo"
              width={150}
              height={50}
              className="max-h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation (768px and above) */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors text-md"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Desktop Only (768px and above) */}
          <div className="hidden md:flex  gap-2 items-center">
            {/* Currency Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-gray-700 font-medium hover:text-blue-600 transition-colors focus:outline-none text-md lg:text-base">
                  <span>{selectedCurrency}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="end">
                <DropdownMenuLabel> Currency</DropdownMenuLabel>
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
            <div className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-md">
              <User className="w-4 h-4" />
              <div className="flex items-center font-medium text-sm">
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

          {/* Mobile Right Side (Below 768px) */}
          <div className="flex md:hidden items-center space-x-4">
            {/* Mobile Currency Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-gray-700 font-medium hover:text-blue-600 transition-colors focus:outline-none text-sm">
                  <span>{selectedCurrency}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="end">
                <DropdownMenuLabel>Select Currency</DropdownMenuLabel>
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

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 p-1"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (Below 768px) */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="py-3">
              {/* Navigation Items */}
              <div className="space-y-0">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Login Button */}
              <div className="mt-3 px-4">
                <div className="flex items-center justify-center space-x-2 bg-blue-900 text-white px-4 py-3 rounded-md">
                  <User className="w-5 h-5" />
                  <div className="flex items-center font-medium text-sm">
                    <Link
                      href="/login"
                      className="hover:text-blue-200 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign in
                    </Link>
                    <span className="mx-2">/</span>
                    <Link
                      href="/register"
                      className="hover:text-blue-200 transition-colors"
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

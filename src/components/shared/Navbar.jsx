"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  ChevronDown,
  Menu,
  Home,
  Plane,
  Hotel,
  Map,
  FileText,
  BookOpen,
  Info,
  Phone,
  Check,
} from "lucide-react";
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

  const currencies = [
    { code: "BDT" },
    { code: "USD" },
    { code: "EUR" },
    { code: "GBP" },
    { code: "INR" },
    { code: "AED" },
    { code: "SAR" },
  ];

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "FLIGHTS", href: "/flights" },
    { name: "HOTELS", href: "/hotels" },
    { name: "TOURS", href: "/tours" },
    { name: "VISA", href: "/visa" },
    { name: "UMRAH", href: "/umrah" },
    { name: "BLOGS", href: "/blogs" },
    { name: "ABOUT US", href: "/about" },
    {
      name: "CONTACT US",
      href: "/contact",
    },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4">
          {/* Left Side: Logo + Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="https://res.cloudinary.com/bytestore/image/upload/v1766343029/innovate-removebg-preview_nnfdix.png"
                alt="Innovate Solution Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700">
              <Menu className="w-6 h-6" />
            </button>

            {/* Desktop Navigation - Right of Logo */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors flex items-center space-x-1"
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span className="text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            {/* Currency Dropdown using ShadCN */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-gray-700 font-medium hover:text-blue-600 transition-colors focus:outline-none">
                  <span>{selectedCurrency}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Select Currency</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {currencies.map((currency) => (
                  <DropdownMenuItem
                    key={currency.code}
                    onClick={() => setSelectedCurrency(currency.code)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{currency.symbol}</span>
                      <div>
                        <div className="font-medium">{currency.code}</div>
                        <div className="text-xs text-gray-500">
                          {currency.name}
                        </div>
                      </div>
                    </div>
                    {selectedCurrency === currency.code && (
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
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden border-t">
          <div className="grid grid-cols-3 gap-2 p-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 text-sm font-medium hover:text-blue-600 p-2 text-center rounded-lg hover:bg-gray-50 transition-colors"
              >
                {item.icon && (
                  <div className="flex justify-center mb-1">{item.icon}</div>
                )}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Bottom Bar */}
          <div className="border-t px-4 py-3 flex justify-between items-center">
            {/* Mobile Currency Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-gray-700 font-medium bg-gray-100 px-4 py-2 rounded-lg focus:outline-none">
                  <span>{selectedCurrency}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>Select Currency</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {currencies.map((currency) => (
                  <DropdownMenuItem
                    key={currency.code}
                    onClick={() => setSelectedCurrency(currency.code)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{currency.symbol}</span>
                      <div>
                        <div className="font-medium">{currency.code}</div>
                        <div className="text-xs text-gray-500">
                          {currency.name}
                        </div>
                      </div>
                    </div>
                    {selectedCurrency === currency.code && (
                      <Check className="w-4 h-4 text-blue-600" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Login Button */}
            <div className="flex items-center space-x-2 bg-blue-900 text-white px-4 py-2 rounded-md">
              <User className="w-4 h-4" />
              <Link href="/login" className="text-sm font-medium">
                Sign in/Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import React from "react";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

const LatestInsights = () => {
  const blogs = [
    {
      id: 1,
      title: "Travel Marketplace In UAE",
      description:
        "Rise of Travel Marketplaces in UAE The UAE has established itself as one of the world's most dynamic travel hubs, attracting millions of...",
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1758142998/cld-sample-2.jpg",
      date: "9/11/2025",
      author: "Showkat",
    },
    {
      id: 2,
      title: "cumilla tour",
      description:
        "Cox's Bazar Sea Beach - A must-visit place in Bangladesh. Cox's Bazar is nestled in the southeastern part of Bangladesh....",
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1758142995/samples/balloons.jpg",
      date: "10/21/2025",
      author: "Farhad Islam",
    },
    {
      id: 3,
      title: "The Sundarbans: Nature's Shield and How We Can Keep It Clean",
      description:
        "The Sundarbans: Nature's Shield and How We Can Keep It Clean. A Living Wonder in the Bay of Bengal The Sundarbans is the...",
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1758142991/samples/ecommerce/accessories-bag.jpg",
      date: "8/10/2025",
      author: "Muhammad Ariful Islam",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated with the Latest{" "}
            <span className="text-[#D31B27]">Travel Insights</span>
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 text-md ">
            Explore the ITT Demo Blog for the freshest updates, essential travel
            news, and expert tips to make your journeys hassle-free and
            enjoyable. Stay informed, plan smarter, and travel safer with ITT
            Demo!
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="relative h-60 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Author & Date Bar */}
              <div className="bg-[#002855] text-white px-4 py-3 flex justify-between items-center text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-80 font-light">By:</span>
                  <span>{blog.author}</span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {blog.description}
                </p>

                {/* Read More Link */}
                <div className="mt-auto">
                  <button className="text-blue-900 font-bold text-sm hover:underline flex items-center gap-1 transition-all">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;

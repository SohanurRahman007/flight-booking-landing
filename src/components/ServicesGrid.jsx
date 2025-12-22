"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Hotel,
  Palmtree,
  Car,
  PhoneCall,
  MessageSquare,
} from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      title: "Flight Tickets",
      description:
        "Unlock unbeatable flight deals to top destinations worldwide. Our travel experts find exclusive fares for air tickets.",
      icon: <Plane size={32} />,
    },
    {
      title: "Hotels Booking",
      description:
        "Find your perfect stay with us! From luxury resorts to cozy budget options, we offer a wide range of hotel deals.",
      icon: <Hotel size={32} />,
    },
    {
      title: "Holidays",
      description:
        "Plan your dream holiday effortlessly. We create customized packages that include flights and accommodations.",
      icon: <Palmtree size={32} />,
    },
    {
      title: "Transportation",
      description:
        "Travel with ease using our reliable transportation services. Whether it's airport transfers or intercity rides.",
      icon: <Car size={32} />,
    },
    {
      title: "Customer Service",
      description:
        "At ITT Demo, we prioritize your needs. Reach out to us via call or WhatsApp to discuss your travel plans.",
      icon: <PhoneCall size={32} />,
    },
    {
      title: "Direct Communication",
      description:
        "Experience the convenience of direct communication. Our support allows you to connect with experts instantly.",
      icon: <MessageSquare size={32} />,
    },
  ];

  const iconVariants = {
    initial: { rotateY: 0 },
    hover: {
      rotateY: 180,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Headline and Paragraph Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Comprehensive{" "}
            <span className="text-[#D31B27]">Travel Services</span>
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600">
            At ITT Demo, we strive to provide a seamless travel experience with
            a variety of services designed to meet your needs. Whether you're
            planning a quick getaway or a long vacation, we are here to make
            your journey effortless and enjoyable.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              initial="initial"
              className="group p-8 rounded-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-md border border-transparent "
            >
              {/* Circle with Background and Icon Rotation */}
              <div className="w-16 h-16 rounded-full border-2 border-blue-900 flex items-center justify-center text-blue-900 mb-6 transition-colors duration-500 group-hover:bg-blue-900 group-hover:text-white">
                <div style={{ perspective: "1000px" }}>
                  <motion.div variants={iconVariants}>
                    {service.icon}
                  </motion.div>
                </div>
              </div>

              {/* Title with Hover Color Change */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif transition-colors duration-300 group-hover:text-blue-900">
                {service.title}
              </h3>

              <p className="text-gray-500 text-[15px] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

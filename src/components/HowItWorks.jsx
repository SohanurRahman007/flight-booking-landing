"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, Lock, Gift } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Connect with Our Experts",
      description:
        "Reach out via phone or WhatsApp. Let us know your destination, travel dates, and preferences.",
      icon: <Phone className="w-12 h-12" />,
    },
    {
      id: 2,
      title: "Book with Confidence",
      description:
        "Confirm your booking and leave the rest to us. We'll handle all the details while you focus on your journey.",
      icon: <Lock className="w-12 h-12" />,
      isFeatured: true,
    },
    {
      id: 3,
      title: "Get the Best Offers",
      description:
        "Our team will find the best flight deals that align with your budget and schedule.",
      icon: <Gift className="w-12 h-12" />,
      isFeatured: false,
    },
  ];

  const iconVariants = {
    initial: { rotateY: 0, scale: 1 },
    hover: {
      rotateY: 180,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="mt-14 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          How It <span className="text-[#D31B27]">Works?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              whileHover="hover"
              initial="initial"
              className={`relative p-4 rounded-md flex flex-col items-center text-center transition-all duration-300 shadow-xl ${
                step.isFeatured
                  ? "bg-[#D31B27] text-white"
                  : "bg-white text-gray-900 border border-gray-100"
              }`}
            >
              <div style={{ perspective: "1000px" }}>
                <motion.div
                  variants={iconVariants}
                  className={`mb-8 ${
                    step.isFeatured ? "text-white" : "text-gray-900"
                  }`}
                >
                  {step.icon}
                </motion.div>
              </div>

              <h3 className="text-xl font-bold mb-5  tracking-normal">
                {step.title}
              </h3>
              <p
                className={`text-base leading-relaxed opacity-90 font-normal ${
                  step.isFeatured ? "text-white" : "text-gray-700"
                }`}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

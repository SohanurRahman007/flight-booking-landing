"use client";
import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Unmatched Flight Deals",
      description:
        "Our travel experts specialize in securing exclusive flight offers that are unavailable online. We leverage industry partnerships to provide you with cheap flights to Harare, affordable flights to Nigeria, and more.",
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1766381126/images_dvxjtn.jpg",
    },
    {
      title: "Personalized Customer Service",
      description:
        "Forget the hassle of searching endless websites. Simply get in touch with us via phone or WhatsApp, and our dedicated team will handle everything for you—from flight bookings to answering your queries.",
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1765024865/DALL_E_2024-08-21_22.58.08_-_A_realistic_image_of_a_virtual_coaching_session_taking_place_via_video_call._The_scene_shows_a_professional_coach_on_a_laptop_screen_engaged_in_a_one_1-1_amp3pk.png",
    },
    {
      title: "Wide Range of Destinations",
      description:
        "We specialize in connecting travelers from the UK to some of the most sought-after global destinations. Whether it's Harare's vibrant culture, Nigeria's bustling cities, Pakistan's rich traditions, or the Philippines' tropical allure, we've got you covered.",
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1758142991/samples/landscapes/beach-boat.jpg",
    },
    {
      title: "Expert Knowledge",
      description:
        "Our travel experts stay informed about the latest industry trends, ensuring you always get the best deals on flights. From pricing insights to travel tips, we provide a seamless booking experience backed by expertise.",
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1766381366/images_il8crp.png",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-[#D31B27]">ITT Demo</span> for Your
            Travel Needs?
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side Features */}
          <div className="flex-1 space-y-16 z-10">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex flex-col items-end text-right">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-100 shadow-sm">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="object-cover h-full w-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Main Image Wrapper */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px]">
              {/* Main Red Circle with Blue Border */}
              <div className="absolute inset-0 border-[3px] border-blue-900 rounded-full flex items-center justify-center p-3">
                <div className="bg-[#D31B27] w-full h-full rounded-full flex items-center justify-center relative shadow-inner">
                  <div className="text-white text-center z-10 px-4">
                    <h4 className="text-5xl md:text-7xl font-serif italic mb-[-10px]">
                      Travel
                    </h4>
                    <p className="text-xl md:text-2xl font-light">the world</p>
                  </div>
                </div>
              </div>

              {/* Hot Air Balloon */}
              <div className="absolute -top-2 -left-4 z-20">
                <Image
                  src="https://res.cloudinary.com/bytestore/image/upload/v1766381787/depositphotos_35742689-stock-photo-colorful-hot-air-balloon-with-removebg-preview_rkbvbg.png"
                  alt="balloon"
                  width={160}
                  height={160}
                />
              </div>

              {/* Suitcase */}
              <div className="absolute -bottom-2 left-2 z-20">
                <Image
                  src="https://res.cloudinary.com/bytestore/image/upload/v1766382120/efe1dd0e188fd03673b94060a522188d-removebg-preview_p6mage.png"
                  alt="suitcase"
                  width={150}
                  height={150}
                />
              </div>

              {/* Top Cloud */}
              <div className="absolute top-8 -right-2 z-30 flex items-center opacity-100">
                <div className="w-12 h-10 bg-white rounded-full shadow-md blur-[0.5px]"></div>
                <div className="w-16 h-12 bg-white rounded-full -ml-8 mt-4 shadow-md blur-[0.5px]"></div>
                <div className="w-14 h-10 bg-white rounded-full -ml-6 mt-1 shadow-md blur-[0.5px]"></div>
              </div>

              {/* Bottom Cloud */}
              <div className="absolute bottom-16 -right-2 z-30 flex items-center scale-110">
                <div className="w-10 h-8 bg-white rounded-full shadow-md"></div>
                <div className="w-16 h-12 bg-white rounded-full -ml-6 mt-3 shadow-md"></div>
                <div className="w-10 h-8 bg-white rounded-full -ml-4 mt-0 shadow-md"></div>
              </div>
            </div>
          </div>

          {/* Right Side Features */}
          <div className="flex-1 space-y-16 z-10">
            {features.slice(2, 4).map((feature, index) => (
              <div key={index} className="flex flex-col items-start text-left">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-100 shadow-sm">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="object-cover h-full w-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

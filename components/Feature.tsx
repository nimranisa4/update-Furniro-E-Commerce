"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const imageData = [
  { id: 1, src: "/images/rectangle-24.png", title: "Inner Peace" },
  { id: 2, src: "/images/rectangle-25.png", title: "Modern Style" },
  { id: 3, src: "/images/rectangle-24.png", title: "Cozy Corner" },
  { id: 4, src: "/images/rectangle-25.png", title: "Serenity" },
  { id: 5, src: "/images/rectangle-24.png", title: "Cozy Corner" },
  { id: 6, src: "/images/rectangle-25.png", title: "Serenity" },
];

const InspirationSection: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    if (currentIndex < imageData.length - 2) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="relative flex flex-col gap-4 md:flex-row items-center justify-between w-full bg-[#fcf8f3] px-6 md:px-12 py-10 font-poppins">
      {/* Left Content Section */}
      <div className="w-full md:w-1/3 flex flex-col justify-center space-y-4 text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#3a3a3a] leading-tight">
          50+ Beautiful rooms <br /> inspiration
        </h2>
        <p className="text-[#616161] text-base md:text-lg leading-[150%]">
          Our designer already made a lot of beautiful prototype rooms that inspire you.
        </p>
        <button className="px-4 py-3 bg-[#b88e2f] text-white font-semibold rounded-md mx-auto md:mx-0">
          Explore More
        </button>
      </div>

      {/* Right Carousel Section */}
      <div className="relative w-full md:w-2/3 flex items-center">
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:left-[-40px] z-10 p-3 bg-[#b88e2f] text-white rounded-full hover:bg-[#916f20] transition">
            <FaArrowLeft size={20} />
          </button>
        )}

        {/* Image Slider */}
        <div className="flex gap-2 overflow-hidden p-2">
          {imageData.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <div
              key={image.id}
              className={`relative flex-shrink-0 ${
                index === 2 ? "w-[220px] md:w-[300px]" : "w-[250px] md:w-[400px]"
              } h-[300px] md:h-[450px]`}>
              <Image
                src={image.src}
                alt={image.title}
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {currentIndex < imageData.length - 2 && (
          <button
            onClick={goToNext}
            className="absolute right-0 md:right-[-40px] z-10 p-3 bg-[#b88e2f] text-white rounded-full hover:bg-[#916f20] transition">
            <FaArrowRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default InspirationSection;

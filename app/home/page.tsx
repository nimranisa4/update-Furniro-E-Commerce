import React from "react";
import Hero from "@/public/hero.png";
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[90vh] w-full"
        style={{ backgroundImage: `url(${Hero.src})` }}
      >
        {/* Content */}
        <div className="container mx-auto h-full flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8">
          <div
            className="bg-[#FFF3E3] bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-lg max-w-md text-left"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "4rem",
            }}
          >
            <span className="text-lg sm:text-xl font-medium text-gray-600">
              New Arrival
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#B88E2F] mb-4">
              Discover Our <br />
              New Collection
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <Link href="/shop">
              <button className="bg-[#B88E2F] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#B88E2F] transition">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center py-12 bg-gray-50 p-5">
  {/* Header Section */}
  <div className="mb-8">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
      Browse The Range
    </h1>
    <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>

  {/* Range Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Dining */}
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src="/img-1.png"
          alt="Dining"
          width={350}
          height={350}
          className="max-w-full h-auto transition-transform duration-300 transform hover:scale-110"
        />
      </div>
      <p className="mt-4 text-gray-700 font-semibold text-xl sm:text-2xl lg:text-3xl">
        Dining
      </p>
    </div>

    {/* Living */}
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src="/img-2.png"
          alt="Living"
          width={350}
          height={350}
          className="max-w-full h-auto transition-transform duration-300 transform hover:scale-110"
        />
      </div>
      <p className="mt-4 text-gray-700 font-semibold text-xl sm:text-2xl lg:text-3xl">
        Living
      </p>
    </div>

    {/* Bedroom */}
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src="/img-3.png"
          alt="Bedroom"
          width={350}
          height={350}
          className="max-w-full h-auto transition-transform duration-300 transform hover:scale-110"
        />
      </div>
      <p className="mt-4 text-gray-700 font-semibold text-xl sm:text-2xl lg:text-3xl">
        Bedroom
      </p>
    </div>
  </div>
</div>



    </>
  );
};
export default Home;

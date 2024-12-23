import type { NextPage } from 'next';
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from 'react-icons/fa'; // Importing the required icons

const Frame: NextPage = () => {
  return (
    <div className="py-10 px-4 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* High Quality */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <FaTrophy className="w-16 h-16 mb-4 text-yellow-500" />
          <div className="text-lg font-semibold text-gray-800">High Quality</div>
          <div className="text-sm text-gray-500">Crafted from top materials</div>
        </div>
        {/* Warranty Protection */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <FaShieldAlt className="w-16 h-16 mb-4 text-green-500" />
          <div className="text-lg font-semibold text-gray-800">Warranty Protection</div>
          <div className="text-sm text-gray-500">Over 2 years</div>
        </div>
        {/* Free Shipping */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <FaShippingFast className="w-16 h-16 mb-4 text-blue-500" />
          <div className="text-lg font-semibold text-gray-800">Free Shipping</div>
          <div className="text-sm text-gray-500">Order over 150$</div>
        </div>
        {/* 24 / 7 Support */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <FaHeadset className="w-16 h-16 mb-4 text-purple-500" />
          <div className="text-lg font-semibold text-gray-800">24/7 Support</div>
          <div className="text-sm text-gray-500">Dedicated support</div>
        </div>
      </div>
    </div>
  );
};
export default Frame;

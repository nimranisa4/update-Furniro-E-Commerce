import type { NextPage } from "next";
import Image from "next/image";
import { FaFilter, FaList, FaThLarge } from "react-icons/fa"; // Import the required icons
import ProductCard from "@/components/ProductCard";
import Frame from "@/components/Frame";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

enum BadgeType {
  DISCOUNT = "discount",
  NEW = "new",
}
const products = [
  {
    id: 1,
    image: '/product1.jpg',
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    currentPrice: '2.500.000',
    originalPrice: '3.500.000',
    badge: { type: BadgeType.DISCOUNT, label: '-30%' },
  },
  {
    id: 2,
    image: '/product2.jpg',
    name: 'Leviosa',
    description: 'Luxury sofa',
    currentPrice: '2.500.000',
    badge: { type: BadgeType.NEW, label: 'New' },
  },
  {
    id: 3,
    image: '/product3.jpg',
    name: 'Lolito',
    description: 'Luxury big sofa',
    currentPrice: '7.000.000',
    originalPrice: '14.000.000',
    badge: { type: BadgeType.DISCOUNT, label: '-50%' },
  },
  {
    id: 4,
    image: '/product4.jpg',
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    currentPrice: '500.000',
    badge: { type: BadgeType.NEW, label: 'New' },
  },
  {
    id: 5,
    image: '/product5.jpg',
    name: 'Grifo',
    description: 'Night lamp',
    currentPrice: '1.500.000',
  },
  {
    id: 6,
    image: '/product6.jpg',
    name: 'Muggo',
    description: 'Small mug',
    currentPrice: '150.000',
  },
  {
    id: 7,
    image: '/product7.png',
    name: 'Pingky',
    description: 'Cute bed set',
    currentPrice: '7.000.000',
    originalPrice: '14.000.000',
    badge: { type: BadgeType.DISCOUNT, label: '-50%' },
  },
  {
    id: 8,
    image: '/product8.png',
    name: 'Potty',
    description: 'Minimalist flower pot',
    currentPrice: '500.000',
    badge: { type: BadgeType.NEW, label: 'New' },
  },
];

const Group: NextPage = () => {
  return (
    <div className="relative w-full py-8 ">
      {/* Background Image */}
      {/* <div className="w-full h-[316px] relative">
        <Image
          className="object-cover"
          layout="fill"
          alt="Background"
          src="/images/rectangle-1.png" // Ensure the correct public folder path
        />
      </div> */}
   <div className="relative w-full h-[316px] flex items-center justify-center text-center text-4xl font-semibold text-black">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          width={1440}
          height={316}
          alt="Background"
          src="/images/rectangle-2.png"
        />
        <div className="relative">
          <Image
            className="mx-auto mb-4"
            width={77}
            height={77}
            alt="Logo"
            src="/images/Meubel House_Logos-05 (1).png"
          />
          <h1 className="text-5xl">Shop</h1>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <FiArrowRight className="text-lg" />
            <span className="font-light">Shop</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#e7cb8c] p-4 md:p-6">
        {/* Filter and View Options */}
        <div className="flex flex-wrap items-center justify-between mb-4">
          {/* Filter Section */}
          <div className="flex items-center space-x-2">
            <span className="text-sm md:text-base font-medium">Filter</span>
            <FaFilter className="w-6 h-6 text-gray-600" />
          </div>

          {/* View Options */}
          <div className="flex items-center space-x-3">
            <FaList className="w-6 h-6 cursor-pointer text-gray-600" />
            <FaThLarge className="w-7 h-7 cursor-pointer text-gray-600" />
          </div>
        </div>

        {/* Results Info */}
        <div className="flex flex-wrap items-center justify-between border-b border-gray-300 pb-2 mb-4">
          <div className="text-sm md:text-base text-gray-600">
            Showing <strong>1–16</strong> of <strong>32</strong> results
          </div>
        </div>

        {/* Combined Show and Sort By Options in One Row */}
        <div className="flex justify-between items-center space-x-6">
          {/* Show Options */}
          <div className="flex items-center space-x-2">
            <span className="text-sm md:text-base text-gray-600">Show</span>
            <div className="relative w-14 h-8 border rounded-md flex items-center justify-center bg-white">
              <span className="text-sm font-medium">16</span>
            </div>
          </div>

          {/* Sort By Options */}
          <div className="flex items-center space-x-2">
            <span className="text-sm md:text-base text-gray-600">Sort by</span>
            <div className="relative w-28 h-8 border rounded-md flex items-center justify-center bg-white">
              <span className="text-sm font-medium">Default</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice}
            badge={product.badge}
          />
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2 md:space-x-4">
        {/* First Block (Yellow) */}
        <div className="flex justify-center">
          <div className="bg-yellow-500 text-white py-2 px-4 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-600 transition">
            1
          </div>
        </div>

        {/* Second Block (Light Yellow) */}
        <div className="flex justify-center">
          <div className="bg-yellow-300 text-white py-2 px-4 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-400 transition">
            2
          </div>
        </div>

        {/* Third Block (Light Yellow) */}
        <div className="flex justify-center">
          <div className="bg-yellow-300 text-white py-2 px-4 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-400 transition">
            3
          </div>
        </div>

        {/* Next Button (Same Yellow for Consistency) */}
        <div className="flex justify-center">
          <div className="bg-yellow-300 text-white py-2 px-4 rounded-md text-lg font-semibold cursor-pointer hover:bg-yellow-400 transition">
            Next
          </div>
        </div>
      </div>
      <Frame />
    </div>
  );
};

export default Group;

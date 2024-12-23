"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiHeart, FiShare2, FiBarChart2 } from "react-icons/fi";
import Link from "next/link";
import { ProductCardProps } from "@/types/ComponentsTypes";


const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  description,
  currentPrice,
  originalPrice,
  badge,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative w-full h-64 sm:h-56 md:h-60 lg:h-72">
        <Link href={`/productdetails/${id.toString()}`}>
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover transition-transform transform group-hover:scale-110"
        />
        {badge && (
          <span
            className={`absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full ${badge.type === "discount" ? "bg-red-500" : "bg-green-500"}`}
          >
            {badge.label}
          </span>
        )}
        </Link>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
        <div className="mt-2">
          <span className="text-lg font-bold text-gray-900">Rp {currentPrice}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">Rp {originalPrice}</span>
          )}
        </div>
      </div>

      {/* Hover Actions */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center space-y-4 transition-opacity duration-200">
          <Link href={`/productdetails/${id.toString()}`}>
            <button className="px-6 py-2 bg-white text-yellow-500 font-medium rounded-full transition duration-200 hover:bg-yellow-100">
             Add to Cart
            </button>
          </Link>
          <div className="flex space-x-4 text-white">
            <button className="hover:text-gray-200 flex gap-1 transition duration-200">
              <FiShare2 size={20} />
              Share
            </button>
            <button className="hover:text-gray-200 flex gap-1 transition duration-200">
              <FiBarChart2 size={20} /> Compare
            </button>
            <button className="hover:text-gray-200 flex gap-1 transition duration-200">
              <FiHeart size={20} /> Like
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

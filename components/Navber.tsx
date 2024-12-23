"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Logo.jpg";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/app/Context/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const { getItemCount } = useCart();


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // Close menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={Logo}
              width={185}
              height={41}
              alt="Brand Logo"
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-gray-700">
          <Link href="/" className="hover:text-gray-900 text-lg font-heading font-medium transition">
            Home
          </Link>
          <Link
            href="/shop"
            className="hover:text-gray-900 text-lg font-heading font-medium transition"
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="hover:text-gray-900 text-lg font-heading font-medium transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-900 text-lg font-heading font-medium transition"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-6 text-gray-600">
          <MdPersonOutline className="text-2xl cursor-pointer hover:text-gray-800 transition" />
          <CiSearch className="text-2xl cursor-pointer hover:text-gray-800 transition" />
          <GoHeart className="text-2xl cursor-pointer hover:text-gray-800 transition" />
          {/* Shopping Cart Icon */}
          <Link href={`/cart`}
            className="text-2xl text-gray-600 hover:text-gray-800 transition"
          >
            <div className="relative">
              <FaShoppingCart size={24} />
              <span className="absolute top-[-10px] right-[-10px] bg-yellow-500 text-white text-xs rounded-full px-2 py-1">
                {getItemCount()}
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden gap-4 flex items-center">
          {/* Shopping Cart Icon */}
          <button
            className="text-2xl text-gray-600 hover:text-gray-800 transition"
          >
            <Link href={`/cart`}
              className="text-2xl text-gray-600 hover:text-gray-800 transition"
            >
              <div className="relative">
                <FaShoppingCart size={24} />
                <span className="absolute top-[-10px] right-[-10px] bg-yellow-500 text-white text-xs rounded-full px-2 py-1">
                  {getItemCount()}
                </span>
              </div>
            </Link>
          </button>
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>

      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white border-t shadow-md ${isMenuOpen ? "block" : "hidden"
          }`}
      >
        <div className="p-4 space-y-6">
          {/* Links Section for Mobile */}
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                onClick={() => toggleMenu()}
                className="block text-gray-700 hover:text-gray-900 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                onClick={() => toggleMenu()}
                className="block text-gray-700 hover:text-gray-900 transition"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => toggleMenu()}
                className="block text-gray-700 hover:text-gray-900 transition"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => toggleMenu()}
                className="block text-gray-700 hover:text-gray-900 transition"
              >
                Contact
              </Link>
            </li>
            <div className="flex space-x-8 justify-between text-gray-600">
              <MdPersonOutline onClick={() => toggleMenu()} className="text-2xl cursor-pointer hover:text-gray-800 transition" />
              <CiSearch onClick={() => toggleMenu()} className="text-2xl cursor-pointer hover:text-gray-800 transition" />
              <GoHeart onClick={() => toggleMenu()} className="text-2xl cursor-pointer hover:text-gray-800 transition" />

            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}

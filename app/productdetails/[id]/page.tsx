"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { useParams } from "next/navigation"; // Import useParams from next/navigation
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import { useCart } from "@/app/Context/CartContext";
import { Product, ProductType } from "@/types/ComponentsTypes";
import products from '../productsdetail.json'

enum BadgeType {
  DISCOUNT = "discount",
  NEW = "new",
}
const items = [
  {
    id: 1,
    image: "/product1.jpg",
    name: "Syltherine",
    description: "Stylish cafe chair",
    currentPrice: "2.500.000",
    originalPrice: "3.500.000",
    badge: { type: BadgeType.DISCOUNT, label: "-30%" },
  },
  {
    id: 2,
    image: "/product2.jpg",
    name: "Leviosa",
    description: "Luxury sofa",
    currentPrice: "2.500.000",
    badge: { type: BadgeType.NEW, label: "New" },
  },
  {
    id: 3,
    image: "/product3.jpg",
    name: "Lolito",
    description: "Luxury big sofa",
    currentPrice: "7.000.000",
    originalPrice: "14.000.000",
    badge: { type: BadgeType.DISCOUNT, label: "-50%" },
  },
  {
    id: 4,
    image: "/product4.jpg",
    name: "Respira",
    description: "Outdoor bar table and stool",
    currentPrice: "500.000",
    badge: { type: BadgeType.NEW, label: "New" },
  },
];
//   {
//     id: "1",
//     name: "Syltherine",
//     price: 2500000,
//     description:
//       "Stylish cafe chair with a modern design. Perfect for living rooms or cafes. Made with high-quality materials, this chair combines comfort with sophistication. Its ergonomic design ensures long-lasting comfort for hours of sitting, while the sleek, minimal aesthetic adds a touch of elegance to any space.",
//     images: [
//       "/product1.jpg",
//       "/product1.jpg",
//       "/product1.jpg",
//       "/product1.jpg",
//     ],
//     mainImage: "/product1.jpg",
//     sku: "5001",
//     category: "Furniture",
//     tags: ["Sofa", "Home", "Living Room"],
//     reviews: [{ name: "John Doe", rating: "★★★★★", text: "Amazing product!" }],
//     badge: { type: "DISCOUNT", label: "-30%" },
//     sizes: ["Small", "Medium", "Large"],
//     colors: ["#FF0000", "#00FF00", "#0000FF"],
//     additionalInfo: [
//       { label: "Dimensions", value: "55 x 30 x 25 cm" },
//       { label: "Weight", value: "7 lbs" },
//       { label: "Material", value: "Premium wood and metal finishes" },
//       { label: "Connectivity", value: "Bluetooth 5.0 and AUX" },
//       { label: "Battery Life", value: "Up to 8 hours" },
//     ],
//   },
//   {
//     id: "2",
//     name: "Elderwood Chair",
//     price: 150000,
//     description:
//       "An elegant chair crafted from high-quality wood. A timeless piece for any home. The rich, warm wood tones paired with a sleek, comfortable design make it an ideal addition to any room, whether in a modern or traditional home.",
//     images: [
//       "/product2.jpg",
//       "/product2.jpg",
//       "/product2.jpg",
//       "/product2.jpg",
//     ],
//     mainImage: "/product2.jpg",
//     sku: "5002",
//     category: "Furniture",
//     tags: ["Chair", "Wooden", "Living Room"],
//     reviews: [
//       {
//         name: "Jane Smith",
//         rating: "★★★★☆",
//         text: "Beautiful and sturdy chair.",
//       },
//       { name: "Sam Brown", rating: "★★★★★", text: "Love the quality!" },
//     ],
//     badge: { type: "NEW", label: "New Arrival" },
//     sizes: ["Small", "Medium", "Large"],
//     colors: ["#8B4513", "#D2691E"],
//     additionalInfo: [
//       { label: "Dimensions", value: "60 x 30 x 35 cm" },
//       { label: "Weight", value: "5 lbs" },
//       { label: "Material", value: "Solid wood" },
//       { label: "Assembly", value: "Some assembly required" },
//     ],
//   },
//   {
//     id: "3",
//     name: "Serenity Sofa",
//     price: 800000,
//     description:
//       "A comfortable and luxurious sofa with a soft fabric that adds a touch of elegance. The plush cushions and deep seating ensure maximum comfort, while the timeless design blends seamlessly with any decor.",
//     images: [
//       "/product3.jpg",
//       "/product3.jpg",
//       "/product3.jpg",
//       "/product3.jpg",
//     ],
//     mainImage: "/product3.jpg",
//     sku: "5003",
//     category: "Furniture",
//     tags: ["Sofa", "Comfort", "Living Room"],
//     reviews: [
//       {
//         name: "Alice Green",
//         rating: "★★★★★",
//         text: "Extremely comfortable and stylish!",
//       },
//       {
//         name: "Mark Lee",
//         rating: "★★★★☆",
//         text: "Great quality, but a bit firm.",
//       },
//     ],
//     badge: { type: "DISCOUNT", label: "-15%" },
//     sizes: ["Small", "Medium", "Large"],
//     colors: ["#F5F5F5", "#C0C0C0"],
//     additionalInfo: [
//       { label: "Dimensions", value: "90 x 35 x 40 cm" },
//       { label: "Weight", value: "15 kg" },
//       { label: "Material", value: "Fabric, Foam, Wood" },
//       { label: "Warranty", value: "2 years" },
//     ],
//   },
//   {
//     id: "4",
//     name: "Heritage Armchair",
//     price: 400000,
//     description:
//       "A vintage armchair with classic wooden accents. Perfect for traditional home settings. This chair is a beautiful example of craftsmanship, featuring ornate wood detailing and a comfortable seat.",
//     images: [
//       "/product4.jpg",
//       "/product4.jpg",
//       "/product4.jpg",
//       "/product4.jpg",
//     ],
//     mainImage: "/product4.jpg",
//     sku: "5004",
//     category: "Furniture",
//     tags: ["Armchair", "Vintage", "Living Room"],
//     reviews: [
//       {
//         name: "Steve Walker",
//         rating: "★★★★☆",
//         text: "Classic design, very comfortable.",
//       },
//       {
//         name: "Diana White",
//         rating: "★★★★★",
//         text: "Fits perfectly in my living room.",
//       },
//     ],
//     badge: { type: "SALE", label: "Limited Time Offer" },
//     sizes: ["Small", "Medium", "Large"],
//     colors: ["#000000", "#A52A2A"],
//     additionalInfo: [
//       { label: "Dimensions", value: "50 x 25 x 35 cm" },
//       { label: "Weight", value: "8 kg" },
//       { label: "Material", value: "Wood, Upholstered Fabric" },
//       { label: "Care Instructions", value: "Clean with a soft cloth" },
//     ],
//   },
//   {
//     id: "5",
//     name: "Luxor Bed",
//     price: 3500000,
//     description:
//       "A high-end bed made from premium materials for the ultimate sleep experience. The bed's plush, memory foam mattress contours to your body, providing optimal support throughout the night.",
//     images: [
//       "/product5.jpg",
//       "/product5.jpg",
//       "/product5.jpg",
//       "/product5.jpg",
//     ],
//     mainImage: "/product5.jpg",
//     sku: "5005",
//     category: "Furniture",
//     tags: ["Bed", "Luxury", "Bedroom"],
//     reviews: [
//       {
//         name: "Catherine King",
//         rating: "★★★★★",
//         text: "Best bed I've ever owned!",
//       },
//       {
//         name: "John Carter",
//         rating: "★★★★☆",
//         text: "Extremely comfortable but pricey.",
//       },
//     ],
//     badge: { type: "DISCOUNT", label: "-10%" },
//     sizes: ["Small", "Medium", "Large"],
//     colors: ["#8B0000", "#FF6347"],
//     additionalInfo: [
//       { label: "Dimensions", value: "180 x 200 cm" },
//       { label: "Weight", value: "35 kg" },
//       { label: "Material", value: "Memory foam, Wood" },
//       { label: "Assembly", value: "Full assembly required" },
//     ],
//   },
//   {
//     id: "6",
//     name: "Urban Coffee Table",
//     price: 450000,
//     description:
//       "A sleek and modern coffee table that adds style and functionality to any living room. Its minimalist design and clean lines create an elegant focal point in the room.",
//     images: [
//       "/product6.jpg",
//       "/product6.jpg",
//       "/product6.jpg",
//       "/product6.jpg",
//     ],
//     mainImage: "/product6.jpg",
//     sku: "5006",
//     category: "Furniture",
//     tags: ["Table", "Modern", "Living Room"],
//     reviews: [
//       {
//         name: "Oliver Harris",
//         rating: "★★★★★",
//         text: "Perfect size for my living room!",
//       },
//       {
//         name: "Sophia Wright",
//         rating: "★★★★☆",
//         text: "Looks great, but the surface scratches easily.",
//       },
//     ],
//     badge: { type: "NEW", label: "New Arrival" },
//     sizes: ["Small", "Medium", "Large"],
//     colors: ["#808080", "#C0C0C0"],
//     additionalInfo: [
//       { label: "Dimensions", value: "120 x 60 x 45 cm" },
//       { label: "Weight", value: "10 kg" },
//       { label: "Material", value: "Glass, Steel" },
//       { label: "Assembly", value: "Easy assembly" },
//     ],
//   },
//   {
//     id: "7",
//     name: "Vivid Art Canvas",
//     price: 120000,
//     description:
//       "A beautiful piece of art that brings color and life to any wall in your home. The vibrant hues and intricate details of this canvas art make it a stunning addition to any room.",
//     images: [
//       "/product7.jpg",
//       "/product7.jpg",
//       "/product7.jpg",
//       "/product7.jpg",
//     ],
//     mainImage: "/product7.jpg",
//     sku: "5007",
//     category: "Art",
//     tags: ["Wall Art", "Canvas", "Home Decor"],
//     reviews: [
//       {
//         name: "Rebecca Smith",
//         rating: "★★★★☆",
//         text: "The colors are vibrant, looks great on my wall.",
//       },
//       {
//         name: "Daniel Thompson",
//         rating: "★★★★★",
//         text: "High-quality print, very pleased.",
//       },
//     ],
//     badge: { type: "SALE", label: "30% OFF" },
//     sizes: ["Small", "Medium", "Large"],
//     colors: ["#FF4500", "#FFD700", "#32CD32"],
//     additionalInfo: [
//       { label: "Dimensions", value: "50 x 70 cm" },
//       { label: "Material", value: "Canvas, Ink" },
//       { label: "Care Instructions", value: "Wipe with a dry cloth" },
//     ],
//   },
//   {
//     id: "8",
//     name: "Mountain View Rug",
//     price: 250000,
//     description:
//       "A premium quality rug that adds a luxurious touch to any room with its soft texture. The rug's plush fibers provide comfort underfoot, while the intricate design and neutral tones ensure it complements any interior style.",
//     images: [
//       "/product8.jpg",
//       "/product8.jpg",
//       "/product8.jpg",
//       "/product8.jpg",
//     ],
//     mainImage: "/product8.jpg",
//     sku: "5008",
//     category: "Home Decor",
//     tags: ["Rug", "Living Room", "Bedroom"],
//     reviews: [
//       {
//         name: "Michael Evans",
//         rating: "★★★★★",
//         text: "Soft and beautiful, fits my living room perfectly.",
//       },
//       {
//         name: "Emily Johnson",
//         rating: "★★★★☆",
//         text: "Lovely design, but a little expensive.",
//       },
//     ],
//     badge: { type: "NEW", label: "New Arrival" },
//     sizes: ["Small", "Medium", "Large"],
//     colors: ["#A52A2A", "#F5DEB3"],
//     additionalInfo: [
//       { label: "Dimensions", value: "200 x 300 cm" },
//       { label: "Weight", value: "12 kg" },
//       { label: "Material", value: "Polyester, Wool" },
//       { label: "Care Instructions", value: "Vacuum regularly" },
//     ],
//   },
// ];

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [mainImage, setMainImage] = useState<string>("");
  const [showNotification, setShowNotification] = useState(false);
  const [progressing, setProgressing] = useState(false);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");

  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const handleAddToCart = ({ product }: { product: Product | ProductType }) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1, // Default quantity is 1 when added to the cart
      image: product.mainImage,
      size: selectedSize, // Include size when adding to cart
    };

    addToCart(cartItem); // Call the addToCart function from the context
    console.log(cartItem.image)
    setShowNotification(true);
  };

  useEffect(() => {
    if (product) {
      setMainImage(product.mainImage);  // Set the main image from the product list
      setSelectedSize(product.sizes ? product.sizes[0] : "");
    }
  }, [product]); // Ensure product is loaded and image is set

  useEffect(() => {
    if (showNotification) {
      // Start the progress bar animation
      setProgressing(true);

      // Hide the notification after a delay (e.g., 5 seconds)
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Notification will disappear after 5 seconds

      return () => clearTimeout(timeout); // Clean up on unmount
    }
  }, [showNotification]);

  if (!product) {
    return <div className="text-center mt-20 text-red-500">Product not found.</div>;
  }

  return (
    <div className="bg-primary min-h-screen p-4 sm:p-8 pt-20 sm:pt-28">
      {/* Breadcrumb */}
      <div className="text-xs sm:text-sm text-grayDark mb-6 flex items-center">
        <Link href="/" className="text-grayDark hover:text-[#9F9F9F]">
          Home
        </Link>
        <FaChevronRight className="mx-2 text-grayDark" />
        <Link href="/shop" className="text-grayDark hover:text-[#9F9F9F]">
          Shop
        </Link>
        <FaChevronRight className="mx-2 text-grayDark" />
        <span className="text-[#9F9F9F]">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-4 sm:p-6">
        {/* Product Images */}
        <div>
          <div className="aspect-square bg-gray-100 border rounded-lg flex items-center justify-center shadow-md">
            {mainImage && (
              <Image
                src={mainImage}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-full object-contain transition-all duration-300 transform hover:scale-105"
              />
            )}
          </div>
          <div className="flex mt-4 space-x-2 overflow-x-auto">
            {product.images.map((src, idx) => (
              <div
                key={idx}
                onClick={() => setMainImage(src)}
                className="w-20 h-20 border rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all duration-200 transform hover:scale-110"
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${idx}`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700">{product.name}</h1>
          <p className="text-lg sm:text-3xl font-bold text-gray-600">
            Rs. {product.price.toLocaleString()}
          </p>

          {/* Rating Section */}
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <p className="ml-2 text-xs sm:text-base text-[#9F9F9F]">
              (1 Customer Review)
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600">{product.description}</p>

          {/* Size Selection */}
          {product.sizes && (
            <div className="mt-4">
              <p className="text-sm font-semibold mb-2">Size:</p>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md transition duration-200 ${selectedSize === size
                      ? "border-blue-500 bg-blue-100"
                      : "border-gray-300"
                      } hover:bg-blue-50`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {showNotification && (
            <div className="fixed -top-6 left-0 sm:left-auto sm:right-8 md:right-0 bg-gray-900 text-gray-100 px-6 py-4 rounded-lg shadow-lg z-50 animate-slideInRight overflow-hidden">
              {/* Message */}
              <p className="font-heading text-sm md:text-base font-medium">
                ✅ Item added to cart successfully!
              </p>
              {/* Progress Bar */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-yellow-400 transition-all duration-300 ${progressing ? "w-full animate-progressBar" : "w-0"
                  }`}
              ></div>
            </div>
          )}


          {/* Add to Cart Button */}
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">

            <button
              onClick={() => handleAddToCart({ product })}
              className="flex items-center justify-center px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-all duration-200"
            >
              <FiShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button className="flex items-center justify-center px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-all duration-200">
              <FiHeart className="mr-2" /> Compare
            </button>
          </div>


          {/* Category, SKU, and Tags */}
          <div className="mt-6 text-sm text-gray-500 space-y-2">
            <p>
              <span className="font-semibold">Category:</span> {product.category}
            </p>
            <p>
              <span className="font-semibold">SKU:</span> {product.sku}
            </p>
            <p>
              <span className="font-semibold">Tags:</span>{" "}
              {product.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-gray-100 px-2 py-1 mr-2 rounded-md hover:bg-blue-100 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>

          {/* Share Section */}
          <div className="mt-6">
            <p className="text-sm font-semibold mb-4 text-gray-800">Share:</p>
            <div className="flex flex-wrap items-center gap-4 text-base sm:text-xl text-gray-600">
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-blue-600 transition duration-300 ease-in-out"
              >
                <FaFacebookF className="text-blue-600" />
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-blue-400 transition duration-300 ease-in-out"
              >
                <FaTwitter className="text-blue-400" />
                <span>Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 hover:text-red-600 transition duration-300 ease-in-out"
              >
                <FaPinterest className="text-red-600" />
                <span>Pinterest</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-4 sm:p-6">
        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-4 border-b pb-2">
          {["description", "reviews", "additionalInformation"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm sm:text-base font-medium px-3 py-1 rounded-md ${activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "description" && (
            <p className="text-sm sm:text-base text-gray-600">{product.description}</p>
          )}
          {activeTab === "reviews" && product.reviews.length > 0 && (
            <>
              {product.reviews.map((review, idx) => (
                <div key={idx} className="mt-4 space-y-1">
                  <p className="font-medium text-gray-700">{review.name}</p>
                  <p className="text-yellow-500 text-sm">Rating: {review.rating}</p>
                  <p className="text-sm text-gray-600">{review.text}</p>
                </div>
              ))}
            </>
          )}
          {activeTab === "reviews" && product.reviews.length === 0 && (
            <p className="text-sm sm:text-base text-gray-500">
              No reviews available for this product.
            </p>
          )}
          {activeTab === "additionalInformation" && (
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              {product.additionalInfo.map((info, index) => (
                <li key={index}>
                  <strong>{info.label}:</strong> {info.value}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>


      {/* Related Products Grid */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-lg text-gray-600 sm:text-2xl font-bold text-center mb-8">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((product) => (
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
        <div className="text-center mt-6">
          <Link href={`/shop`}>
            <Button label="Show More" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;




















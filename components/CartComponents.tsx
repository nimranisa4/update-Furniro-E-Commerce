import { FaTrash } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import Link from "next/link";

const CartComponents = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "/productdetails/sofa.jpg", // Replace with the actual image URL
    },
  ]);

  // Function to handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to remove item from the cart
  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="relative w-screen bg-white h-screen">
      {/* Main Cart Container */}
      <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-8 lg:px-20 py-8 space-y-8 lg:space-y-0">
        {/* Left Section: Product Table */}
        <div className="w-full lg:w-3/4">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 bg-[#f9f1e7] py-3 px-4 font-medium text-sm lg:text-base">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 gap-4 items-center py-4 px-4 border-b text-sm lg:text-base"
            >
              {/* Product Info */}
              <div className="flex items-center space-x-4 col-span-4 sm:col-span-1">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg bg-[#f9f1e7] p-1"
                />
                <span className="truncate">{item.name}</span>
              </div>

              {/* Price */}
              <div className="col-span-1 hidden sm:block">Rs. {item.price.toLocaleString()}</div>

              {/* Quantity */}
              <div className="col-span-2 sm:col-span-1 flex items-center justify-between">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                  className="w-16 border rounded-md text-center"
                  min="1"
                />
                <FaTrash
                  size={20}
                  className="text-yellow-600 cursor-pointer hover:text-yellow-700 ml-4 sm:ml-0"
                  onClick={() => handleRemoveItem(item.id)}
                />
              </div>

              {/* Subtotal */}
              <div className="col-span-1 sm:block hidden">Rs. {(item.price * item.quantity).toLocaleString()}</div>
            </div>
          ))}
        </div>

        {/* Right Section: Cart Totals */}
        <div className="w-full lg:w-1/4 bg-[#f9f1e7] p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-4">
            <span>Subtotal:</span>
            <span>Rs: {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total:</span>
            <span>Rs: {subtotal.toLocaleString()}</span>
          </div>
          <Link href='/checkout'>
          <Button label="Proceed to Checkout" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartComponents;

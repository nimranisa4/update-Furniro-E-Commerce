'use client';
import { useCart } from '../Context/CartContext';
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { FiArrowRight } from 'react-icons/fi';

const CartPage = () => {
  const { cartItems, removeItem, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const quantity = parseInt(e.target.value, 10);
    if (!isNaN(quantity) && quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <div className="relative w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[220px] md:h-[316px] flex items-center justify-center text-center text-2xl md:text-4xl font-semibold text-black py-6">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          width={1440}
          height={316}
          alt="Background"
          src="/images/rectangle-2.png"
        />
        <div className="relative mt-8 p-6 rounded-lg">
          <Image
            className="mx-auto mb-2 md:mb-4"
            width={60}
            height={60}
            alt="Logo"
            src="/images/Meubel House_Logos-05 (1).png"
          />
          <h1 className="text-2xl md:text-5xl">Cart</h1>
          <div className="flex items-center justify-center gap-2 mt-2 md:mt-4 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <FiArrowRight className="text-base" />
            <span className="font-light">Cart</span>
          </div>
        </div>
      </div>

      {/* Main Cart Content */}
      <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-8 lg:px-20 py-6 md:py-8 space-y-8 lg:space-y-0">
        {/* Cart Items */}
        <div className="w-full lg:w-3/4">
          {/* Table Headers */}
          <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-4 bg-[#f9f1e7] py-2 md:py-3 px-3 md:px-4 font-medium text-xs md:text-sm lg:text-base shadow-sm rounded-lg">
            <div>Product</div>
            <div>Price</div>
            <div>Size</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-base md:text-xl space-y-4 mt-5">
              <p>Your cart is empty.</p>
              <Link href="/">
                <Button label="Continue Shopping" />
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-4 items-center py-3 md:py-4 px-3 md:px-4 border-b text-xs md:text-sm lg:text-base hover:bg-gray-100 transition-all rounded-md"
              >
                {/* Product Info */}
                <div className="flex items-center space-x-3 col-span-4 md:col-span-1">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name || 'Product'}
                      width={50}
                      height={50}
                      className="rounded-lg bg-[#f9f1e7] p-1"
                    />
                  ) : (
                    <div className="bg-gray-300 w-12 h-12 rounded-lg" />
                  )}
                  <span className="truncate">{item.name}</span>
                </div>

                {/* Price */}
                <div className="text-center md:text-left">
                  Rs. {item.price.toLocaleString()}
                </div>

                {/* Size */}
                <div className=" text-center md:text-left">
                  {item.size || 'N/A'}
                </div>

                {/* Quantity */}
                <div className="flex items-center space-x-2 justify-center md:justify-start">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                    className="w-10 md:w-16 border rounded-md text-center focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <FaTrash
                    size={16}
                    className="text-yellow-600 cursor-pointer hover:text-yellow-700"
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove Item"
                  />
                </div>

                {/* Subtotal */}
                <div className="text-center md:text-left">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-1/4 bg-[#f9f1e7] p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-3 md:mb-4 text-sm md:text-base">
            <span>Subtotal:</span>
            <span>Rs. {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm md:text-lg font-bold mb-4 md:mb-6">
            <span>Total:</span>
            <span>Rs. {subtotal.toLocaleString()}</span>
          </div>
          <Link href={cartItems.length > 0 ? '/checkout' : '#'}>
            <Button
              label="Proceed to Checkout"
              disabled={cartItems.length === 0}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

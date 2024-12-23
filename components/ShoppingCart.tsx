import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaShoppingCart, FaCheck, FaList } from "react-icons/fa";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart: FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-full md:w-96 max-h-screen bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      {/* Header */}
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Product 1 */}
        <div className="flex items-center">
          <Image
            src="/productdetails/sofa.jpg"
            alt="Product 1"
            width={64}
            height={64}
            className="rounded-md"
          />
          <div className="ml-4">
            <p className="text-sm font-medium">Asgaard Sofa</p>
            <p className="text-sm text-gray-500">Rs. 250,000.00</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex items-center">
          <Image
            src="/productdetails/wood.jpg"
            alt="Product 2"
            width={64}
            height={64}
            className="rounded-md"
          />
          <div className="ml-4">
            <p className="text-sm font-medium">Casaliving Chair</p>
            <p className="text-sm text-gray-500">Rs. 50,000.00</p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="p-6 border-t">
        <div className="flex flex-col gap-4">
        <Link href='/cart' className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-3 rounded-md hover:bg-gray-200">
            <FaList className="mr-2" /> Cart
          </Link>
          <Link href='compare' className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-3 rounded-md hover:bg-gray-200">
            <FaShoppingCart className="mr-2" /> Compare
          </Link>
          <Link href='/checkout' className="flex items-center justify-center w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600">
            <FaCheck className="mr-2" /> Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

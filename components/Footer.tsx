import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-100 py-10 border-t border-gray-400">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding and Address Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-yellow-500">Funiro</h2>
          <p className="text-sm text-gray-400">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://web.facebook.com/?_rdc=1&_rdr" aria-label="Facebook">
              <FaFacebookF className="text-gray-500 hover:text-yellow-500 transition duration-300" size={20} />
            </Link>
            <Link href="https://github.com/" aria-label="Twitter">
              <FaGithub className="text-gray-500 hover:text-yellow-500 transition duration-300" size={20} />
            </Link>
            <Link href="https://www.linkedin.com/feed/" aria-label="LinkedIn">
              <FaLinkedinIn className="text-gray-500 hover:text-yellow-500 transition duration-300" size={20} />
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "Shop", href: "/shop" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-500 text-gray-500 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Customer Support</h3>
          <ul className="space-y-2">
            {["Payment Options", "Shipping & Returns", "Privacy Policies", "FAQs"].map((support) => (
              <li key={support}>
                <Link href="#" className="hover:text-yellow-500 text-gray-500 transition duration-300">
                  {support}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to our newsletter for the latest updates, exclusive deals, and more.
          </p>
          <div className="flex flex-col sm:flex-row items-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-2 mb-2 sm:mb-0 text-gray-900 border border-gray-600 rounded-lg sm:rounded-r-none focus:outline-none"
            />
            <button className="w-full sm:w-auto bg-yellow-500 px-4 py-2 text-white rounded-lg sm:rounded-l-none hover:bg-yellow-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Funiro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

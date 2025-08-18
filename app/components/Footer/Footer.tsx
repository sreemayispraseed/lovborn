import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaSnapchat } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-stone-50 text-gray-800 font-sans">
      {/* Top Section - Icons and Text */}
      <div className="border-b border-gray-200 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="p-4 rounded-full bg-white mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 8h14M5 8a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8z"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-lg">Free Shipping</h4>
            <p className="text-sm text-gray-600">
              Enjoy free shipping on all orders
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="p-4 rounded-full bg-white mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-lg">Flexible Payment</h4>
            <p className="text-sm text-gray-600">
              Pay with Multiple Credit Cards
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="p-4 rounded-full bg-white mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-lg">14 - Days Return</h4>
            <p className="text-sm text-gray-600">
              Free return/exchange within 30 days
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="p-4 rounded-full bg-white mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h4 className="font-semibold text-lg">Premium Support</h4>
            <p className="text-sm text-gray-600">
              Enjoy our premium support
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer - Links and Newsletter */}
      <div className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* LOV BORN Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold font-serif mb-4">LOV BORN</h3>
            <h4 className="text-3xl font-serif italic mb-4 leading-snug">
              Crafted for Skin,<br />Rooted in Nature
            </h4>
            <p className="text-gray-600 mb-4 text-sm">
              Get early access to new products, exclusive deals & more.
            </p>
            <form className="flex border-b border-gray-400 pb-1">
              <input
                type="email"
                placeholder="Your_email@example.com"
                className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-800 text-sm"
              />
              <button type="submit" aria-label="Subscribe">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 hover:text-gray-600 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* FIND US Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">FIND US</h4>
            <p className="text-gray-600 text-sm mb-2">
              Find a location nearest you.
            </p>
            <Link href="#" className="underline text-gray-600 text-sm hover:text-gray-900 transition-colors block mb-2">
              See Our Stores
            </Link>
            <p className="text-sm text-gray-600">(64) 8344 1233</p>
            <p className="text-sm text-gray-600">hello@vemus.com</p>
            <div className="flex space-x-4 mt-4 text-gray-600">
              <Link href="#" aria-label="Facebook">
                <FaFacebook className="w-5 h-5 hover:text-gray-900 transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <FaInstagram className="w-5 h-5 hover:text-gray-900 transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <FaTwitter className="w-5 h-5 hover:text-gray-900 transition-colors" />
              </Link>
              <Link href="#" aria-label="Snapchat">
                <FaSnapchat className="w-5 h-5 hover:text-gray-900 transition-colors" />
              </Link>
            </div>
          </div>

          {/* QUICK LINK Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">QUICK LINK</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* ABOUT US Section */}
          <div>
            <h4 className="text-lg font-bold mb-4">ABOUT US</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Payments */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms
            </Link>
          </div>
          <p>© All Rights Reserved 2025 LOV BORN</p>
          <div className="flex items-center space-x-2 flex-wrap justify-center">
            {/* Replace with your payment method images */}
            <Image
              src="/images/payment-methods.png"
              alt="Payment Methods"
              width={250}
              height={30}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
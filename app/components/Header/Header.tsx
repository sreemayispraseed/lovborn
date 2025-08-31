"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 ">
      <div className="bg-transperent text-white border-b border-[#ffc8778c] pb-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center space-x-2 py-6">
           <img src="/assets/images/logo.svg" alt="Logo"  />
          </div>

          {/* Center - Nav Links */}
<div className="flex ">
            <nav className="flex flex-col text-sm uppercase font-light mt-3 justify-between">
             <div className="flex items-center justify-end gap-[10px] mb-2">
            <Link href="#"><FaFacebookF className="hover:text-orange-400" /></Link>
            <Link href="#"><FaInstagram className="hover:text-orange-400" /></Link>
            <Link href="#"><FaTwitter className="hover:text-orange-400" /></Link>
            <span className="text-gray-500">|</span>
            <Link href="#"><FaSearch className="hover:text-orange-400" /></Link>
            <Link href="/cart" className="relative">
              <FaShoppingCart className="hover:text-orange-400" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-4 h-4 flex items-center justify-center rounded-full">
                1
              </span>
            </Link>
          </div>
            <div className="flex gap-[40px] align-center text-[18px] ">
            <Link href="/" className="hover:text-orange-400">Home</Link>
            <Link href="/about" className="hover:text-orange-400">About Us</Link>
            <Link href="/products" className="hover:text-orange-400">Products</Link>
            <Link href="/cart" className="hover:text-orange-400">Cart</Link>
            <Link href="/contact" className="hover:text-orange-400">Contact Us</Link>
            </div>
          </nav>
{/* <div className="px-3 py-[29px]">
        <Link
          href="/contact"
          className="rounded-full text-white text-[18px] px-4 py-2 border border-white transition duration-300"
        >
          Contact Us
        </Link>
      </div> */}
      </div>
          {/* Right - Icons */}
         
        </div>
      </div>

      
    </header>
  );
}

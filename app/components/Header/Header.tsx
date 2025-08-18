"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#FFF8EC] text-stone-800 font-sans sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-stone-600 transition-colors">
            <span className="underline-offset-4 decoration-2 underline">HOME</span>
          </Link>
          <Link href="/about" className="hover:text-stone-600 transition-colors">
            ABOUT US
          </Link>
          <Link href="/products" className="hover:text-stone-600 transition-colors">
            PRODUCTS
          </Link>
          <Link href="/cart" className="hover:text-stone-600 transition-colors">
            CART
          </Link>
          <Link href="/contact" className="hover:text-stone-600 transition-colors">
            CONTACT US
          </Link>
        </nav>

        {/* Logo */}
        <div className="flex-grow text-center">
          <Link href="/" className="text-3xl font-serif italic text-stone-800 hover:text-stone-600 transition-colors">
            LOV BORN
          </Link>
        </div>

        {/* Icons and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-stone-800 hover:text-stone-600 transition-colors" aria-label="Search">
            <FaSearch size={20} />
          </button>
          <button className="hidden md:block text-stone-800 hover:text-stone-600 transition-colors" aria-label="Wishlist">
            <FaHeart size={20} />
          </button>
          <button className="hidden md:block text-stone-800 hover:text-stone-600 transition-colors" aria-label="Shopping Cart">
            <FaShoppingCart size={20} />
          </button>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center py-4 bg-[#FDF9F2] space-y-4 border-t border-gray-200">
          <Link href="/" className="hover:text-stone-600 transition-colors" onClick={toggleMobileMenu}>
            <span className="underline-offset-4 decoration-2 underline">HOME</span>
          </Link>
          <Link href="/about" className="hover:text-stone-600 transition-colors" onClick={toggleMobileMenu}>
            ABOUT US
          </Link>
          <Link href="/products" className="hover:text-stone-600 transition-colors" onClick={toggleMobileMenu}>
            PRODUCTS
          </Link>
          <Link href="/cart" className="hover:text-stone-600 transition-colors" onClick={toggleMobileMenu}>
            CART
          </Link>
          <Link href="/contact" className="hover:text-stone-600 transition-colors" onClick={toggleMobileMenu}>
            CONTACT US
          </Link>
          <div className="flex items-center space-x-6 mt-4">
            <button className="text-stone-800 hover:text-stone-600 transition-colors" aria-label="Search">
              <FaSearch size={20} />
            </button>
            <button className="text-stone-800 hover:text-stone-600 transition-colors" aria-label="Wishlist">
              <FaHeart size={20} />
            </button>
            <button className="text-stone-800 hover:text-stone-600 transition-colors" aria-label="Shopping Cart">
              <FaShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

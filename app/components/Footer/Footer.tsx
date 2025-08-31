import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaSnapchat } from "react-icons/fa";
import Image from "next/image";
import assets from "../../../public/assets/assets"; 

const Footer = () => {
  return (
    <footer className=" text-gray-800 font-sans">
      {/* Top Section - Icons and Text */}
      <div className="border-b border-gray-200 py-8 bg-[#FBECE3]">
        <div className="container mx-auto px-[15px] md:px-[50px] lg:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center">
            <div className="flex items-center gap-[10px]">
             <Image src={assets.shipping} alt="Free Shipping" width={40} height={40} className="h-full w-fullS text-orange-400"/>
             <div>
            <h4 className="font-semibold text-lg">Free Shipping</h4>
             
            <p className="text-sm text-gray-600">
              Enjoy free shipping on all orders
            </p>
            </div>
            </div>
         
<div className="flex items-center gap-[10px]">
             <Image src={assets.payment} alt="Free Shipping" width={40} height={40} className="h-full w-fullS text-orange-400"/>
             <div>
            <h4 className="font-semibold text-lg">Flexible Payment</h4>
             
            <p className="text-sm text-gray-600">
              Pay with Multiple Credit Cards
            </p>
          </div>
          </div>

        <div className="flex items-center gap-[10px]">
             <Image src={assets.return_icon} alt="Free Shipping" width={40} height={40} className="h-full w-fullS text-orange-400"/>
            <div>
            <h4 className="font-semibold text-lg">14 - Days Return</h4>
            
            <p className="text-sm text-gray-600">
              Free return/exchange within 30 days
            </p>
            </div>
          </div>

         <div className="flex items-center gap-[10px]">
             <Image src={assets.support} alt="Free Shipping" width={40} height={40} className="h-full w-fullS text-orange-400"/>
            <div>
            <h4 className="font-semibold text-lg">Premium Support</h4>
           
            <p className="text-sm text-gray-600">
              Enjoy our premium support
            </p>
          </div>
        </div>
        </div>
     </div>
     </div>

      {/* Main Footer - Links and Newsletter */}
      <div className="py-12">
        <div className="container mx-auto px-[15px] md:px-[50px] lg:px-[100px] grid grid-cols-1 grid-cols-2 gap-12">
          {/* LOV BORN Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold font-serif mb-4">LOV BORN</h3>
            <h4 className="text-3xl font-serif italic mb-4 leading-snug">
              Crafted for Skin,<br />Rooted in Nature
            </h4>
            <p className="text-gray-600 mb-4 text-sm">
              Get early access to new products, exclusive deals & more.
            </p>
            <form className="flex   border-b border-gray-400 pb-3 w-[300px]">
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
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              <Link href="#" aria-label="Facebook" className="border p-2  rounded-full hover:bg-gray-200 transition-colors">
                <Image src={assets.fb} alt="Facebook" width={20} height={20} className="w-full h-full hover:text-gray-900 transition-colors"/>
              </Link>
              <Link href="#" aria-label="Instagram" className="border p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Image src={assets.insta} alt="Instagram" width={20} height={20} className="w-full h-full hover:text-gray-900 transition-colors"/>
              </Link>
              <Link href="#" aria-label="Twitter" className="border p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Image src={assets.twitter} alt="Twitter" width={20} height={20} className="w-full h-full hover:text-gray-900 transition-colors"/>
              </Link>
              <Link href="#" aria-label="Snapchat" className="border p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Image src={assets.snapchat} alt="Snapchat" width={20} height={20} className="w-full h-full hover:text-gray-900 transition-colors"/>
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
      </div>

      {/* Bottom Section - Copyright and Payments */}
      <div className="border-t border-b border-gray-200 py-[40px] mb-[60px]">
        <div className="container mx-auto px-[15px] md:px-[50px] lg:px-[100px] flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0">
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
              src={assets.gpay}
              alt="Payment Methods"
              width={40}
              height={25}
              className="w-[40px] h-[25px] object-cover"
            />
             <Image
              src={assets.circle}
              alt="Payment Methods"
              width={40}
              height={25}
              className="w-[40px] h-[25px] object-cover"
            />
            <Image
              src={assets.shop}
              alt="Payment Methods"
              width={40}
              height={25}
              className="w-[40px] h-[25px] object-cover"
            />
             <Image
              src={assets.visa}
              alt="Payment Methods"
              width={40}
              height={25}
              className="w-[40px] h-[25px] object-cover"
            />
            <Image
              src={assets.union_pay}
              alt="Payment Methods"
              width={40}
              height={25}
              className="w-[40px] h-[25px] object-cover"
            />
             <Image
              src={assets.applepay}
              alt="Payment Methods"
              width={40}
              height={25}
              className="w-[40px] h-[25px] object-cover"
            />
            <Image
              src={assets.amex}
              alt="Payment Methods"
              width={40}
              height={25}
              className="w-[40px] h-[25px] object-cover"
            />
             <Image
              src={assets.paywhite}
              alt="Payment Methods"
              width={40}
              height={25}
              className="w-[40px] h-[25px] object-cover"
            />
             <Image
              src={assets.redblue}
              alt="Payment Methods"
              width={40}
              height={25}
              className="w-[40px] h-[25px] object-cover"
            />
          </div>
        </div>
        
      </div>
     
    </footer>
  );
};

export default Footer;
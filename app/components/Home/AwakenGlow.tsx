// app/components/AwakenGlow.tsx
"use client";

import Image from "next/image";
import assets from "../../../public/assets/assets"; 

export default function AwakenGlow() {
  return (
    <section className="w-full bg-gradient-to-r from-[#f5e3d0] to-[#b28b60]">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Image */}
        <div className="">
          <Image
            src={assets.awaken_glow}
            alt="Awaken Your Glow Soap"
            width={500}
            height={500}
            className="rounded-md object-cover w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center justify-center  text-center md:text-left p-8">
          <h2 className="text-[48px]  italic text-white">
            Awaken <span className="not-italic font-medium">Your Glow</span>
          </h2>
          <p className="mt-4 text-[16px] text-white max-w-[517px] leading-relaxed">
            Indulge in our artisan soap collection crafted with natural
            ingredients to nourish your skin and senses. Treat yourself to
            exclusive offers and limited-time deals—because you deserve a little
            luxury every day.
          </p>

          <button className="mt-6 px-6 py-2 border border-white text-white text-[16px] rounded-md hover:bg-white hover:text-gray-900 transition">
            SHOP NOW →
          </button>
        </div>
      </div>
    </section>
  );
}

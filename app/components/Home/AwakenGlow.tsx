// app/components/AwakenGlow.tsx
"use client";

import Image from "next/image";

export default function AwakenGlow() {
  return (
    <section className="w-full bg-gradient-to-r from-[#f5e3d0] to-[#b28b60]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-end p-8">
          <Image
            src="/images/soap-glow.jpg"
            alt="Awaken Your Glow Soap"
            width={500}
            height={500}
            className="rounded-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left p-8">
          <h2 className="text-3xl font-light italic text-white">
            Awaken <span className="not-italic font-medium">Your Glow</span>
          </h2>
          <p className="mt-4 text-sm text-white max-w-md leading-relaxed">
            Indulge in our artisan soap collection crafted with natural
            ingredients to nourish your skin and senses. Treat yourself to
            exclusive offers and limited-time deals—because you deserve a little
            luxury every day.
          </p>

          <button className="mt-6 px-6 py-2 border border-white text-white text-sm rounded-md hover:bg-white hover:text-gray-900 transition">
            SHOP NOW →
          </button>
        </div>
      </div>
    </section>
  );
}

// app/components/LovBornSection.tsx
"use client";
import assets from "../../../public/assets/assets"; 
import Image from "next/image";

export default function SecondSec() {
  return (
    <section className="w-full bg-white text-gray-900">
      {/* Top section */}
      <div className="container mx-auto px-6 py-12">
      <div className="px-6 py-12 flex flex-col ">
        <div className="flex items-center gap-6">
          {/* Logo circle */}
          <div className="w-28 h-28 rounded-full border border-yellow-600 flex items-center justify-center">
            <span className="text-yellow-600 font-semibold">LOV BORN</span>
          </div>

          {/* Text */}
          <div className="text-left max-w-lg">
            <p className="text-sm text-gray-700 leading-relaxed">
              We believe soap is more than a cleansing ritual—
              <span className="font-semibold"> it’s a moment of self-care and purity.</span>{" "}
              Our curated collection blends nature’s finest ingredients with
              handcrafted artistry, creating bars that nourish your skin and
              elevate your everyday glow.
            </p>
            <a
              href="#"
              className="mt-2 inline-block text-xs text-yellow-700 font-medium tracking-wide"
            >
              OUR STORY →
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-yellow-200 w-full"></div>

      {/* Inspired Section */}
      <div className=" px-6 py-12">
        <h2 className="text-3xl font-light italic text-gray-900 mb-10">
          <span className="text-yellow-700 not-italic font-medium">
            Inspired
          </span>{" "}
          Care for Every <span className="italic font-medium">Skin</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Gift Under */}
            <div className="flex flex-col items-center text-center">
            <Image
              src={assets.gift}
              alt="Gift under 1000"
              width={100}
              height={70}
              className="rounded-xl object-cover"
            />
            <p className="mt-3 text-sm font-medium">GIFT UNDER ₹1000.52</p>
            </div>

          {/* New In */}
          <div className="flex flex-col items-center text-center">
            <Image
              src={assets.new_in}
              alt="New In"
              width={100}
              height={70}
              className="rounded-xl object-cover"
            />
            <p className="mt-3 text-sm font-medium">NEW IN</p>
          </div>

          {/* Personalised */}
          <div className="flex flex-col items-center text-center">
            <Image
              src={assets.personalized}
              alt="Personalised"
              width={100}
              height={70}
              className="rounded-xl object-cover"
            />
            <p className="mt-3 text-sm font-medium">PERSONALISED</p>
          </div>

          {/* Best Selling */}
          <div className="flex flex-col items-center text-center">
            <Image
              src={assets.best}
              alt="Best Selling"
              width={100}
              height={70}
              className="rounded-xl object-cover"
            />
            <p className="mt-3 text-sm font-medium text-yellow-700">
              BEST SELLING ↗
            </p>
          </div>
        </div>
      </div>
        </div>
    </section>
  );
}

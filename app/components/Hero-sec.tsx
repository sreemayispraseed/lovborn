"use client";
import Image from "next/image";
import bgimg from "../../public/assets/images/home-banner-slider/slider1.jpg";

export default function HeroSec() {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Background Image */}
      <Image
        src={bgimg}
        alt="Hero background"
        className="object-cover w-full h-full"
        width={2000}
        height={2000}
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto">
          <div className="max-w-lg text-white">
            <h1 className="text-4xl md:text-5xl font-semibold leading-snug">
              Crafted To Enhance Your Skin’s Glow
            </h1>
            
          </div>
        </div>
      </div>
    </section>
  );
}

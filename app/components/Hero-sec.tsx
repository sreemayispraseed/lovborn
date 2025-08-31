"use client";
import Image, { StaticImageData } from "next/image";

interface HeroSecProps {
  bgimg: StaticImageData | string; 
  title?: string;
  subtitle?: string;
  overlay?: string; 
}

export default function HeroSec({ 
  bgimg, 
  title, 
  subtitle, 
  overlay = "bg-black/40" 
}: HeroSecProps) {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Background Image */}
      <Image
        src={bgimg}
        alt="Hero background"
        className="object-cover w-full h-full"
        fill
        priority
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlay}`}></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-[15px] md:px-[50px] lg:px-[100px]">
          {/* instead of `container`, now full width with custom padding */}
          <div className="text-white">
            {title && (
              <h1 className="text-[60px] font-semibold leading-snug">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-4 text-lg md:text-xl text-gray-200">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

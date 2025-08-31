"use client";
import Image from "next/image";
import assets from "../../../public/assets/assets";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-[15px] md:px-[50px] lg:px-[100px]">
        <div className="flex flex-col lg:flex-row items-center  lg:space-x-10">
          {/* Image Column */}
          <div className="w-full h-full lg:w-2/5 mb-8 lg:mb-0 flex ">
            <Image
              src={assets.about_brdr}
              alt="About Lov Born"
              width={500}
              height={640}
              className="w-[485px] h-[640px] object-cover"
            />
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:w-3/5">
            <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">
              We are Lov Born
            </span>
            <h2 className="mt-2 text-[50px] font-bold text-gray-900 leading-tight">
              Every Bar of Soap Should Feel as Special as the Care it Gives.
            </h2>
            <p className="mt-6 text-[20px] leading-relaxed">
              From the calming scents of essential oils to the rich lather of natural botanicals, every Lov Born soap is a reflection of purity, care, and mindful craftsmanship. Our bars are more than cleansing tools—they’re moments of self-love, thoughtfully designed to nurture your skin and elevate your senses. Inspired by nature’s wisdom and the elegance of simplicity, we blend traditional techniques with skin-friendly formulations to create soap that restores balance, radiance, and calm to your daily rituals. Crafted to last, remembered for how it makes you feel.
            </p>
          </div>
        </div>
      </div>
   
      
    </section>
  );
}
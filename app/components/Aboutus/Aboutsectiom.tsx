"use client";
import Image from "next/image";
import soapImg from "../../../public/assets/images/home-banner-slider/slider2.jpg"; // replace with your image path

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <div className="w-full max-w-md aspect-square overflow-hidden rounded-full border border-gray-200 shadow-lg">
            <Image
              src={soapImg}
              alt="Soap with natural ingredients"
              className="object-cover w-full h-full"
              width={600}
              height={600}
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          <p className="text-sm uppercase tracking-wider text-gray-500">
            We are Lov Born
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Every Bar of Soap Should Feel as Special <br /> as the Care it Gives.
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            From the calming scents of essential oils to the rich lather of natural botanicals,
            every Lov Born soap is a reflection of purity, care, and mindful craftsmanship.
            Our bars are more than cleansing tools—they’re moments of self-love, thoughtfully
            designed to nurture your skin and elevate your senses. Inspired by nature’s wisdom
            and the elegance of simplicity, we blend traditional techniques with skin-friendly
            formulations to create soap that restores balance, radiance, and calm to your daily
            rituals. Crafted to last, remembered for how it makes you feel.
          </p>
        </div>
      </div>
    </section>
  );
}

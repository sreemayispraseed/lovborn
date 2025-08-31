"use client";
import Image from "next/image";
import assets from "../../../public/assets/assets";
export default function Detailed() {
  return (
    <section className="bg-[#FFE8CB] py-16">
      <div className="container px-[15px] md:px-[50px] lg:px-[100px] ">
        <h2 className="text-3xl font-bold text-center mb-12">
        CRAFTED WITH CARE – SINCE DAY ONE
        </h2>
        <div className="xl:w-[1186px] mx-auto ">
        <p className="text-lg text-center mb-0">
        What touches your skin should come from nature—nurturing, gentle, and effective. Handcrafted in India, our soaps are thoughtfully made to bring calm and care to your everyday routine. Today, Lovborn is trusted by thousands who believe skincare should be as honest as it is beautiful.
        
        </p>
        <p className="text-lg text-center mb-12">
        Lov Born is proudly made in India and is now loved by thousands who believe skincare should be as thoughtful as it is beautiful.
        </p>
        </div>
        <div className="flex flex-col  lg:flex-row gap-8 lg:gap-0 ">
          {/* Left Column: Image */}
          <div className="w-full lg:w-2/5">
            <div className="relative h-[600px] lg:h-[700px] w-full"> {/* Adjust height as needed */}
              <Image
                src={assets.Core_Value} // Use the imported image
                alt="Handmade soap with lavender"
                fill
                style={{ objectFit: "cover" }}
                className=""
              />
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Content Boxes */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0">
            {/* Box 1: Natural Craftsmanship */}
            <div className="p-6 bg-[#AE873E]  flex flex-col justify-center items-center text-center ">
              
              <h3 className="text-xl font-semibold text-white  uppercase tracking-wide mb-3">
                Natural Craftsmanship
              </h3>
              <div className="border-b border-white w-[100px]" >
              </div>
              <p className="text-white leading-relaxed text-sm mt-3">
                Each bar of soap is thoughtfully made by hand, combining time-tested methods with nature&apos;s finest
                botanicals to cleanse, heal, and rejuvenate your skin.
              </p>
            </div>

            {/* Box 2: Pure Ingredients */}
            <div className="p-6 bg-[#FFF7E7]  flex flex-col justify-center  items-center text-center">
              
              <h3 className="text-xl font-semibold text-black  mb-3 uppercase tracking-wide">
                Pure Ingredients
              </h3>
              <div className="border-b border-black w-[100px]" >
              </div>
              <p className=" leading-relaxed text-black text-sm mt-3">
                We use only skin-friendly, cruelty-free ingredients—free from harsh chemicals and artificial additives—to
                ensure your skin receives the gentle care it deserves.
              </p>
            </div>

            {/* Box 3: Inspired Formulas */}
            <div className="p-6 bg-[#FFF7E7] text-black  flex flex-col justify-center  items-center text-center">
              
              <h3 className="text-xl font-semibold mb-3 uppercase tracking-wide">
                Inspired Formulas
              </h3>
              <div className="border-b border-black w-[100px]" >
              </div>
              <p className="leading-relaxed text-sm mt-3">
                Our products are more than cleansing tools—they are experiences. Crafted with rich textures, soothing
                scents, and beneficial ingredients, each soap tells a story of self-care.
              </p>
            </div>

            {/* Box 4: Customer First */}
            <div className="p-6 bg-[#AE873E] text-white  flex flex-col justify-center  items-center text-center">
             
              <h3 className="text-xl font-semibold mb-3 uppercase tracking-wide">
                Customer First
              </h3>
              <div className="border-b border-white w-[100px]" >
              </div>
              <p className="leading-relaxed text-sm mt-3">
                Your wellness is our purpose. From formulation to packaging, every step is taken with your comfort,
                satisfaction, and glow in mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

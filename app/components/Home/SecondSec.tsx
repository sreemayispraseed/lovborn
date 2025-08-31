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
        <div className="lg:flex flex-cols items-center justify-center mb-12 gap-[150px]">
          {/* Logo circle */}
          <div className="">
          <div className="w-[272.5px] h-[272.5] rounded-full border border-yellow-600 flex items-center justify-center px-[26px]">
            <Image
              src={assets.lovbon_logo}
              alt="Lov Born Logo"
              width={272.5}
              height={205}
              className="object-contain"
            />
          </div></div>

          {/* Text */}
          <div className="text-left max-w-[1028px]">
            <p className="text-[20px] md:text-[25px] lg:text-[30px]  text-gray-700 leading-relaxed mb-[30px]">
              We believe soap is more than a cleansing ritual—
               it’s a moment of self-care and purity. <span className="text-[#A9A9A9]">  
              Our curated collection blends nature’s finest ingredients with
              handcrafted artistry, creating bars that nourish your skin and
              elevate your everyday glow.</span>
            </p>
            <a
              href="#"
              className="  text-[16px] text-[#AE873E] "
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
        <h2 className="text-[76px] italic  mb-[40px]">
          <span className="text-[#957127] leading-[1.710526315789474]">
            Inspired </span> Care
         <br></br>
          for Every <span className="text-[#957127]">Skin</span> 
        </h2>
        {/* Cards */}
        <div className="grid lg:grid-cols-2 lg:gap-8">
          {/* Gift Under */}
            <div className="flex  text-center mb-[50px]">
            <Image
              src={assets.gift}
              alt="Gift under 1000"
              width={100}
              height={70}
              className=" object-cover w-[200px] rounded-full"
            />
            <p className="mt-3 text-[20px] md:text-[25px] lg:text-[30px] text-[36px] font-medium ml-4">GIFT UNDER ₹1000.52</p>
            </div>

          {/* New In */}
          <div className="flex  text-center mb-[50px]">
            <Image
              src={assets.new_in}
              alt="New In"
              width={100}
              height={70}
              className=" object-cover rounded-full w-[200px]"
            />
            <p className="mt-3 text-[20px] md:text-[25px] lg:text-[30px] text-[36px] ml-4 font-medium">NEW IN</p>
          </div>

          {/* Personalised */}
          <div className="flex  text-center xl:pl-[100px]">
            <Image
              src={assets.personalized}
              alt="Personalised"
              width={100}
              height={70}
              className=" object-cover rounded-full w-[200px]"
            />
            <p className="mt-3 text-[20px] md:text-[25px] lg:text-[30px] text-[36px] ml-4 font-medium">PERSONALISED</p>
          </div>

          {/* Best Selling */}
          <div className="flex  text-center xl:pl-[80px]">
            <Image
              src={assets.best}
              alt="Best Selling"
              width={100}
              height={70}
              className=" object-cover rounded-full w-[200px]"
            />
            <p className="mt-3 text-[20px] md:text-[25px] lg:text-[30px] text-[36px] ml-4 font-medium text-yellow-700">
              BEST SELLING ↗
            </p>
          </div>
        </div>
      </div>
        </div>
    </section>
  );
}

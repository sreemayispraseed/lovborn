"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import assets from "../../../public/assets/assets";

const products = [
  {
    id: 1,
    title: "Classic Vanilla",
    price: "₹1000.52",
    desc: "Classic Vanilla is a natural family luxury soap made with shea butter, almond oil, and a soothing vanilla fragrance.",
    img: assets.product1,
    tag: "NEW IN",
  },
  {
    id: 2,
    title: "Nargis Bloom",
    price: "₹1000.52",
    desc: "Nargis Bloom is a floral luxury soap with jojoba oil, almond oil, and the gentle scent of Nargis flowers.",
    img: assets.product2,
  },
  {
    id: 3,
    title: "Indian Herbs and Oils",
    price: "₹1000.52",
    desc: "Indian Herbs and Oils is a natural luxury soap made with neem, Rakcham, and ashwagandha for a herbal cleanse.",
    img: assets.product3,
  },
  {
    id: 4,
    title: "Vedic Treasure",
    price: "₹1000.52",
    desc: "Experience the ancient purity of nature with Vedic Treasure soap.",
    img: assets.product4,
    tag: "NEW IN",
  },
  {
    id: 4,
    title: "Vedic Treasure",
    price: "₹1000.52",
    desc: "Experience the ancient purity of nature with Vedic Treasure soap.",
    img: assets.product4,
    tag: "NEW IN",
  },
];

interface FreshFindsProps {
  bgColor?: string; // allow custom bg color
}

export default function FreshFinds({ bgColor = "bg-[#fdf6f0]" }: FreshFindsProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={`${bgColor} py-12 overflow-hidden`}>
      {/* Slider full width aligned with container */}
      <div className="w-full pl-6 sm:pl-[5%]">
        <h2 className="text-[48px] font-light italic text-gray-900 mb-8">
          <span className="text-gray-900 not-italic font-medium">Fresh Finds</span>, Just In
        </h2>
        <Swiper
          spaceBetween={24}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4.2 },
          }}
          className="!overflow-visible"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-full flex flex-col cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden h-[250px] lg:h-[320px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  {item.tag && (
                    <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Text */}
                <div className="mt-4 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-[20px] font-semibold">{item.price}</p>
                  </div>
                  <p className="mt-2 text-[16px] text-gray-600">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

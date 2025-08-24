// app/components/ProductHighlights.tsx
"use client";
import assets from "../../../public/assets/assets"; 
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "NATURALLY MADE",
    img: assets.naturesoap,
    link: "#",
  },
  {
    id: 2,
    title: "VEDIC TREASURE",
    img: assets.vedicsoup,
    link: "#",
  },
];

export default function ProductHighlights() {
  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {products.map((item) => (
          <div key={item.id} className="flex flex-col">
            {/* Product Image */}
            <div className="relative w-full h-72 md:h-96">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Text */}
            <h3 className="mt-4 text-lg font-medium tracking-wide">
              {item.title}
            </h3>
            <a
              href={item.link}
              className="mt-1 text-sm font-medium text-gray-900 inline-flex items-center group"
            >
              SHOP NOW
              <span className="ml-1 group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

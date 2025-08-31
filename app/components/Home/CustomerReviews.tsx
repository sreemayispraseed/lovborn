"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import assets from "../../../public/assets/assets"; 

import type { StaticImageData } from "next/image";

interface Review {
  id: number;
  rating: number;
  title: string;
  review: string;
  author: string;
  verified: boolean;
  item: string;
  image: StaticImageData | string;
  propic: StaticImageData | string;
}

const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    title: "RECOMMEND!",
    review:
      "The quality of the jewelry exceeded my expectations. Each piece feels premium and beautifully crafted, and the designs are incredibly stylish. I'm absolutely obsessed with my new collection!",
    author: "Vincent P.",
    verified: true,
    propic: assets.avt3,
    item: "Lupen mono",
    image: assets.review1, // Replace with your image path
  },
  {
    id: 2,
    rating: 5,
    title: "LOVE IT!",
    review:
      "I was blown away by the craftsmanship of these jewelry pieces. Every item feels luxurious and the modern designs are simply stunning. I can't get enough of my new favorite accessories!",
    author: "Emily T.",
    verified: true,
    propic: assets.avt4,
    item: "Lupen loper",
    image: assets.review2, // Replace with your image path
  },
    {
    id: 2,
    rating: 5,
    title: "LOVE IT!",
    propic: assets.avt4,
    review:
      "I was blown away by the craftsmanship of these jewelry pieces. Every item feels luxurious and the modern designs are simply stunning. I can't get enough of my new favorite accessories!",
    author: "Emily T.",
    verified: true,
    item: "Lupen loper",
    image: assets.review2, // Replace with your image path
  },


];

const CustomerReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 2; // Set to 2 reviews per slide

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / slidesPerView));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(reviews.length / slidesPerView)) % Math.ceil(reviews.length / slidesPerView));
  };

  return (
    <section className="bg-stone-800 text-white py-16 font-serif">
      <div className="container mx-auto px-[15px] md:px-[50px] lg:px-[100px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl italic">Customer Reviews</h2>
          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="Previous slide"
            >
              <FaArrowLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="text-white hover:text-gray-400 transition-colors"
              aria-label="Next slide"
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Reviews Container (Swiper-like) */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentSlide * 100) / slidesPerView}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`flex-shrink-0 w-full md:w-1/2 p-2`} // Adjusted width for 2 reviews per slide
              >
                <div className="md:flex bg-white  overflow-hidden shadow-lg h-full">
                  {/* Image Section */}
                  <div className="relative w-full md:w-1/2 min-h-[300px]">
                    <Image
                      src={review.image}
                      alt={`Image for review by ${review.author}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Review Content */}
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    {/* Stars */}
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="text-2xl text-black mb-4">
                      {review.title}
                    </h3>
                    <p className="text-[16px]  text-[#818181] mb-6">
                      &quot;{review.review}&quot;
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      
                        <div className="w-12 h-12 bg-gray-400 rounded-full" ><Image src={review.propic} width={50} height={50} alt="profile photo" /></div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-[#1F1F1F]">{review.author}</span>
                          {review.verified && (
                            <span className="text-green-400 text-sm">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#818181]">
                          Item purchased:{" "}
                          <span className="underline text-[#AE873E] ">
                            {review.item}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(reviews.length / slidesPerView) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

interface propsType {
  id?: number;
  img?: string | StaticImageData;
  title?: string;
  mainTitle?: string;
  desc?: string;
}

export const Slider: React.FC<propsType> = ({ img, title, mainTitle, desc }) => {
  return (
    <div className='outline-none border-none relative w-full h-full'>
      {/* Absolute positioning for the text content overlay */}
      <div className="absolute top-1/2 left-[10%] transform -translate-y-1/2 text-white p-4 z-10 w-full max-w-lg">
        {/* Title */}
        <h3 className='text-sm uppercase font-light tracking-widest mb-2'>{title}</h3>
        {/* Main Title */}
        <h2 className='text-6xl font-serif italic font-bold leading-tight mb-4'>{mainTitle}</h2>
        {/* Description */}
        <p className='text-base font-light mb-6'>{desc}</p>
        {/* Call-to-action button */}
        <button className='bg-white text-black py-4 px-8 rounded-full flex items-center justify-center space-x-2 text-sm font-semibold hover:bg-gray-200 transition-colors'>
          <span>Shop Now</span>
          <FaArrowRight />
        </button>
      </div>

      {/* Background image, fills the container */}
      {img && (
        <Image
          className='w-full h-full object-cover'
          src={img}
          alt=""
          width={2000}
          height={2000}
        />
      )}
    </div>
  );
};

export default Slider;

import React from 'react';
import Image from 'next/image';
import assets from '../../../public/assets/assets';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const CaringPasio = () => {
  return (
    <section className='bg-[#FFE8CB]'>
        <div className='container mx-auto lg:py-[100px] px-[15px] md:px-[50px] lg:px-[100px]'>
            <div className=' flex-cols lg:flex justify-between items-center gap-[50px]'>
            <div className=' w-full lg:w-2/3 '>
                    <h2 className='text-[50px]  text-gray-900 leading-tight'>Caring for Your Skin Is Still Our Passion</h2>
                    <p className='pt-[24px] pb-[60px] text-[20px]'>We believe in creating soap that’s kind to both your skin and the planet. Every Lov Born bar is handcrafted using natural, ethically sourced ingredients—free from harsh chemicals and packed in eco-conscious materials. From nourishing oils to gentle botanicals, our soaps are designed to cleanse with care and leave a lasting glow.</p>
                    <button className='bg-white text-black py-4 px-8 border border-[#1F1F1F80] rounded-[50px] uppercase flex items-center justify-center space-x-2 text-[16px] hover:bg-gray-200 transition-colors'>
  <span>Explore our instagram</span>
  <FaArrowRight />
</button>
                </div>
                <div className='w-full lg:w-2/5'>
                    <Image src={assets.product_elp} alt="Caring Passion" width={300} height={400} className="w-full h-full object-cover"/>
                </div>
                
            </div>
        </div>  
    </section>
  );
};

export default CaringPasio;
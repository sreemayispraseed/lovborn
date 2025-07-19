
import React from 'react'
import Image from 'next/image'
import { StaticImageData } from "next/image";
interface propsType {
    id?:number;
    img?: string | StaticImageData;
    title?: string;
    mainTitle? : string;
    desc?: string;

}

export const Slider:React.FC<propsType> = ({img,title,mainTitle,desc,id}) => {
  return (
    <div className='outline-none border-none relative'>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <h3 className='text-white text-[19px] font-bold'>{title}</h3>
    <h2 className='text-white text-[62px] font-bold'>{mainTitle}</h2>
    <p className='text-white text-[19px] font-bold'>{desc}</p>
    <button className='bg-white text-black py-2 px-4 rounded-full'>Shop Now</button>
</div>
{img && (
<Image className='w-full h-full object-cover' src={img} alt="" width={2000} height={2000}/>
)}
    </div>
  )
}
export default Slider

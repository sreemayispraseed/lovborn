
"use client";
import assets from "../../../public/assets/assets";
import Image from "next/image";
export default function Contactus() {
    return (
        <>
        <section>
            <div className="container mx-auto  px-[15px] md:px-[50px] lg:px-[100px]">
                <div className="flex items-start  py-3 md:py-6 lg:py-[100px]" >
                    <div className="w-2/6">
                        <h2 className="text-[30px]">Message Us</h2>
                    </div>
                    <div className="w-2/3">
                    <div className="contctform ">
          <form
            
          >
            <div className="md:grid md:grid-cols-2 md:gap-5">
              <input
                type="text"
                className="hidden"
                name="SingleLine2"
                
              />

              <div className="mb-[30px]">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                First Name
                </label>
                <input
                  type="text"
                  name="SingleLine"
                  id="SingleLine"
                  required
                  
                  className=" gry-placeholder w-full border-b border-gray-300 bg-dgray px-0 pb-3 focus:border-gray-300 focus:ring-0"
                  placeholder="Enter your name"
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                />
                
              </div>
              <div className="mb-[30px]">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                Last Name
                </label>
                <input
                 type="text"
                 name="SingleLine"
                 id="SingleLine"
                 required
                 
                  maxLength={255}
                  className=" gry-placeholder w-full border-b border-gray-300 bg-dgray px-0 pb-3 focus:border-gray-300 focus:ring-0"
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                  placeholder="Enter your name"
                />
                
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-5">
              <div className="mb-[30px]">
                <label className="mb-2 block text-sm font-medium text-gray-700 ">
                Phone Number
                </label>
                <input
                  type="number"
                  name="PhoneNumber_countrycode"
                  id="international_PhoneNumber_countrycode"
                
                  maxLength={255}
                  className=" gry-placeholder w-full border-b border-gray-300  bg-dgray px-0 pb-3   focus:border-gray-300 focus:ring-0"
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-[30px]">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
                </label>
                <input
                   type="email"
                   name="Email"
                   required
                  className=" gry-placeholder w-full border-b border-gray-300 bg-dgray px-0 pb-3 focus:border-gray-300 focus:ring-0"
                  placeholder="Enter your email"
                  style={{
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                  }}
                  
                  
                />
               
              </div>
            </div>
            

            <div className="mb-[30px]">
              <label className="mb-2 block text-sm font-medium text-gray-700 lg:mb-[40px]">
                Message
              </label>
              <textarea
                name="MultiLine"
               
                maxLength={65535}
                placeholder="Enter your message"
                className="gry-placeholder  h-[50px] w-full border-b border-gray-300 bg-dgray px-0 pb-3 text-gray1 focus:border-gray-300 focus:ring-0"
                style={{
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              />
            <p className="mt-5"><strong>In submitting this form, you are agreeing to Privacy Policy.</strong></p>
            </div>

                <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
                  <div >
              </div>
            <button
              className=" cursor-pointer mr-auto  Sh-fit md:my-0 mt-4 mb-[100px] hover:bg-prtext-primary group   flex items-center space-x-2 rounded-full border border-primary px-6 py-2 text-black transition duration-300 ease-in  hover:shadow-lg md:mb-0"
              type="submit"
            >
              <span className="fnt-lexend uppercase duration-300 ease-in group-hover:text-black">
                Submit enquiry
              </span>
              <div className=" bg-primary p-1">
                <Image src={assets.right_arrow} alt="right_arrow" width={20} height={20} />
              </div>
            </button>
            
            </div>
          </form>
        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-[#FFE8CB]">
            <div className="container mx-auto  px-[15px] md:px-[50px] lg:px-[100px] py-3 md:py-6 lg:py-[100px]">
                <div className="flex items-start   border-t border-[#1F1F1F]  pt-[40px]" >
                    <div className="w-2/6">
                        <h2 className="font30">General enquires</h2>
                    </div>
                    <div className="w-2/3">
                    <div className="flex items-center justify-between pb-9">
            <a
              href="mailto:support@lovborn.com"
              className="font65  text-black"
            >
              support@lovborn.com
            </a>
            <span><Image src={assets.right_arrow} alt="location" width={20} height={20} /></span>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between border-t border-[#1F1F1F]  py-9">
            <a
              href="tel:+919876543210"
              className="font65 text-black"
            >
              +91 98765 43210
            </a>
            <span><Image src={assets.right_arrow} alt="location" width={20} height={20} /></span>
          </div>

          {/* Address */}
          <div className="border-t border-[#1F1F1F]  py-6">
            <div className="flex items-start flex-col gap-6">
              <Image src={assets.location} alt="location" width={20} height={20} /> 
              <p className="font30 leading-relaxed">
                Lov Born HQ,
                <br />
                4th Floor, Elanza Crest Tower
                <br />
                Seaport-Airport Road, Kakkanad
                <br />
                Ernakulam, Kerala – 682030, India
              </p>
              <a
              href="#"
              className=" inline-flex items-center font16 border-b border-black uppercase pb-4"
            >
              Locate Us <span className="pl-3"><Image src={assets.right_arrow} alt="location" width={20} height={20} /></span>
            </a>
            </div>
           
            </div>
          
                </div>
            </div>
            </div>
        </section>
        <section className="">
            <div className="container mx-auto  px-[15px] md:px-[50px] lg:px-[100px] py-3 md:py-6 lg:py-[100px]">
                <div className="flex items-start   border-t border-[#1F1F1F]  pt-[40px]" >
                    <div className="w-2/6">
                        <h2 className="font30">Socials</h2>
                    </div>
                    <div className="w-2/3">
                    <div className="flex items-center justify-between pb-9">
            <h3
              
              className="font65  text-black"
            >
              Instagram
            </h3>
            <span><Image src={assets.right_arrow} alt="location" width={20} height={20} /></span>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between border-t border-[#1F1F1F]  py-9">
          <h3
              
              className="font65  text-black"
            >
              Facebook
            </h3>
            <span><Image src={assets.right_arrow} alt="location" width={20} height={20} /></span>
          </div>

          <div className="flex items-center justify-between border-t border-[#1F1F1F]  py-9">
          <h3
              
              className="font65  text-black"
            >
           X
            </h3>
            <span><Image src={assets.right_arrow} alt="location" width={20} height={20} /></span>
          </div>
          <div className="flex items-center justify-between border-t border-[#1F1F1F]  py-9">
          <h3
              
              className="font65  text-black"
            >
             LinkedIn
            </h3>
            <span><Image src={assets.right_arrow} alt="location" width={20} height={20} /></span>
          </div>
          
          
                </div>
            </div>
            </div>
        </section>
        </>
    )   
}
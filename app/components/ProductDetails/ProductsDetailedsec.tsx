import Image from 'next/image';
import assets from "../../../public/assets/assets";
const ProductPage = () => {
  return (
    <div className=" font-sans py-12 px-4 lg:px-24">
      <div className="container mx-auto  lg:flex lg:p-12">
        {/* Left Side: Images */}
        <div className="lg:w-1/2 flex flex-col items-center">
          {/* Main Product Image */}
          <div className="w-full h-auto">
            <Image
              src={assets.image1}
              alt="Main Classic Vanilla Soap"
              width={600}
              height={600}
              className="w-full  shadow-md"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-4 mt-4 w-full justify-start">
            <div className="w-1/4 cursor-pointer">
              <Image
                src={assets.image2}
                alt="Thumbnail 1"
                width={200}
                height={200}
                className="w-full  border-2 border-[#B59364]"
              />
            </div>
            <div className="w-1/4 cursor-pointer">
              <Image
                src={assets.image3}
                alt="Thumbnail 2"
                width={200}
                height={200}
                className="w-full "
              />
            </div>
            <div className="w-1/4 cursor-pointer">
              <Image
                src={assets.image5}
                alt="Thumbnail 3"
                width={200}
                height={200}
                className="w-full "
              />
            </div>
            <div className="w-1/4 relative cursor-pointer">
    {/* Image as Background */}
    <Image
        src={assets.image6}
        alt="Thumbnail 3 Background"
        fill
        style={{ objectFit: "cover" }}
        className=""
    />

    {/* Button Overlay */}
    <button className="absolute inset-0  text-gray-600 rounded-lg flex items-center justify-center text-2xl  duration-300">
        →
    </button>
</div>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0 relative">
          {/* Rating */}
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .587l3.668 7.568 8.332 1.209-6.001 5.861 1.416 8.288-7.415-3.906-7.415 3.906 1.416-8.288-6.001-5.861 8.332-1.209z" />
              </svg>
            ))}
          </div>

          <h1 className="text-3xl font-bold mb-2">Classic Vanilla</h1>
          <p className="text-gray-600 mb-6">
            Classic Vanilla is a natural family luxury soap made with shea butter, almond oil, and a soothing vanilla fragrance.
          </p>

          {/* Price */}
          <div className="flex items-center mb-6 space-x-2">
            <span className="text-2xl font-bold text-gray-800">$299.00</span>
            <span className="text-gray-500 line-through">$320.50</span>
            <span className="bg-[#AE873E] text-white text-xs font-semibold px-2 py-1 rounded-[4px]">
              -10% OFF
            </span>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] mb-8 mt-12">
            {/* Feature 1 */}
            <div className="flex items-center space-x-4">
              <div className="text-[#A07F4E]">
<Image src={assets.shipping} className='w-full h-full' alt="shipping" width={20} height={20} />
              </div>
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-gray-500 text-sm">Enjoy free shipping on all orders</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-center space-x-4">
              <div className="text-[#A07F4E]">
<Image src={assets.payment} className='w-full h-full' alt="shipping" width={20} height={20} />
              </div>
              <div>
                <h3 className="font-semibold">Flexible Payment</h3>
                <p className="text-gray-500 text-sm">Pay with Multiple Credit Cards</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-center space-x-4">

              <div className="text-[#A07F4E]">
              <Image src={assets.return_icon} className='w-full h-full' alt="shipping" width={20} height={20} />

              </div>
              <div>
                <h3 className="font-semibold">14 - Days Return</h3>
                <p className="text-gray-500 text-sm">Free return/exchange within 30 days</p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex items-center space-x-4">
              <div className="text-[#A07F4E]">
<Image src={assets.support} className='w-full h-full' alt="shipping" width={20} height={20} />
              </div>
              <div>
                <h3 className="font-semibold">Premium Support</h3>
                <p className="text-gray-500 text-sm">Enjoy our premium support</p>
              </div>
            </div>
          </div>
<div className='absolute bottom-0 left-15 right-0'>
<button className="w-full bg-[#AE873E] text-white font-semibold py-3   transition-colors">
            BUY NOW ON AMAZON
          </button>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-8 justify-center lg:justify-start">
            <a href="#" className="text-gray-500 hover:text-gray-700  p-3 rounded-full border border-gray">

<Image src={assets.fb} className='w-full h-full' alt="shipping" width={20} height={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700  p-3 rounded-full border border-gray">
<Image src={assets.insta} alt='' width={20} height={20}  className='w-full h-full'/>            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700  p-3 rounded-full border border-gray">
<Image src={assets.twitter} alt='' width={20} height={20} className='w-full h-full' />            </a>
          </div>
</div>
          
        </div>
      </div>

      {/* Product Information Tabs */}
      <div className=" mt-8 p-8">
        <div className="flex border-b border-gray-300">
          <button className="py-4 px-6 text-lg font-semibold border-b-2 border-[#B59364] text-[#A07F4E]">DESCRIPTION</button>
          <button className="py-4 px-6 text-lg font-semibold text-gray-500 hover:text-gray-700">ADDITIONAL INFORMATION</button>
          <button className="py-4 px-6 text-lg font-semibold text-gray-500 hover:text-gray-700">REVIEWS</button>
        </div>
        <div className="mt-6 text-gray-600">
          <p>
            Classic Vanilla is a luxurious, family-friendly soap crafted with care using rich shea butter, nourishing almond oil, and the comforting aroma of natural vanilla. Designed to suit all skin types, this gentle bar deeply moisturizes while offering a calming cleansing experience. With every lather, Classic Vanilla brings warmth, softness, and a subtle scent that lingers—making it the perfect everyday indulgence for the whole family.
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default ProductPage;
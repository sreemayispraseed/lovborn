import Image from 'next/image';
import assets from "../../../public/assets/assets";
const ProductPage = () => {
  return (
    <div className="bg-gray-100 font-sans py-12 px-4 lg:px-24">
      <div className="container mx-auto bg-white rounded-lg shadow-lg overflow-hidden lg:flex lg:p-12">
        {/* Left Side: Images */}
        <div className="lg:w-1/2 flex flex-col items-center">
          {/* Main Product Image */}
          <div className="w-full h-auto">
            <Image
              src={assets.image1}
              alt="Main Classic Vanilla Soap"
              width={600}
              height={600}
              className="w-full rounded-lg shadow-md"
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
                className="w-full rounded-lg border-2 border-[#B59364]"
              />
            </div>
            <div className="w-1/4 cursor-pointer">
              <Image
                src={assets.image3}
                alt="Thumbnail 2"
                width={200}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-1/4 cursor-pointer">
              <Image
                src={assets.image5}
                alt="Thumbnail 3"
                width={200}
                height={200}
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-1/4 flex items-center justify-center">
            <Image
                src={assets.image6}
                alt="Thumbnail 3"
                width={200}
                height={200}
                className="w-full rounded-lg relative"
              />
              <button className="w-full h-full bg-gray-200 text-gray-600 rounded-lg flex items-center justify-center text-2xl hover:bg-gray-300">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
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
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
              -10% OFF
            </span>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Feature 1 */}
            <div className="flex items-center space-x-4">
              <div className="text-[#A07F4E]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-gray-500 text-sm">Enjoy free shipping on all orders</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-center space-x-4">
              <div className="text-[#A07F4E]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              </div>
              <div>
                <h3 className="font-semibold">Flexible Payment</h3>
                <p className="text-gray-500 text-sm">Pay with Multiple Credit Cards</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-center space-x-4">
              <div className="text-[#A07F4E]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0l-7.17-7.17a2 2 0 0 1 0-2.83l7.17-7.17a2 2 0 0 1 2.83 0l7.17 7.17a2 2 0 0 1 0 2.83z"/><polyline points="9 11 11 13 15 9"/></svg>
              </div>
              <div>
                <h3 className="font-semibold">14 - Days Return</h3>
                <p className="text-gray-500 text-sm">Free return/exchange within 30 days</p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex items-center space-x-4">
              <div className="text-[#A07F4E]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.5c.34 0 .5-.17.5-.5V12.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v8.5c0 .33.16.5.5.5zm-5 0c.34 0 .5-.17.5-.5v-8.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v8.5c0 .33.16.5.5.5zm10 0c.34 0 .5-.17.5-.5v-8.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v8.5c0 .33.16.5.5.5zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"/></svg>
              </div>
              <div>
                <h3 className="font-semibold">Premium Support</h3>
                <p className="text-gray-500 text-sm">Enjoy our premium support</p>
              </div>
            </div>
          </div>

          {/* Buy Button */}
          <button className="w-full bg-[#B59364] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#B59364]/80 transition-colors">
            BUY NOW ON AMAZON
          </button>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-8 justify-center lg:justify-start">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.871v-6.985h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.774-1.63 1.57v1.88h2.77l-.443 2.89h-2.327v6.985C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.93 4.93 0 0 0-8.384 4.558 13.924 13.924 0 0 1-10.163-5.148 4.934 4.934 0 0 0 1.523 6.574 4.931 4.931 0 0 1-2.228-.616v.061a4.928 4.928 0 0 0 3.957 4.827 4.932 4.932 0 0 1-2.227.085 4.933 4.933 0 0 0 4.604 3.42 9.854 9.854 0 0 1-6.108 2.105 13.947 13.947 0 0 0 7.558 2.219c9.053 0 13.999-7.494 13.999-13.986 0-.209 0-.42-.015-.63A9.928 9.928 0 0 0 24 4.557z"/></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07c3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.148 3.228-1.669 4.747-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.669-4.746 4.919-4.919 1.266-.057 1.645-.07 4.85-.07zm0-2.163c-3.846 0-4.305.021-5.808.084-3.668.176-5.466 2.016-5.642 5.642-.063 1.503-.084 1.962-.084 5.808s.021 4.305.084 5.808c.176 3.668 2.016 5.466 5.642 5.642 1.503.063 1.962.084 5.808.084s4.305-.021 5.808-.084c3.668-.176 5.466-2.016 5.642-5.642.063-1.503.084-1.962.084-5.808s-.021-4.305-.084-5.808c-.176-3.668-2.016-5.466-5.642-5.642-1.503-.063-1.962-.084-5.808-.084z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Product Information Tabs */}
      <div className="bg-white rounded-lg shadow-lg mt-8 p-8">
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
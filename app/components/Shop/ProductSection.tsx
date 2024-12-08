import Image from "next/image";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import DetailImg from "@/public/assets/detail.png";
import { BiHeart } from "react-icons/bi";
import Detailimg2 from "@/public/assets/carouselCaptions.png";
import Detailimg3 from "@/public/assets/single-product-1-thumb-1.jpg";
import ProductSecondSection from "./ProductSecondSection";


const ProductPage = () => {
  return (
    <div className="">
      <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
        <nav className="text-sm flex justify-start  sm:px-10 md:px-[60px] lg:px-[30px] xl:px-[70px] 2xl:px-[80px] text-gray-500 mb-6 px-10 md:pb-16">
          Home / <span>Shop</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 sm:gap-y-44 gap-8">
          <div className="flex flex-col justify-center items-start pt-10">
            <div className="col-span-3 flex justify-center items-start px-5 sm:px-10 md:px-[60px] lg:px-[30px] xl:px-[70px] 2xl:px-[80px]">
              <div className="w-full py-10 h-[300px] md:w-[500px] md:h-[400px]  flex items-center justify-center">
                <Image
                  src={DetailImg}
                  alt="Main GamePad"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="pl-10 md:ml-10 flex  pt-10 w-2/4 md:w-1/4 sm:flex-row justify-start items-center gap-4">
              <Image src={Detailimg2} alt="img" />
              <Image src={Detailimg3} alt="img" />
            </div>
          </div>
          <div>
            <h1 className="text-base md:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
              Floating Phone
            </h1>
            <p className="text-yellow-500 mb-2 flex items-center">
              ★★★★☆{" "}
              <span className="text-sm text-gray-500 ml-2">(150 Reviews)</span>
            </p>
            <div>
              <p className="text-2xl font-semibold text-gray-800 mb-6">
                $192.00
              </p>
              <div className="text-gray-500">
                Availability: <span className="text-blue-500">in stock</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble-free install & mess-free removal.
              Pressure-sensitive.
            </p>

            <div className="border-b border-2 mb-6"></div>

            <div className="mb-6">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-blue-500"></div>
                <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-red-500"></div>
                <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-blue-500"></div>
                <div className="w-8 h-8 rounded-full bg-black border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-blue-500"></div>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex items-center gap-4">
              <button className="w-2/6 sm:w-3/6 md:w-auto px-6 lg:px-8 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
                Buy Now
              </button>
              <button className="w-10  px-3 py-3 border rounded-full bg-white hover:bg-gray-100">
                <BiHeart />
              </button>
              <button className="w-10  px-3 py-3 border rounded-full bg-white hover:bg-gray-100">
                <IoCartOutline />
              </button>
              <button className="w-10 md:w-auto px-3 py-3 border rounded-full bg-white hover:bg-gray-100">
                <IoEyeOutline />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 pt-6">
        <p>Description</p>
        <p>Additional Information</p>
        <p>
          Reviews <span className="text-green-500">0</span>
        </p>
      </div>
      <div className="border-b border-2  my-5"></div>

      <ProductSecondSection />
    </div>
  );
};

export default ProductPage;

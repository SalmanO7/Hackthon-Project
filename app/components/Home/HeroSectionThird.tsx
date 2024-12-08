import Image from "next/image";
import React from "react";
import Img1 from "@/public/assets/product-cover-5 (1).png";
import Img2 from "@/public/assets/product-cover-5 (2).png";
import Img3 from "@/public/assets/product-cover-5 (3).png";
import Img4 from "@/public/assets/product-cover-5 (4).png";
import Img from "@/public/assets/product-cover-5.png";
import Img5 from "@/public/assets/product-cover-5 (5).png";
import Img6 from "@/public/assets/product-cover-5 (6).png";
import Img7 from "@/public/assets/product-cover-5 (7).png";

const HeroSectionThird = () => {
  return (
    <div className="w-full px-4 sm:px-16  md:px-36">
      <div className="flex justify-center items-center flex-col py-20">
        <p className="text-gray-400">Featured Products</p>
        <h3 className="font-semibold">BESTSELLER PRODUCTS</h3>
        <p className="text-[11px] md:text-sm text-center">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-20 md:gap-x-5 lg:gap-x-10 gap-8">
        <div className="flex flex-col justify-center gap-2 items-center">
          <Image src={Img} alt="Cover img" />
          <h2 className="font-semibold">Graphic</h2>
          <h4 className="text-gray-500">Engish Department</h4>
          <p className="text-gray-300">
            $16.48 <span className="text-green-800 font-semibold">$6.58</span>
          </p>
          <div className="flex justify-center items-start gap-1">
            <span className="bg-red-500 w-1 p-2 rounded-full"></span>
            <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
            <span className="bg-black w-1 p-2 rounded-full"></span>
            <span className="bg-green-500 w-1 p-2 rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          <Image src={Img1} alt="Cover img" />
          <h2 className="font-semibold">Graphic</h2>
          <h4 className="text-gray-500">Engish Department</h4>
          <p className="text-gray-300">
            $16.48 <span className="text-green-800 font-semibold">$6.58</span>
          </p>
          <div className="flex justify-center items-start gap-1">
            <span className="bg-red-500 w-1 p-2 rounded-full"></span>
            <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
            <span className="bg-black w-1 p-2 rounded-full"></span>
            <span className="bg-green-500 w-1 p-2 rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          <Image src={Img2} alt="Cover img" />
          <h2 className="font-semibold">Graphic</h2>
          <h4 className="text-gray-500">Engish Department</h4>
          <p className="text-gray-300">
            $16.48 <span className="text-green-800 font-semibold">$6.58</span>
          </p>
          <div className="flex justify-center items-start gap-1">
            <span className="bg-red-500 w-1 p-2 rounded-full"></span>
            <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
            <span className="bg-black w-1 p-2 rounded-full"></span>
            <span className="bg-green-500 w-1 p-2 rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          <Image src={Img3} alt="Cover img" />
          <h2 className="font-semibold">Graphic</h2>
          <h4 className="text-gray-500">Engish Department</h4>
          <p className="text-gray-300">
            $16.48 <span className="text-green-800 font-semibold">$6.58</span>
          </p>
          <div className="flex justify-center items-start gap-1">
            <span className="bg-red-500 w-1 p-2 rounded-full"></span>
            <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
            <span className="bg-black w-1 p-2 rounded-full"></span>
            <span className="bg-green-500 w-1 p-2 rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          <Image src={Img4} alt="Cover img" />
          <h2 className="font-semibold">Graphic</h2>
          <h4 className="text-gray-500">Engish Department</h4>
          <p className="text-gray-300">
            $16.48 <span className="text-green-800 font-semibold">$6.58</span>
          </p>
          <div className="flex justify-center items-start gap-1">
            <span className="bg-red-500 w-1 p-2 rounded-full"></span>
            <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
            <span className="bg-black w-1 p-2 rounded-full"></span>
            <span className="bg-green-500 w-1 p-2 rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          <Image src={Img5} alt="Cover img" />
          <h2 className="font-semibold">Graphic</h2>
          <h4 className="text-gray-500">Engish Department</h4>
          <p className="text-gray-300">
            $16.48 <span className="text-green-800 font-semibold">$6.58</span>
          </p>
          <div className="flex justify-center items-start gap-1">
            <span className="bg-red-500 w-1 p-2 rounded-full"></span>
            <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
            <span className="bg-black w-1 p-2 rounded-full"></span>
            <span className="bg-green-500 w-1 p-2 rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          <Image src={Img6} alt="Cover img" />
          <h2 className="font-semibold">Graphic</h2>
          <h4 className="text-gray-500">Engish Department</h4>
          <p className="text-gray-300">
            $16.48 <span className="text-green-800 font-semibold">$6.58</span>
          </p>
          <div className="flex justify-center items-start gap-1">
            <span className="bg-red-500 w-1 p-2 rounded-full"></span>
            <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
            <span className="bg-black w-1 p-2 rounded-full"></span>
            <span className="bg-green-500 w-1 p-2 rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          <Image src={Img7} alt="Cover img" />
          <h2 className="font-semibold">Graphic</h2>
          <h4 className="text-gray-500">Engish Department</h4>
          <p className="text-gray-300">
            $16.48 <span className="text-green-800 font-semibold">$6.58</span>
          </p>
          <div className="flex justify-center items-start gap-1">
            <span className="bg-red-500 w-1 p-2 rounded-full"></span>
            <span className="bg-blue-500 w-1 p-2 rounded-full"></span>
            <span className="bg-black w-1 p-2 rounded-full"></span>
            <span className="bg-green-500 w-1 p-2 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionThird;
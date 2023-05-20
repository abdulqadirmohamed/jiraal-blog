import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const NewsCards = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          className="w-full h-[250px]"
          src="https://www.planetware.com/wpimages/2021/01/africa-best-cities-cape-town-south-africa.jpg"
          alt=""
        />
        <div className=" text-white backdrop-blur w-full absolute bottom-0 p-4 flex justify-between items-center">
          <div>
            <h1 className="font-semibold hover:underline cursor-pointer">
              Meta Clone
            </h1>
            <span className="text-sm font-light">May 12, 2023</span>
          </div>
          <div className="flex gap-1">
            <button className="text-black bg-[#F8AB0A] px-4 py-1 rounded-full">
              Africa
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <Link href={`blog`} className="flex flex-col gap-2 my-2">
        <div className="hidden md:block text-lg font-semibold underline">
          Meta Clone
        </div>
        <p className="text-sm">
          Join me as I build a Real Time Messenger App with Next.js 13. You'll
          learn how to do the following in this build...
        </p>
        <div className="text-sm font-semibold hover:underline flex items-center gap-1">
          <span>Read post</span>
          <FiArrowUpRight />
        </div>
      </Link>
      <div></div>
    </div>
  );
};

export default NewsCards;

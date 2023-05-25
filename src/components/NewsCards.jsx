import React from "react";
import Image from "next/image";
import Link from "next/link";



const NewsCards = ({tag, postID, title, cover}) => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <Image
          className="w-full h-[250px]"
          src={cover}
          alt={title}
          width={500}
          height={500}
        />
        <div className=" text-white backdrop-blur w-full absolute bottom-0 p-4 flex justify-between items-center">
          <div>
            <h1 className="font-semibold hover:underline cursor-pointer">
              {title}
            </h1>
            <span className="text-sm font-light">May 12, 2023</span>
          </div>
          <div className="flex gap-1">
            <Link href={`/blog/${postID}`} className="text-black bg-[#F8AB0A] px-4 py-1 rounded-full capitalize">
              {tag}
            </Link>
          </div>
        </div>
      </div>
      {/*  */}
      <Link href={`blog/${postID}`} className="flex flex-col gap-2 my-2">
        <div className="hidden md:block text-lg font-semibold underline">
        {title}
        </div>
        <p className="text-sm">
          Join me as I build a Real Time Messenger App with Next.js 13. You'll
          learn how to do the following in this build...
        </p>
        <div className="text-sm font-semibold hover:underline flex items-center gap-1">
          <span>Read post</span>
        </div>
      </Link>
      <div></div>
    </div>
  );
};

export default NewsCards;

import Link from "next/link";
import React from "react";
import logo from '../img/logo.jpg'
import Image from "next/image";

export const Header = () => {
  return (
    <div>
      <div className="md:w-[70%] w-[90%] mx-auto mt-4">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              className="rounded-full w-11"
              src={logo}
              alt="jiraal"
            />
            <h1>JIRAAL BLOG</h1>
          </Link>
          <div>
            <button className="text-white bg-[#2341D9] px-6 py-2 rounded-full">
              Signup to the Jiraal
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl font-extrabold">Jiraal's Daily Blog</h1>
          <span className="font-bold">
            Welcome to Every Developers favourite blog in the Devosphere
          </span>
        </div>
      </div>
      <div className="my-6 w-full h-[1px] bg-[#2341D9]"></div>
    </div>
  );
};

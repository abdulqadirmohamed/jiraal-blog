import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div>
      <div className="md:w-[70%] w-[90%] mx-auto mt-4">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <Link href="/" className="flex gap-2 items-center">
            <img
              className="rounded-full w-11"
              src="https://shorturl.at/qQSVW"
              alt="The PAPAFAM"
            />
            <h1>The PAPAFAM</h1>
          </Link>
          <div>
            <button className="bg-black text-[#F8AB0A] px-6 py-2 rounded-full">
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
      <div className="my-6 w-full h-[1px] bg-[#F8AB0A]"></div>
    </div>
  );
};

import React from "react";

export const Header = () => {

  return (
    <div className="w-[70%] mx-auto mt-4">
      {/* Logo */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            className="rounded-full w-11"
            src="https://shorturl.at/qQSVW"
            alt="The PAPAFAM"
          />
          <h1>The PAPAFAM</h1>
        </div>
        <div>
          <button className="bg-black text-[#F8AB0A] px-6 py-2 rounded-full">
            Signup to the jiiraal
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-4xl font-extrabold">Jiiraal's Daily Blog</h1>
        <span className="font-bold">
          Welcome to Every Developers favourite blog in the Devosphere
        </span>
      </div>
    </div>
  );
};

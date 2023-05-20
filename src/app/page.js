"use client"; // This is a client component 👈🏽

import { News } from "@/components/News";

export default function Home() {
  return (
    <div>
      <div className="my-6 w-full h-[1px] bg-[#F8AB0A]"></div>
      <div className="md:w-[70%] w-[90%]  mx-auto mt-4">
        <News />
      </div>
    </div>
  );
}

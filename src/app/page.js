"use client"; // This is a client component 👈🏽

import { Header } from "@/components/Header";
import { News } from "@/components/News";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="my-6 w-full h-[1px] bg-[#F8AB0A]"></div>
      <div className="md:w-[70%] w-[90%]  mx-auto mt-4">
        <News />
      </div>
    </div>
  );
}

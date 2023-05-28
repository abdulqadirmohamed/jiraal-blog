//"use client"; // This is a client component 👈🏽


import { News } from "@/components/News";

export default function Home() {
  return (
    <div>
      <div className="mt-4">
          <News />
      </div>
    </div>
  );
}

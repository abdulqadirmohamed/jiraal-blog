"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/components/supabase";
import { BiTime } from "react-icons/bi";

import { useRouter } from "next/navigation";

const page = ({ params }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const { data, error } = await supabase.
      from("blog").select("tag, id")
      setTags(data);
    } catch {
      alert(error);
    }
  };
  
  return (
    <div className="grid grid-cols-5 gap-6">
      {/* Details */}
      <div className="col-span-4">
        <h1 className="text-2xl font-semibold mb-3">{params.id}</h1>
        <hr />
        <div className="my-4 flex gap-4 text-xs text-gray-500 divide-x">
          <div className="flex items-center gap-1">
            <BiTime size={20} />
            <span> 10 hours ago</span>
          </div>
          <div className="divide-x"></div>
          <Link href="#" className="hover:underline">
            Sports
          </Link>
        </div>
        <img
          src="https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/1053/production/_129797140_gettyimages-1492013739.jpg"
          alt=""
        />
        <h1 className="font-bold my-3">
          Evan Ferguson scored twice in the first half as Brighton beat
          Southampton in the Premier League to secure European football for the
          first time in their history.
        </h1>
        <p>
          The 18-year-old forward opened the scoring with a powerful low shot
          past Saints goalkeeper Alex McCarthy before doubling the Seagulls'
          advantage with a first-time finish from inside the area.
        </p>
      </div>
      {/* Top Story */}
      <div>
        <h1>Tags</h1>
        <div className="my-4 grid grid-cols-2 gap-2">
          {tags?.map((tag) => (
            <Link
              href={`/tags/${tag.tagLink}`}
              key={tag.id}
              className="text-white text-center capitalize bg-[#2341D9] hover:underline px-4 py-1 rounded-full"
            >
              {tag.tags}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

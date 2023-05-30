"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/components/supabase";
import { BiTime } from "react-icons/bi";

// import { useRouter } from "next/router";
import { useRouter } from 'next/navigation';


const page = () => {
  const router = useRouter(); 
    // const { id } = router.query
    const { id } = router

  const [article, setArticle] = useState ({});


  useEffect(() => {
    async function getArticle() {
      const { data, error } = await supabase
        .from("blog")
        .select("*")
        .filter("id", "eq", id)
        .single();

      if (error) {
        console.log(error);
      } else {
        setArticle(data);
      }
    }
    
    // if(id !== "undefined") {
    //   getArticle();
    // }
    getArticle();
    
  }, [id]);
  return (
    <div className="grid grid-cols-5 gap-6">
      {/* Details */}
      <div className="col-span-4">
        <h1 className="text-2xl font-semibold mb-3"></h1>
        <hr />
        <div className="my-4 flex gap-4 text-xs text-gray-500 divide-x">
          <div className="flex items-center gap-1">
            <BiTime size={20} />
            <span> 10 hours ago</span>
          </div>
          <div className="divide-x"></div>
          <Link href="#" className="hover:underline">
            Climate
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
          {/* {tags?.map((tag) => (
            <Link
              href={`/tags/${tag.tag}`}
              key={tag.id}
              className="text-white text-center capitalize bg-[#2341D9] hover:underline px-4 py-1 rounded-full"
            >
              {tag.tag}
            </Link>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default page;

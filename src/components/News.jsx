"use client"
import { useState, useEffect } from "react";
import NewsCards from "./NewsCards";

import { supabase } from "./supabase";

// export async function getServerSideProps() {
//   const { data: posts } = await supabase.from('blog').select('*');
//   return {
//     props: {
//       posts
//     },
//   };
// }

// console.log(supabase)

export const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("blog").select("*");
      setPosts(data);
    } catch {
      alert(error);
    }
  };
  return (
    <div className="md:grid grid-cols-2 gap-6">
      {posts?.map((post) => (
        <div key={post.id}>
          <NewsCards tag={post.tag} title={post.title} cover={post.cover} postID={post.id} />
        </div>
      ))}
    </div>
  );
};


import React, { useEffect, useState } from "react";
import PostCards from "./PostCards";
import { supabase } from "./supabase";

export const Posts = () => {
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
    <div className="my-10">
      {posts.map((post) => (
        <PostCards key={post.id} postID={post.id} title={post.title} cover={post.cover} />
      ))}
    </div>
  );
};

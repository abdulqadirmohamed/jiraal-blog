import NewsCards from "./NewsCards";
import { useState, useEffect } from "react";

export const News = () => {
  const posts = [
    { id: 1, text: "lorem", reaction: 1 },
    { id: 2,  text: "lorem", reaction: 23 },
    { id: 3,  text: "lorem", reaction: 23 },
    { id: 4,  text: "lorem", reaction: 23 }
  ];

  return (
    <div className="md:grid grid-cols-2 gap-6">
      {posts.map((post) => (
        <div key={post.id}>
          <NewsCards />
        </div>
      ))}
    </div>
  );
};

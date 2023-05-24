import NewsCards from "./NewsCards";

export const News = () => {
  const posts = [
    { id: 1, text: "lorem", tag: 'africa'},
    { id: 2,  text: "lorem", tag: 'history' },
    { id: 3,  text: "lorem", tag: 'islam' },
    { id: 4,  text: "lorem", tag: 'technology' }
  ];

  return (
    <div className="md:grid grid-cols-2 gap-6">
      {posts.map((post) => (
        <div key={post.id}>
          <NewsCards tag={post.tag} postID={post.id}/>
        </div>
      ))}
    </div>
  );
};

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const data = [
  {
    id: 1,
    title: "Do things with things",
    subtitle: "It is wonderful",
    img: "https://images.unsplash.com/photo-1576076819613-26f8537ae375?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 2,
    title: "Do other things with other things",
    subtitle: "It is more wonderful",
    img: "https://images.unsplash.com/photo-1561127954-65393e6644d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
  },
  {
    id: 3,
    title: "Do nothing",
    subtitle: "It is something",
    img: "https://images.unsplash.com/photo-1541560584704-f2767960951a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 4,
    title: "You know nothing",
    subtitle: "Perhaps you are Jon Snow",
    img: "https://images.unsplash.com/photo-1625986862690-dae7d9137285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

function Blog() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    setPosts(data);
  }, []);
  return (
    <div>
      <h1>Blog page</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
          textAlign: "center",
        }}
      >
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id}>
                <Link to={`${post.id}`}>
                  <h3>{post.title}</h3>
                  <p>{post.subtitle}</p>
                  <img src={post.img} alt="" />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Blog;

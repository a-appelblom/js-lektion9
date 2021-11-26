import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "./Blog";

function PostPage() {
  const [post, setPost] = useState();
  const params = useParams();
  console.log(params);
  useEffect(() => {
    if (params.id) {
      const result = data.filter((post) => post.id === parseInt(params.id));

      setPost(result[0]);
    }
  }, [params]);
  return (
    <div>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.subtitle}</p>
          <img src={post.img} alt="" />
        </div>
      )}
    </div>
  );
}

export default PostPage;

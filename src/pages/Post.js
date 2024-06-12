import { useParams } from "react-router-dom";

const Post = ({posts}) => {
    const {postId} = useParams();
    let post = posts.find(post => post.id === postId)
    return (
    <div className="container">
        <h1>{post.title}</h1>
        <div>
            {post.content}
        </div>
    </div>
    );
  };
  
  export default Post;
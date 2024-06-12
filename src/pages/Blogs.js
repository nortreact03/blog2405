import { Link } from "react-router-dom";

const Blogs = ({posts}) => {
    return (
    <div>
      <h1>Blog Articles</h1>
      <div className="blog-container row">
        {posts.map((post) => {
          return (
            <div 
              className="col-12 col-sm-6 col-lg-4"
              key={post.id}
            >
                <h3>{post.title}</h3>
               <Link to={"/post/" + post.id}>Loe edasi</Link> 
            </div>
          )
        } ) }

      </div>
    </div>
    )
  };
  
  export default Blogs;
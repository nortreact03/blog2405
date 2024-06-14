import { useParams } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const renderOption = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (<img
          src={`https:${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt="??"
        />)
      }
    }
  }
 

const Post = ({posts}) => {
    const {postId} = useParams();
    let post = posts.find(post => post.id === postId)
    let headerImageJsx = ''
    if (post.pictureUrl) {
        headerImageJsx = (
            <img class="img-fluid" src={post.pictureUrl} />
        )
    }
    return (
    <div className="container">
        <h1>{post.title}</h1>
        {headerImageJsx}
        <div>
            {documentToReactComponents(post.content, renderOption)}
        </div>
    </div>
    );
  };
  
  export default Post;
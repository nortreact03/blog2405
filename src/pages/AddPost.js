import { useState } from "react"

function AddPost({addPost}) {
   const [title, setTitle] = useState('');
   const [annotation, setAnnotation] = useState('');
   const [content, setContent] = useState('');
   const [date, setDate] = useState('');
   const [pictureUrl, setPictureUrl] = useState('');

   const submitForm = () => {
    const newPost = {
        title, annotation, content, date, pictureUrl
    }
    addPost(newPost)
   }

   return (
       <div className="container">
           <h1>Add Post</h1>
           <div className="row">
               <div className="col-sm-3">
                   Title
               </div>
               <div className="col-sm-8">
                   <input value={title} onChange={({target}) => setTitle(target.value)} className="input"  />
               </div>
           </div>
           <div className="row">
               <div className="col-sm-3">
                   Annotation
               </div>
               <div className="col-sm-8">
                   <input className="input"  />
               </div>
           </div>
           <div className="row">
               <div className="col-sm-3">
                   Date
               </div>
               <div className="col-sm-8">
                   <input className="input"  />
               </div>
           </div>
           <div className="row">
               <div className="col-sm-3">
                   Picture Url
               </div>
               <div className="col-sm-8">
                   <input value={pictureUrl} onChange={({target}) => setPictureUrl(target.value)} className="input"  />
               </div>
           </div>
           <div className="row">
               <div className="col-12">
                   Content
               </div>
               <div className="col-12">
                  <textarea value={content} onChange={({target}) => setContent(target.value)} />
               </div>
           </div>
           <button onClick={submitForm}>Add</button>
       </div>
   )


}


export default AddPost

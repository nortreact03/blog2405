import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Services from './pages/Services';
import AddPost from './pages/AddPost.js';
import { useEffect, useState } from 'react';
import Post from './pages/Post';
import { getAllPosts } from './utils.js'


export default function App() {
  const [posts, setPosts] = useState([
    {
      id: '23423rwer3',
      title: 'Minu esimene blogipostitus',
      content: 'asödfjasdöflkajd öalsjd föalsdf öalkjdf aöldfkja fölakjf aölsdfk aöldkfj aöldfkj aölfkja döaldk faölsdkfj alöfdk '
    },
    {
      id: '2324243477',
      title: 'Minu Teine blogipostitus',
      content: 'erwer rterte öalsjd föalsdf öalkjdf aöldfkja fölakjf aölsdfk aöldkfj aöldfkj aölfkja döaldk faölsdkfj alöfdk '
    },
    {
      id: '123hgh676',
      title: 'Minu kolmas blogipostitus',
      content: 'slödfgkj sdöflgkjsdfgsöldkfgj  fölakjf aölsdfk aöldkfj aöldfkj aölfkja döaldk faölsdkfj alöfdk '
    },
    {
      id: 'utyyut68768',
      title: 'Minu neljas blogipostitus',
      content: 'slödfgkj sdöflgkjsdfgsöldkfgj  fölakjf aölsdfk aöldkfj aöldfkj aölfkja döaldk faölsdkfj alöfdk '
    },
  ])

  const fetchPosts = async () => {
    let posts = await getAllPosts();
    setPosts(posts.map((p => {
      console.log(p.fields)
      const picUrl = p.fields.picture?.fields.file.url
      return {
        id: p.sys.id,
        title: p.fields.title,
        annotation: p.fields.snipet,
        content: p.fields.content,
        pictureUrl: picUrl ? 'https:' + p.fields.picture?.fields.file.url : null
      }
    })))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const addPost = async (newPost) => {
    console.log('Will post', newPost)
    try {
    const response = await fetch("http://localhost:8000/api/post", {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(newPost)

    })
  } catch (err) {
    console.log(err.message)
  }
  }

  return (
    <BrowserRouter>
      <h1>Header</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs posts={posts} />} />
          <Route path="post/:postId" element={<Post posts={posts} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="admin" element={<AddPost addPost={addPost} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <h3>Footer</h3>
    </BrowserRouter>
  );
}

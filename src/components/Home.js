import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {  doc, onSnapshot, query } from "firebase/firestore";
import { Link } from "react-router-dom";
import {db} from '../firebase'
// import {firestore} from '../firebase'
function Home() {
  const[posts,setPosts] =useState([]);

  useEffect(()=>{

    const q = query(collection(db, "posts"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts = querySnapshot.docs.map((doc) => {
        console.log(doc.id, " => ", doc.data());

        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log("posts", posts);
      setPosts(posts);
    });
   
  },[])

  return (
    <div className='home'>
      <h1>Tech Blog</h1>
      <div id="blog-by">Sudip</div>
        {posts.map((post,index)=>{
          
          return(
          <div className="post" key={`post-${index}`}>
              <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p>{post.subTitle}</p>
          </div>
          )

        })}
    </div>
  )
}

export default Home

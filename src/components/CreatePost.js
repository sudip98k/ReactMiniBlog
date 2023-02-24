import React,{useState} from 'react';
import {db} from '../firebase';
import { doc, setDoc,addDoc,collection } from "firebase/firestore"; 

import {useFormInput} from '../hooks';
function CreatePost() {
const title=useFormInput('');
 const content =useFormInput('');
 const subTitle =useFormInput('');

  function handleSubmit(e){
    e.preventDefault();

    console.log('title',title);
    console.log('subTitle',subTitle);
    console.log('content',content);
    
    // Add a new document in collection "post"
    // await setDoc(doc(db, "posts",'new-post'), {
    //     title:title.value,
    //     subTitle:subTitle.value,
    //     content:content.value
    // });
    try {
      addDoc(collection(db, "posts"), {
        title: title.value,
        content: content.value,
        subTitle: subTitle.value
        ,
      });
    } catch (e) {
      console.log(e);
    }
 }

  return (
    <div className='create-post'>
      <h1>CreatePost</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
            <label>Title</label>
            <input {...title}/>
        </div>

        <div className='form-field'>
            <label>Sub Title</label>
            <input {...subTitle}/>
        </div>

        <div className='form-field'>
            <label>Content</label>
            <textarea  {...content}></textarea>
        </div>
        <button className='create-post-btn'>CreatePost</button>
      </form>
    </div>
  )
}

export default CreatePost

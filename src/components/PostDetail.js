
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { firestore } from '../firebase';
import Radium from 'radium';

function PostDetail() {

  const [post, setPost] = useState({});
  const {postId} = useParams();

  useEffect(()=>{
    firestore.collection('posts').doc(postId).get().then((snapshot)=>{
      console.log('snapshot', snapshot.data());
      setPost(snapshot.data());
    })
  }, [postId])

  return (
    <div className='post-detail'>
        <h1 style={styles.heading}>{post.title}</h1>
        <p style={styles.postDetails}>{post.content}</p>
    </div>
  )
}

export default Radium(PostDetail);


const styles = {
  postDetails:{
    border: '1px solid green',
    paddingLeft: 10,
    borderRadius:5,
  },

  heading:{
    textAlign:'center',
    


    ':hover':{
      color:'cyan',
    },
    
    '@media (max-width:700px)':{
      color:'blue'
    }
  }
}


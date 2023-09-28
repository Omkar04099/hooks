import React from 'react';
import {firestore} from '../firebase';
import {useFormInput} from '../hooks';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
height: 33px;
  background:${(props)=>(props.primary ? '#4caf50':'purple')}  ;
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  ${(props)=>props.primary && css`
    border:1px solid ${props.bColor};
  `};
`;

function CreatePost() {

  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');
  
  function handleSubmit(e){
    e.preventDefault();

    console.log('title', title);
    console.log('sub-title', subTitle);
    console.log('content', content);
    

    firestore.collection('posts').add({
      title:title.value,
      content:content.value,
      subTitle:subTitle.value,
      createdAt:new Date()
    });
  }

  return (
    <div className='create-post'>
        <h1>Create Post</h1>

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
                <textarea {...content}></textarea>
            </div>

            <StyledButton primary bColor='purple'>Create Post</StyledButton>
        </form>
    </div>
  )
}

export default CreatePost;


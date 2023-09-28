import {Link} from 'react-router-dom';
import React from 'react';


export default function Navbar() {
  return (
    <div>
        <ul id='nav'>
            <li><Link exact to='/'>Home</Link></li>
            <li><Link exact to='create-post'>Create Post</Link></li>
            
        </ul>
    </div>
  )
}


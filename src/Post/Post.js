import React from 'react'
import PostEdit from '../PostEdit/PostEdit';
import { Link } from 'react-router-dom';
import './Post.scss'

export default function Post({ post, onClick }) { //transferring onSavePost to grandchild? not sure if is good
    //from bottom


    return (
        <div className='post col-12 col-lg-4'>
            <div className='post-box' onClick={onClick}>
                <h3>{post.title}</h3>
                <div>{post.body}</div>
                {/* <button className='deletePostBtn' onClick={ }>X</button> */}
            </div>
        </div>
    )
}

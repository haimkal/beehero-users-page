import React from 'react'
import PostEdit from '../PostEdit/PostEdit';
import { Link } from 'react-router-dom';
import './Post.scss'

export default function Post({ post, onClick }) { //transferring onSavePost to grandchild? not sure if is good
    //from bottom




    return (
        <div className='col-12 col-md-4 post'>
            <div onClick={onClick}>
                <h3>{post.title}</h3>
            </div>
            <div>{post.body}</div>
        </div>
    )
}

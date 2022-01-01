import React from 'react'
import PostEdit from '../PostEdit/PostEdit';
import { Link } from 'react-router-dom';
import './Post.scss'

export default function Post({ post, onSavePost }) {
    //from bottom




    return (
        <div className='col-12 col-md-4 post'>
            <Link to={`/post/${post.id}`}>
                <div>
                    <h3>{post.title}</h3>
                </div>
                <div>{post.body}</div>
            </Link>
            <PostEdit post={post} onSavePost={onSavePost} />
        </div>
    )
}

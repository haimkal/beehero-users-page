import React from 'react'
import PostEdit from '../PostEdit/PostEdit';
import { Link } from 'react-router-dom';
import './Post.scss'
import { deletePost } from '../redux/AsyncThunk';
import { useDispatch, useSelector } from 'react-redux';

export default function Post({ post, onClick }) {
    const dispatch = useDispatch();

    const deleteCurrentPost = (id) => () => {
        dispatch(deletePost(id))
    }

    return (
        <div className='post col-12 col-lg-4'>
            <button className='deletePostBtn' onClick={deleteCurrentPost(post.id)}>X</button>
            <div className='post-box' onClick={onClick}>
                <h3>{post.title}</h3>
                <div>{post.body}</div>
            </div>
        </div>
    )
}

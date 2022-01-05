import React from 'react';
import { deletePost } from '../redux/AsyncThunk';
import { useDispatch } from 'react-redux';
import './Post.scss';

export default function Post({ post, onClick }) {
    const dispatch = useDispatch();

    const deleteCurrentPost = (id) => () => {
        dispatch(deletePost(id))
    }

    return (
        <div className='post col-12 col-lg-3'>
            <button className='deletePostBtn' onClick={deleteCurrentPost(post.id)}>X</button>
            <div className='post-box' onClick={onClick}>
                <h3>{post.title}</h3>
                <div>{post.body}</div>
            </div>
        </div>
    )
}

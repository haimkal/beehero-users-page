import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../redux/AsyncThunk';
import Post from '../Post/Post';
import PostEdit from '../PostEdit/PostEdit';
import './UserPosts.scss'

export default function UserPosts({ user }) {
    const dispatch = useDispatch();
    const posts = useSelector(({ posts }) => posts);
    const [post, setPost] = useState(null);

    const onSavePost = (editedPost) => {
        dispatch(editPost(editedPost));
        setPost(null);
    }

    useEffect(() => {
        setPost(null);
    }, [user])

    const onPostClick = (post) => () => {
        setPost(post)
    }

    return (
        <div>
            <div className='userName'> Posts by {user?.name}: </div>
            <div className='userPosts row'>
                {posts.filter(post => post.userId === user.id).map((post) => {
                    return <Post key={JSON.stringify(post)} post={post} onClick={onPostClick(post)} />
                })}
                <div className={`postEdit${post ? ' active' : ''}`}>
                    <PostEdit key={post?.id} post={post} onSavePost={onSavePost} />
                </div>
            </div>
        </div>
    )
}

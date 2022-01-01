import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { PostService } from '../services/post.service';
import Post from '../Post/Post';
import PostEdit from '../PostEdit/PostEdit';

export default function CardPage() { //even after I deleted back to feed brings me all

    const [postEditShown, setPostEditShown] = useState(false);
    const [posts, setPosts] = useState([]);
    const { id } = useParams();

    const onSavePost = (post) => {

        let oldPost = posts.find(p => post.id === p.id)

        oldPost.title = post.title
        oldPost.body = post.body
        setPosts(posts)

    }
    useEffect(() => {
        async function getPosts() {
            const posts = await PostService.getPosts(id)
            setPosts(posts);
        }
        getPosts(id);
    }, [])



    return (
        <div className='userPosts row'>
            {posts.map((post, index) => {
                return <Post key={index} post={post} onSavePost={onSavePost} onSavePost />
            })}


            <Link to={`/`}> back to feed</Link>
        </div>
    )
}

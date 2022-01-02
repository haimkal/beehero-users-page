import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { PostService } from '../services/post.service';
import Post from '../Post/Post';
import PostEdit from '../PostEdit/PostEdit';

export default function UserPosts({ userId }) { //even after I deleted back to feed brings me all- use redux?

    const [postEditShown, setPostEditShown] = useState(false);
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);
    const { id } = useParams();

    const onSavePost = (editedPost) => {

        let post = posts.find(p => editedPost.id === p.id)
        post.title = editedPost.title
        post.body = editedPost.body

        setPosts([...posts])
    }
    useEffect(() => {
        async function getPosts() {
            const posts = await PostService.getPosts(userId)
            setPosts(posts);
        }
        getPosts().then();
    }, [userId])

    const onPostClick = (post) => () => {
        setPost(post)
    }

    return (
        <div className='userPosts row'>
            {posts.map((post, index) => {
                return <Post key={JSON.stringify(post)} post={post} onClick={onPostClick(post)} />
            })}



            {/* after I handel local state inside postEdit, remove the key */}
            <PostEdit key={post?.id} post={post} onSavePost={onSavePost} />
        </div>
    )
}

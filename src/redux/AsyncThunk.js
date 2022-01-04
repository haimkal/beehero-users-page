import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_GET_USERS, ACTION_GET_POSTS, ACTION_EDIT_POST, ACTION_DELETE_USER, ACTION_GET_CURRENT_USER } from "./Actions"

const api = {
    base: document.location.protocol + "//jsonplaceholder.typicode.com",
}

export const getUsers = createAsyncThunk(
    ACTION_GET_USERS.type,
    async () => {
        const url = `${api.base}/users`
        let users = await fetch(url);
        users = await users.json();
        if (users) {
            users = users.map(user => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                coordinates: user.address.geo,
                company: user.company.name
            }))
        }
        return users;
    }
)

export const getPosts = createAsyncThunk(
    ACTION_GET_POSTS.type,
    async (userId) => {
        const url = `${api.base}/posts`
        let posts = await fetch(url);
        posts = await posts.json();
        if (posts) {
            posts = posts.filter(post => {
                return post.userId === parseInt(userId);
            });
        }
        console.log(posts)
        return posts;
    }
)

export const editPost = createAsyncThunk(
    ACTION_EDIT_POST.type,
    async (editedPost, { getState }) => {
        const posts = [...(({ posts }) => posts)(getState())];
        let index = posts.findIndex(p => editedPost.id === p.id);
        posts[index] = editedPost;
        // posts.title = editedPost.title;
        // post.body = editedPost.body;
        return posts;
    }
)

export const deleteUser = createAsyncThunk(
    ACTION_DELETE_USER.type,
    async (userToDelete, { getState }) => {
        const users = (({ users }) => users)(getState());
        let newUsers = users.filter((user) => user.id !== userToDelete);
        return newUsers;
    }
)

// export const deletePost = 

export const getCurrentUser = createAsyncThunk(
    ACTION_GET_CURRENT_USER.type,
    async (user) => user
)
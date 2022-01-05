import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_GET_USERS, ACTION_GET_POSTS, ACTION_EDIT_POST, ACTION_DELETE_USER, ACTION_GET_CURRENT_USER, ACTION_DELETE_POST } from "./Actions"

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
    async (_, { getState }) => {
        let posts = (({ posts }) => posts)(getState())
        if (!posts.length) {
            const url = `${api.base}/posts`
            posts = await fetch(url);
            posts = await posts.json();
        }

        return posts;
    }
)

export const editPost = createAsyncThunk(
    ACTION_EDIT_POST.type,
    async (editedPost, { getState }) => {
        const posts = [...(({ posts }) => posts)(getState())];
        let index = posts.findIndex(p => editedPost.id === p.id);
        posts[index] = editedPost;
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

export const deletePost = createAsyncThunk(
    ACTION_DELETE_POST.type,
    async (postToDelete, { getState }) => {
        const posts = (({ posts }) => posts)(getState());
        let newPosts = posts.filter((post) => post.id !== postToDelete);
        return newPosts;
    }
)

export const setCurrentUser = createAsyncThunk(
    ACTION_GET_CURRENT_USER.type,
    async (user, { dispatch }) => {
        dispatch(getPosts(user.id))
        return user;
    }
)
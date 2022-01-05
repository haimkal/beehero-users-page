import { createReducer } from "@reduxjs/toolkit";
import { getUsers, getPosts, editPost, deleteUser, setCurrentUser, deletePost } from "./AsyncThunk";

const defaultState = {
    users: [],
    posts: [],
    currentUser: null
}

export default createReducer(
    defaultState,
    (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.error = '';
            state.isLoading = false;
            state.users = action.payload;
        }).addCase(getUsers.rejected, (state, action) => {
            state.error = action.payload;

        }).addCase(getPosts.fulfilled, (state, action) => {
            state.error = '';
            state.isLoading = false;
            state.posts = action.payload;
        }).addCase(getPosts.rejected, (state, action) => {
            state.error = action.payload;

        }).addCase(editPost.fulfilled, (state, action) => {
            state.posts = action.payload;
        }).addCase(editPost.rejected, (state, action) => {
            state.error = action.payload;

        }).addCase(deleteUser.fulfilled, (state, action) => {
            state.error = '';
            state.isLoading = false;
            state.users = action.payload;
        }).addCase(deleteUser.rejected, (state, action) => {
            state.error = action.payload;

        }).addCase(setCurrentUser.fulfilled, (state, action) => {
            state.error = '';
            state.isLoading = false;
            state.currentUser = action.payload;
        }).addCase(setCurrentUser.rejected, (state, action) => {
            state.error = action.payload;
            
        }).addCase(deletePost.fulfilled, (state, action) => {
            state.error = '';
            state.isLoading = false;
            state.posts = action.payload;
        }).addCase(deletePost.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
)
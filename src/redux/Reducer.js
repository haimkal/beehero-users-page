import { createReducer } from "@reduxjs/toolkit";
import { getUsers, getPosts, editPost, deleteUser, getCurrentUser } from "./AsyncThunk";

const defaultState = {
    users: [],
    posts: [],
    currentUser: {}
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
        }).addCase(deleteUser.fulfilled, (state, action) => {
            state.error = '';
            state.isLoading = false;
            state.users = action.payload;
            // state.posts = action.payload.posts;
        }).addCase(deleteUser.rejected, (state, action) => {
            state.error = action.payload;
        }).addCase(getCurrentUser.fulfilled, (state, action) => {
            state.error = '';
            state.isLoading = false;
            state.currentUser = action.payload;
        }).addCase(getCurrentUser.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
)
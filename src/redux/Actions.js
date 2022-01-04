import { createAction } from "@reduxjs/toolkit";

export const ACTION_GET_USERS = createAction('GET_USERS')
export const ACTION_GET_POSTS = createAction('GET_POSTS')
export const ACTION_EDIT_POST = createAction('EDIT_POST')
export const ACTION_DELETE_USER = createAction('DELETE_USER')
export const ACTION_GET_CURRENT_USER = createAction('GET_CURRENT')
export const ACTION_DELETE_POST = createAction('DELETE_POST')
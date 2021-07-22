import {ADD_TODOS, CHANGE_TODO, DELETE_TODO, PUSH_NEW_TODO, SET_LOADING_FALSE, SET_LOADING_TRUE} from "../actionTypes";

export const setLoadingTrue = () =>({type:SET_LOADING_TRUE})
export const setLoadingFalse = () =>({type:SET_LOADING_FALSE})
export const addTodo = (payload) =>({type:ADD_TODOS, payload})
export const pushNewTodo = (payload) =>({type:PUSH_NEW_TODO,payload})
export const delTodo = (payload) =>({type:DELETE_TODO,payload})
export const changeTodo = (payload) =>({type:CHANGE_TODO,payload})
import axios from "axios";

let options = {baseURL:'https://jsonplaceholder.typicode.com'}

let axiosInstance = axios.create(options);

export const getUsers = ()=>axiosInstance('/users');
export const getUserPosts = (id)=>axiosInstance('/users/'+ id +'/posts')
export const getPostsDetails = (id)=>axiosInstance('/posts/' + id)
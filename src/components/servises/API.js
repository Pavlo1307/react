import axios from "axios";

let options = {
    baseURL:'https://jsonplaceholder.typicode.com'
};

let axiosInstance = axios.create(options)

export const getUsers = () =>axiosInstance('/users')
export const getComments = () =>axiosInstance('/comments')
export const getPosts = () =>axiosInstance('/posts')
export const getUserDetails = (id) =>axiosInstance('/users/'+ id)
export const getCommentsDetails = (id) =>axiosInstance('/comments/'+id)
export const getPostsDetails = (id) =>axiosInstance('/posts/'+id)

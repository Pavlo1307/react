import axios from "axios";

let options = {baseURL:'https://jsonplaceholder.typicode.com'};

let axiosInstance = axios.create(options)

export const getUsers = ()=>axiosInstance('/users');
export const getUsersPost = (id)=>axiosInstance(('/users/' + id + '/posts'))
export const getPost = (id)=>axiosInstance(('/posts/' + id))


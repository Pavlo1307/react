import axios from 'axios';

let options = {
    baseURL:'https://jsonplaceholder.typicode.com'
};

let axiosInstance = axios.create(options);

const getUsers = () => axiosInstance('/users');
//const getUser = (id) => axiosInstance('/users/'+ id );
const getPosts = () => axiosInstance('/posts')
const getUsersPost = (id) => axiosInstance('/users/' + id + '/posts');
const getComents = () => axiosInstance('/comments')
const getPostsComents = (id) => axiosInstance ('/posts/' + id + '/comments');

export {getUsers, getPosts, getComents,getUsersPost, getPostsComents}
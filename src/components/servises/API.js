import axios from "axios";

let options ={

    baseURL:'https://jsonplaceholder.typicode.com'
}

let axiosInstance = axios.create(options);

export const getUsers = ()=>axiosInstance('/users')
export const getMessages = (id) =>axiosInstance('/users/'+ id)

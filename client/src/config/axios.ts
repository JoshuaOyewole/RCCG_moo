import axios from "axios";

const baseURL = 'localhost:5000';
const token = localStorage.getItem('token');

const axiosClient = axios.create({
    baseURL,
    headers:{
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
    }
})



export default axiosClient;
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('token');

const axiosClient = axios.create({
    baseURL,
    headers:{
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
    }
})



export default axiosClient;
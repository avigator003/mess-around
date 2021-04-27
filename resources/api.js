import axios from 'axios'
import path from 'path'


const api = axios.create({
    baseURL:"http://localhost:8000/api",
    withCredentials:true,
})

export const apiUrl = "http://localhost:8000/api"
export default api
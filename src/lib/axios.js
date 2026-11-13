import axios from "axios";

const api = axios.create({
    baseURL: "https://eventsphere-server-mfdb.onrender.com"
})

api.interceptors.request.use(
    (request) => {
        return request

}, (error) => { })


api.interceptors.response.use(
    (response) => {
        return response.data.data

}, (error) => { })
export default api;
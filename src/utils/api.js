import axios from "axios";

export const BASE_URL = 'https://project-2-api.herokuapp.com';
export const API_KEY = 'e25c2d01-f3e2-4353-9363-31165d07286a';

export default {
    getAllVideos: () => axios.get(`${BASE_URL}/videos?api_key=${API_KEY}`),
    getVideoById: (id) => axios.get(`${BASE_URL}/videos/${id}/?api_key=${API_KEY}`)
}

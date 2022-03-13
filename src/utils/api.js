import axios from "axios";

export const BASE_URL = process.env.REACT_APP_SERVER_URL;
export const API_KEY = '661d4806-fb0d-42d0-8580-815f7013358a';

export default {
    getAllVideos: () => axios.get(`${BASE_URL}/videos?api_key=${API_KEY}`),
    getVideoById: (id) => axios.get(`${BASE_URL}/videos/${id}/?api_key=${API_KEY}`),
    addComment: (comment, videoId) => axios.post(`${BASE_URL}/videos/${videoId}/comments?api_key=${API_KEY}`, comment),
    deleteComment: (commentId, videoId) => axios.delete(`${BASE_URL}/videos/${videoId}/comments/${commentId}?api_key=${API_KEY}`),
    addVideo: (video) => axios.post(`${BASE_URL}/videos?api_key=${API_KEY}`, video, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }),
    updateViews: (videoId) => axios.put(`${BASE_URL}/videos/${videoId}/views?api_key=${API_KEY}`),
    updateLikes: (videoId) => axios.put(`${BASE_URL}/videos/${videoId}/likes?api_key=${API_KEY}`),
}

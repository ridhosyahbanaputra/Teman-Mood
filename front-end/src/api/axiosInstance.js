import axios from "axios";
import token from "../utils/token.js";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
    const accessToken = token.getAccessToken();

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            token.clear();
            window.showSessionExpired?.();
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
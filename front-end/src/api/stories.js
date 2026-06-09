import axiosInstance from "./axiosInstance";

const getStories = async () => {
    const response = await axiosInstance.get("/story");
    return response.data;
};

const getStoryById = async (id) => {
    const response = await axiosInstance.get(`/story/${id}`);
    return response.data;
};

const createStory = async (payload) => {
    const response = await axiosInstance.post("/story", payload);
    return response.data;
};

export default {
    getStories,
    getStoryById,
    createStory,
};
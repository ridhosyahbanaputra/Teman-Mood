import axiosInstance from "./axiosInstance";

const API_URL = "/daily-check-ins";

const createDailyCheckIn = async (payload) => {
    const response = await axiosInstance.post(API_URL, payload);
    return response.data;
};

const getDailyCheckIns = async () => {
    const response = await axiosInstance.get(API_URL);
    return response.data;
};

const getTodayDailyCheckIn = async () => {
    const response = await axiosInstance.get(`${API_URL}/today`);
    return response.data;
};

const getDailyCheckInById = async (id) => {
    const response = await axiosInstance.get(`${API_URL}/${id}`);
    return response.data;
};

export default {
    createDailyCheckIn,
    getDailyCheckIns,
    getTodayDailyCheckIn,
    getDailyCheckInById
};
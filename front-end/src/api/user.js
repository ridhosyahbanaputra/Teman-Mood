import axiosInstance from "./axiosInstance";

const registerUser = async (data) => {
    const res = await axiosInstance.post("/users", data);
    return res.data;
};

const getUserById = async (id) => {
    const res = await axiosInstance.get(`/users/${id}`);
    return res.data;
};

export default { registerUser, getUserById };
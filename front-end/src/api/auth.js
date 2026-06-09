import axiosInstance from "./axiosInstance";

export const loginUser = async (email, password) => {
    const res = await axiosInstance.post("/authentications", {
        email,
        password,
    });

    return res.data;
};

export const refreshAccessToken = async (refreshToken) => {
    const res = await axiosInstance.put("/authentications", {
        refreshToken,
    });

    return res.data;
};

export const logoutUser = async (refreshToken) => {
    const res = await axiosInstance.delete("/authentications", {
        data: { refreshToken },
    });

    return res.data;
};
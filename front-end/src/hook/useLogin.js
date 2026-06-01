import { useState } from "react";
import { loginUser } from "../api/auth";
import token from "../utils/token";

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const login = async (email, password) => {
        setLoading(true);
        setError("");

        try {
            const result = await loginUser(email, password);

            const responseData = result.data.data || result.data;

            token.setTokens(
                responseData.accessToken,
                responseData.refreshToken
            );

            localStorage.setItem(
                "temanMood_user",
                JSON.stringify(responseData.user)
            );

            window.location.href = "/dashboard";

        } catch (err) {
            console.error(err);
            const errMsg = err.response?.data?.message || "Login gagal! Email atau password kamu salah.";
            setError(errMsg);
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../api/user.js";

export default function useRegister() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const register = async (form) => {
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const result = await users.registerUser(form);

            setSuccess(result.message || "Register berhasil! Mengalihkan ke halaman Login...");

            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (err) {
            console.error(err);
            const errMsg = err.response?.data?.message || "Register gagal! Cek kembali data yang kamu masukkan.";
            setError(errMsg);
        } finally {
            setLoading(false);
        }
    };

    return { register, loading, error, success };
}
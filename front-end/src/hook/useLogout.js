import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/auth";
import token from "../utils/token";

export default function useLogout() {
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const refreshToken = token.getRefreshToken();

            if (refreshToken) {
                await logoutUser(refreshToken);
            }
        } catch (error) {
            console.error("Logout error:", error);
        } finally {
            token.clear();
            navigate("/login");
        }
    };

    return logout;
}
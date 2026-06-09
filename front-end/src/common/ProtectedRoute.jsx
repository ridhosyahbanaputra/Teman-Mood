import { Navigate } from "react-router-dom";
import token from "@/utils/token";

export default function ProtectedRoute({ children }) {
    const accessToken = token.getAccessToken();

    if (!accessToken) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
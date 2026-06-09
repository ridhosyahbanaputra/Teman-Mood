import { useEffect, useState } from "react";
import user from "../api/user";

export default function useUser() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userId = localStorage.getItem("userId");

                if (!userId) return;

                const res = await users.getUserById(userId);

                setUser(res.data);

            } catch (error) {
                if (error.response?.status !== 401) {
                    console.error(error);
                }
            }
        };

        fetchUser();
    }, []);

    return user;
}
import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function HomeNavigation() {
    const isLogin = localStorage.getItem("temanMood_user");

    // 🔥 1. PANGGIL USELOCATION BUAT DETEKSI URL SEKARANG 🔥
    const location = useLocation();

    // 🔥 2. JURUS BUNUH DIRI (RETURN NULL) 🔥
    // Kalau user udah login ATAU lagi di halaman login ATAU di halaman register -> HANCURKAN NAVBAR!
    if (isLogin || location.pathname === "/login" || location.pathname === "/register") {
        return null;
    }

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 flex justify-between items-center px-8 py-4 bg-white border-8 border-black shadow-[12px_12px_0_0_#000]">

            <div className="text-3xl font-black tracking-wider uppercase text-black">
                Teman Mood
            </div>

            <ul className="flex gap-4">
                <li>
                    <Link
                        to={"/login"}
                        className="inline-block bg-[#90FF90] border-4 border-black px-6 py-2 font-bold text-black shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                    >
                        Log in
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/register"}
                        className="inline-block bg-[#FF90E8] border-4 border-black px-6 py-2 font-bold text-black shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                    >
                        Register
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
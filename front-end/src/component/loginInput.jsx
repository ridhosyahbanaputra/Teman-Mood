import useForm from "../hook/useForm";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function LoginInput({ login, loading }) {
    const [form, setForm] = useForm({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const onSubmitHandler = async (even) => {
        even.preventDefault();
        await login(form.email, form.password);
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <label className="font-bold text-lg">Email</label>
                {/* 🔥 BUNGKUS INPUT: Punya shadow 6px, kalau di klik (focus) turun 4px sisa shadow 2px 🔥 */}
                <div className="relative bg-white border-4 border-black shadow-[6px_6px_0_0_#000] focus-within:translate-x-[4px] focus-within:translate-y-[4px] focus-within:shadow-[2px_2px_0_0_#000] transition-all duration-200 ease-out rounded-lg overflow-hidden">
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={setForm}
                        placeholder="you@example.com"
                        className="w-full p-4 font-medium focus:outline-none bg-transparent"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-bold text-lg">Password</label>
                <div className="relative bg-white border-4 border-black shadow-[6px_6px_0_0_#000] focus-within:translate-x-[4px] focus-within:translate-y-[4px] focus-within:shadow-[2px_2px_0_0_#000] transition-all duration-200 ease-out rounded-lg overflow-hidden">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={form.password}
                        onChange={setForm}
                        placeholder="••••••••"
                        // pr-14 biar ketikan panjang nggak nabrak ikon mata
                        className="w-full p-4 pr-14 font-medium focus:outline-none bg-transparent"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition-colors"
                    >
                        {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                    </button>
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FF90E8] border-4 border-black p-4 font-black text-xl shadow-[8px_8px_0_0_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none transition-all duration-200 rounded-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? "LOGGING IN..." : "Login"}
            </button>

            <p className="text-center font-bold mt-4">
                Don't have an account? <Link to="/register" className="underline hover:text-[#FF90E8] transition-colors">Register</Link>
            </p>
        </form>
    );
}

export default LoginInput;
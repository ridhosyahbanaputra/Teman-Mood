import useForm from "../hook/useForm";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function RegisterInput({ register, loading }) {
    const [form, setForm] = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmitHandler = async (even) => {
        even.preventDefault();

        if (form.password !== form.confirmPassword) {
            setErrorMsg("Passwords do not match. Please try again.");
            return;
        }

        setErrorMsg('');

        await register({
            username: form.username,
            email: form.email,
            password: form.password,
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <label className="font-bold text-lg">Username</label>
                <div className="relative bg-white border-4 border-black shadow-[6px_6px_0_0_#000] focus-within:translate-x-[4px] focus-within:translate-y-[4px] focus-within:shadow-[2px_2px_0_0_#000] transition-all duration-200 ease-out rounded-lg overflow-hidden">
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={setForm}
                        placeholder="Username"
                        className="w-full p-4 font-medium focus:outline-none bg-transparent"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-bold text-lg">Email</label>
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

            <div className="flex flex-col gap-2">
                <label className="font-bold text-lg">Confirm Password</label>
                {/* Kalau errorMsg ada isinya, border berubah jadi red-500 */}
                <div className={`relative bg-white border-4 ${errorMsg ? 'border-red-500' : 'border-black'} shadow-[6px_6px_0_0_#000] focus-within:translate-x-[4px] focus-within:translate-y-[4px] focus-within:shadow-[2px_2px_0_0_#000] transition-all duration-200 ease-out rounded-lg overflow-hidden`}>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={setForm}
                        placeholder="••••••••"
                        className="w-full p-4 pr-14 font-medium focus:outline-none bg-transparent"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition-colors"
                    >
                        {showConfirmPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                    </button>
                </div>
                {errorMsg && (
                    <p className="text-red-500 font-bold text-sm mt-1">{errorMsg}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#90FF90] border-4 border-black p-4 font-black text-xl shadow-[8px_8px_0_0_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0_0_#000] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none transition-all duration-200 rounded-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? "CREATING..." : "Create Account"}
            </button>

            <p className="text-center font-bold mt-4">
                Already have an account? <Link to="/login" className="underline hover:text-[#90FF90] transition-colors">Login</Link>
            </p>
        </form>
    );
}

export default RegisterInput;
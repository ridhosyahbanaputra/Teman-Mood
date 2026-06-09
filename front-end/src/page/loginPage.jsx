import LoginInput from "../component/loginInput";
import { Link } from "react-router-dom";
import { ArrowLeft, Brain } from "lucide-react";
import useLogin from "../hook/useLogin";
import AlertError from "../component/alert/AlertError";

function LoginPage() {
    const { login, loading, error } = useLogin();

    return (
        <div className="min-h-screen bg-[#FFFBF0] flex items-center justify-center p-4 md:p-8 font-sans selection:bg-neo-yellow selection:text-black">

            {error && <AlertError message={error} />}

            <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white border-8 border-black shadow-[16px_16px_0_0_#000]">
                <div className="w-full md:w-1/2 bg-neo-green border-b-8 md:border-b-0 md:border-r-8 border-black p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                    <div>
                        <Link to="/" className="inline-flex items-center gap-2 bg-white border-4 border-black px-4 py-2 font-bold shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all w-max mb-12">
                            <ArrowLeft size={20} /> Back
                        </Link>
                        <div className="bg-[#FF90E8] border-4 border-black p-4 shadow-[4px_4px_0_0_#000] w-max mb-8">
                            <Brain size={40} />
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight mb-6">
                            Welcome Back <br /> To Teman Mood
                        </h1>
                        <p className="text-xl font-medium text-gray-900 max-w-md">
                            Continue tracking your emotional journey and build healthy habits with AI-powered insights.
                        </p>
                    </div>
                    <div className="bg-white border-4 border-black p-4 font-bold text-lg shadow-[4px_4px_0_0_#000] mt-12 w-max">
                        Your digital mood companion.
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="max-w-md w-full mx-auto">
                        <h2 className="text-5xl font-black uppercase mb-2">Sign In</h2>
                        <p className="text-gray-600 font-medium mb-10">Access your personal mood dashboard.</p>
                        <LoginInput login={login} loading={loading} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
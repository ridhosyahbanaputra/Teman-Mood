import RegisterInput from "../component/registerInput";
import useRegister from "../hook/useRegister";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import AlertSuccess from "../component/alert/alertSucces";
import AlertError from "../component/alert/AlertError";

function RegisterPage() {
    const { register, loading, error, success } = useRegister();

    return (
        <div className="min-h-screen bg-[#FFFBF0] flex items-center justify-center p-4 md:p-8 font-sans selection:bg-neo-yellow selection:text-black">

            {success && <AlertSuccess message={success} />}
            {error && !success && <AlertError message={error} />}

            <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white border-8 border-black shadow-[16px_16px_0_0_#000]">
                <div className="w-full md:w-1/2 bg-[#FFA6C9] border-b-8 md:border-b-0 md:border-r-8 border-black p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                    <div>
                        <Link to="/" className="inline-flex items-center gap-2 bg-white border-4 border-black px-4 py-2 font-bold shadow-[4px_4px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all w-max mb-12">
                            <ArrowLeft size={20} /> Back
                        </Link>
                        <div className="bg-[#90FF90] border-4 border-black p-4 shadow-[4px_4px_0_0_#000] w-max mb-8">
                            <Sparkles size={40} />
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight mb-6">
                            Join <br /> Teman Mood
                        </h1>
                        <p className="text-xl font-medium text-gray-900 max-w-md">
                            Visualize your emotions, discover healthier routines, and build deeper self-awareness.
                        </p>
                    </div>
                    <div className="bg-white border-4 border-black p-4 font-bold text-lg shadow-[4px_4px_0_0_#000] mt-12 w-max">
                        AI-powered daily emotional insights
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <div className="max-w-md w-full mx-auto">
                        <h2 className="text-5xl font-black uppercase mb-2">Create Account</h2>
                        <p className="text-gray-600 font-medium mb-10">Start your emotional wellness journey today.</p>
                        <RegisterInput register={register} loading={loading} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
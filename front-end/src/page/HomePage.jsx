import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Maximize, Brain, Moon, TrendingUp, Sparkles, Activity } from 'lucide-react';
import HomeNavigation from '../component/homeNavigation';

export default function HomePage() {
    const isLogin = localStorage.getItem("temanMood_user");

    return (
        <div className="min-h-screen bg-[#FFFBF0] text-black font-sans selection:bg-neo-yellow selection:text-black">

            {!isLogin && <HomeNavigation />}

            {/* 🔥 Hero Section: Ukuran font responsif biar nggak nabrak (nempel) */}
            <section className={`${!isLogin ? 'pt-32' : 'pt-12'} grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-8 lg:px-20 py-20 items-center overflow-hidden`}>

                <div className="flex flex-col items-start gap-6 min-w-0">
                    <div className="bg-[#7DF0FF] border-4 border-black px-4 py-2 font-black shadow-[4px_4px_0_0_#000]">
                        AI-POWERED MOOD COMPANION
                    </div>

                    {/* Ukuran disesuaikan bertahap: 5xl -> 6xl -> 7xl */}
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-black uppercase leading-[1.1] tracking-tight break-words">
                        Understand <br /> Your <br /> Emotions.
                    </h1>

                    <p className="text-lg md:text-xl font-medium text-gray-800 max-w-lg leading-relaxed">
                        Teman Mood membantu Gen-Z mengubah mood harian menjadi insight visual dan rekomendasi aktivitas personal untuk menjaga kesehatan mental secara konkret dan berkelanjutan.
                    </p>

                    <div className="flex gap-6 mt-4">
                        {/* 🔥 Jalur VIP: Kalau udah login, arahin ke Dashboard */}
                        <Link
                            to={isLogin ? "/dashboard" : "/login"}
                            className="inline-block bg-[#FF90E8] border-4 border-black px-8 py-4 font-bold text-lg shadow-[6px_6px_0_0_#000] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
                        >
                            {isLogin ? "Go to Dashboard" : "Start Tracking"}
                        </Link>
                    </div>
                </div>

                <div className="bg-white border-8 border-black p-4 md:p-6 shadow-[12px_12px_0_0_#000] flex flex-col gap-4 mx-auto w-full max-w-lg">
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <div className="border-4 border-black p-3 md:p-4 bg-[#FFFBF0]">
                            <Smile size={32} className="mb-4" />
                            <h3 className="text-lg md:text-xl font-black">Calm</h3>
                            <p className="text-xs md:text-sm font-medium text-gray-600">Mood detected</p>
                        </div>
                        <div className="border-4 border-black p-3 md:p-4 bg-[#FFFBF0]">
                            <Maximize size={32} className="mb-4" />
                            <h3 className="text-lg md:text-xl font-black">Focused</h3>
                            <p className="text-xs md:text-sm font-medium text-gray-600">Mood detected</p>
                        </div>
                        <div className="border-4 border-black p-3 md:p-4 bg-[#FFFBF0]">
                            <Brain size={32} className="mb-4" />
                            <h3 className="text-lg md:text-xl font-black break-words">Reflective</h3>
                            <p className="text-xs md:text-sm font-medium text-gray-600">Mood detected</p>
                        </div>
                        <div className="border-4 border-black p-3 md:p-4 bg-[#FFFBF0]">
                            <Moon size={32} className="mb-4" />
                            <h3 className="text-lg md:text-xl font-black">Tired</h3>
                            <p className="text-xs md:text-sm font-medium text-gray-600">Mood detected</p>
                        </div>
                    </div>
                    <div className="bg-[#90FF90] border-4 border-black p-3 md:p-4 font-bold text-base md:text-lg mt-2 text-center break-words">
                        Suggested activity: mindful reset & focus breathing
                    </div>
                </div>
            </section>

            <section className="bg-[#FCE14B] border-t-8 border-black px-8 lg:px-20 py-24">
                <h2 className="text-5xl md:text-6xl font-black uppercase mb-16 max-w-2xl leading-tight">
                    Designed For <br /> Mindful Consistency
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all flex flex-col h-full cursor-default">
                        <Brain size={40} className="mb-6" />
                        <h3 className="text-2xl font-black mb-4 leading-snug break-words">AI Emotion Analysis</h3>
                        <p className="font-medium text-gray-700 flex-grow">
                            Membaca pola emosi harian secara personal.
                        </p>
                    </div>

                    <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all flex flex-col h-full cursor-default">
                        <TrendingUp size={40} className="mb-6" />
                        <h3 className="text-2xl font-black mb-4 leading-snug break-words">Visual Mood Trends</h3>
                        <p className="font-medium text-gray-700 flex-grow">
                            Grafik sederhana untuk memahami progresmu.
                        </p>
                    </div>

                    <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all flex flex-col h-full cursor-default">
                        <Sparkles size={40} className="mb-6" />
                        {/* 🔥 Ditambahin break-words biar "Recommendations" nggak luber */}
                        <h3 className="text-2xl font-black mb-4 leading-snug break-words">Smart Recommendations</h3>
                        <p className="font-medium text-gray-700 flex-grow">
                            Saran aktivitas sesuai kondisi emosimu.
                        </p>
                    </div>

                    <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all flex flex-col h-full cursor-default">
                        <Activity size={40} className="mb-6" />
                        <h3 className="text-2xl font-black mb-4 leading-snug break-words">Healthy Routine</h3>
                        <p className="font-medium text-gray-700 flex-grow">
                            Bangun kebiasaan yang sustainable.
                        </p>
                    </div>
                </div>
            </section>

            {/* 🔥 Bagian Pink disembunyikan pakai && kalau udah login */}
            {!isLogin && (
                <section className="bg-[#FFA6C9] border-t-8 border-black px-8 py-32 text-center flex flex-col items-center justify-center">
                    <h2 className="text-6xl md:text-8xl font-black uppercase mb-6 tracking-tighter">
                        Start <br /> Understanding <br /> Your Mood
                    </h2>
                    <p className="text-xl font-medium max-w-2xl mb-12 text-gray-900">
                        Track, reflect, and grow with AI-powered emotional insights built for Gen-Z wellbeing.
                    </p>
                    <Link
                        to="/register"
                        className="inline-block bg-white border-4 border-black px-12 py-5 text-2xl font-black shadow-[8px_8px_0_0_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
                    >
                        Join Teman Mood
                    </Link>
                </section>
            )}

        </div>
    );
}
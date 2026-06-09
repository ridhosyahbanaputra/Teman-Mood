import React from "react";
import { useState } from "react";
import DailyCheckIn from "./dailyCheckIn";

export default function DailyCheckInTrigger() {
    const [sudahIsi, setSudahIsi] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-neo-surface border-4 border-black shadow-neo p-8 rounded-xl mb-8 ">
            {sudahIsi ? (
                <div className="flex flex-col items-center justify-center text-center py-4">
                    <h2 className="text-3xl font-black mb-2">Check-in Complete! 🎉</h2>
                    <p className="text-lg font-bold text-gray-700">
                        You've completed your daily check-in. Get some rest and enjoy the rest of your day!
                    </p>
                </div>
            ) : (
                <div className="flex flex-col items-start gap-4">
                    <div>
                        <h2 className="text-4xl font-black uppercase mb-3 text-black">
                            Daily Emotion Check-in
                        </h2>
                        <p className="text-lg font-medium text-gray-700 max-w-2xl">
                            Take a minute to listen to yourself. How are you feeling today? Pour your heart out here, and let our AI provide personalized insights to brighten your day!                        </p>
                    </div>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-2 bg-neo-yellow border-4 border-black shadow-neo font-black px-8 py-3 text-xl hover:translate-y-1 hover:shadow-none transition-all"
                    >
                        Check-in Now!
                    </button>
                </div>
            )}

            {isOpen && (
                <DailyCheckIn onClose={() => setIsOpen(false)} />
            )}
        </div>
    );
}
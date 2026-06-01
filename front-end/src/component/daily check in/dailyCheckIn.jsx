import React, { useEffect, useState } from "react";
import useDailyCheckIn from "../../hook/useDailyCheckIn";
import AlertSuccess from "../alert/alertSucces";
import AlertError from "../alert/AlertError";
import { getCurrentTime, getIndonesianWeekday, } from "../../utils/dailyCheckInUtils";
import { feelingOptions } from "../../utils/dailyCheckInConstants";

export default function DailyCheckIn({ onClose }) {
    const { createCheckIn, isSubmitting, dailyCheckInError, setDailyCheckInError } = useDailyCheckIn();

    const [feeling, setFeeling] = useState('');
    const [activities, setActivities] = useState(['']);
    const [journal, setJournal] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [localError, setLocalError] = useState("");

    const addActivity = () => setActivities([...activities, '']);
    const removeActivity = (idxToRemove) => setActivities(activities.filter((_, i) => i !== idxToRemove));
    const updateActivity = (text, idxToUpdate) => {
        const newActs = [...activities];
        newActs[idxToUpdate] = text;
        setActivities(newActs);
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const handleSubmit = async () => {
        setLocalError("");
        setDailyCheckInError?.("");

        if (!feeling) {
            setLocalError("Pilih feeling dulu Bang!");
            return;
        }

        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const payload = {
            sub_mood: feeling,
            activities: activities.filter(act => act.trim() !== ''),
            journal: journal,
            weekday: getIndonesianWeekday(),
            time: getCurrentTime().substring(0, 5),
            use_insight: false,
            timezone: userTimezone
        };

        const result = await createCheckIn(payload);

        if (result) {
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                onClose();
                window.location.reload();
            }, 2000);
        }
    };

    const displayError = localError || dailyCheckInError;

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex justify-center items-center p-4 md:p-8"
            onClick={onClose}
        >
            {showSuccess && <AlertSuccess message="Berhasil Check-in!" />}
            {displayError && !showSuccess && <AlertError message={displayError} />}

            <div
                className="bg-white border-8 border-black shadow-[16px_16px_0_0_#000] w-full max-w-xl p-6 md:p-8 relative max-h-[90vh] overflow-y-auto rounded-none"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-6 text-3xl font-black hover:text-[#FF4A4A] transition-colors">
                    X
                </button>

                <h2 className="text-4xl font-black uppercase mb-2">Daily Check-in</h2>
                <p className="text-gray-600 font-medium mb-8 border-b-4 border-black pb-4">Write your feeling, activities, and short reflection.</p>

                <div className="mb-6">
                    <label className="block font-bold text-lg mb-2">Feeling</label>
                    <select
                        value={feeling}
                        onChange={(e) => setFeeling(e.target.value)}
                        className="w-full border-4 border-black p-3 font-medium focus:outline-none focus:bg-gray-100 transition-colors cursor-pointer appearance-none"
                    >
                        <option value="" disabled>-- Pilih Mood Kamu Hari Ini --</option>
                        {feelingOptions.map((opt, idx) => (
                            <option key={idx} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                        <label className="font-bold text-lg">Activities</label>
                        <button onClick={addActivity} className="bg-[#90FF90] border-4 border-black px-4 py-1 font-bold hover:bg-[#7DF0FF] transition-colors">
                            + Add
                        </button>
                    </div>

                    <div className="flex flex-col gap-3">
                        {activities.map((act, index) => (
                            <div key={index} className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder={`Activity ${index + 1}`}
                                    value={act}
                                    onChange={(e) => updateActivity(e.target.value, index)}
                                    className="w-full flex-1 border-4 border-black p-3 font-medium focus:outline-none focus:bg-gray-100 transition-colors"
                                />
                                {activities.length > 1 && (
                                    <button onClick={() => removeActivity(index)} className="bg-[#FF4A4A] border-4 border-black px-4 font-bold text-white hover:bg-red-600 transition-colors">
                                        🗑️
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-8">
                    <label className="block font-bold text-lg mb-2">Short Journal</label>
                    <textarea
                        value={journal}
                        onChange={(e) => setJournal(e.target.value)}
                        placeholder="Write your short reflection here..."
                        className="w-full border-4 border-black p-3 font-medium focus:outline-none focus:bg-gray-100 h-28 resize-none transition-colors"
                    ></textarea>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || showSuccess}
                    className={`w-full border-4 border-black p-4 font-black text-xl uppercase transition-all duration-200 
                        ${isSubmitting || showSuccess
                            ? 'bg-gray-400 cursor-not-allowed translate-x-[6px] translate-y-[6px] shadow-none'
                            : 'bg-[#FCE14B] shadow-[6px_6px_0_0_#000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0_0_#000] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none'
                        }
                    `}
                >
                    {isSubmitting ? 'Saving...' : showSuccess ? 'Success!' : 'Save Check-in'}
                </button>

            </div>
        </div>
    )
}
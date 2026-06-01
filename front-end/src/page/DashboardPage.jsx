import React, { useState, useMemo } from "react";
import Calender from "../calender/calender";
import DailyCheckInTrigger from "../component/daily check in/DailyCheckInTrigger";
import DailyCheckInDetail from "../component/daily check in/dailyCheckInDetail";
import useDailyCheckIn from "../hook/useDailyCheckIn";

export default function DasboardPage() {
    const [selectedDay, setSelectedDay] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    const { dailyCheckIns, checkInByDate, isDailyCheckInLoading } = useDailyCheckIn();

    const activeDateString = useMemo(() => {
        const tahun = currentDate.getFullYear();
        const bulan = String(currentDate.getMonth() + 1).padStart(2, '0');
        const tanggal = String(selectedDay || currentDate.getDate()).padStart(2, '0');
        return `${tahun}-${bulan}-${tanggal}`;
    }, [selectedDay, currentDate]);

    const selectedDetailData = useMemo(() => {
        return checkInByDate?.[activeDateString] || null;
    }, [activeDateString, checkInByDate]);

    return (
        <section className="Dashboard p-4 md:p-8">
            <DailyCheckInTrigger />

            <div className="mt-8 flex flex-col lg:flex-row gap-8 items-stretch w-full max-w-[1400px] mx-auto">

                <div className="kalender flex-1 w-full flex flex-col">
                    <div className="h-full">
                        {isDailyCheckInLoading ? (
                            <div className="flex justify-center items-center h-full bg-white border-8 border-black shadow-[12px_12px_0_0_#000] p-6 font-black text-2xl uppercase">
                                Menyinkronkan Data...
                            </div>
                        ) : (
                            <Calender
                                selectedDay={selectedDay}
                                setSelectedDay={setSelectedDay}
                                dataMood={dailyCheckIns}
                                currentDate={currentDate}
                                setCurrentDate={setCurrentDate}
                            />
                        )}
                    </div>
                </div>

                <div className="w-full lg:w-max flex flex-col">
                    <div className="h-full">
                        <DailyCheckInDetail
                            detailData={selectedDetailData}
                            fallbackDate={activeDateString}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
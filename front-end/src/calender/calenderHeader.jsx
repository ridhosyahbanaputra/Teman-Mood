import React from "react";

export default function CalendarHeader({ currentDate, setCurrentDate, selectedDay, setSelectedDay }) {

    const tahun = currentDate.getFullYear();
    const bulan = currentDate.getMonth();

    const namaBulan = currentDate.toLocaleDateString(
        "id-ID",
        { month: "long" }
    );

    const prevMonth = () => {
        setCurrentDate(
            new Date(tahun, bulan - 1, 1)
        );
    };

    const nextMonth = () => {
        setCurrentDate(
            new Date(tahun, bulan + 1, 1)
        );
    };

    return (

        <div className="header-kalender">
            <button onClick={prevMonth}>
                ←
            </button>
            <h2>
                {namaBulan} {tahun}
            </h2>
            <button onClick={nextMonth}>
                →
            </button>

        </div>
    );
}
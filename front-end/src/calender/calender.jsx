import React from "react";
import "../style/calender.css";
import CalendarHeader from "./calenderHeader";
import CalendarGrid from "./calenderGrid";

export default function Calendar({ selectedDay, setSelectedDay, dataMood, currentDate, setCurrentDate }) {
    return (
        <div className="kalender-container">
            <CalendarHeader
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
            />

            <CalendarGrid
                currentDate={currentDate}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                dataMood={dataMood}
            />
        </div>
    );
}
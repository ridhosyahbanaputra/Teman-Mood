import React from "react";
import "../style/calender.css";
import CalendarHeader from "./calenderHeader";
import CalendarGrid from "./calenderGrid";
import TimelineView from "./timelineView";

export default function Calendar({ selectedDay, setSelectedDay, dataMood, currentDate, setCurrentDate }) {

    return (

        <div className="kalender-container">

            <CalendarHeader
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
            />

            {
                !selectedDay ? (

                    <CalendarGrid
                        currentDate={currentDate}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        dataMood={dataMood}
                    />

                ) : (

                    <TimelineView
                        currentDate={currentDate}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        dataMood={dataMood}
                    />

                )
            }

        </div>
    );
}
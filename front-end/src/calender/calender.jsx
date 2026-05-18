import React from "react";
import "../style/calender.css";
import CalendarHeader from "./calenderHeader";
import CalendarGrid from "./calenderGrid";
import TimelineView from "./timelineView";
import SaranAI from "../component/saranAI";

export default function Calendar({ selectedDay, setSelectedDay, dataMood, currentDate, setCurrentDate }) {
    return (
        <div className={`kalender-container ${selectedDay ? 'timeline-mode' : ''}`}>

            <CalendarHeader
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
            />
            {
                !selectedDay ? (
                    <>
                        <CalendarGrid
                            currentDate={currentDate}
                            selectedDay={selectedDay}
                            setSelectedDay={setSelectedDay}
                            dataMood={dataMood}
                        />
                        {/* <SaranAI /> */}
                    </>


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
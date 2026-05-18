import React from "react";
import { useState } from "react";
import dataMoodDummy from "../utils/dataDummy";
import Calender from "../calender/calender";
import TombolKeKuisoner from "../component/TombolKeKuisoner";
import SaranAI from "../component/saranAI";

export default function DasboardPage() {
    const [selectedDay, setSelectedDay] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    return (
        <section className="Dashboard">
            <TombolKeKuisoner />
            <div className={`mood-display ${selectedDay ? 'mood-detail' : ''}`}>
                <div className="kalender">
                    <Calender
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        dataMood={dataMoodDummy}
                        currentDate={currentDate}
                        setCurrentDate={setCurrentDate}
                    />
                </div>
                {/* <SaranAI /> */}
            </div>
        </section>
    );
}
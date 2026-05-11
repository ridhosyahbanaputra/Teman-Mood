import React from "react";
import { Routes, Route } from "react-router-dom";
import Chart from "../component/chart";
import Calender from "../component/calender";
import TombolKeKuisoner from "../component/TombolKeKuisoner";
import SaranAI from "../component/saranAI";

export default function DasboardPage() {
    return (
        <section className="Dashboard">
            <TombolKeKuisoner />
            <div className="mood-display">
                <Calender />
                <Chart />
            </div>
            <SaranAI />
        </section>
    );
}
import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="home-container">
            <div className="content-wrapper">
                <h2>Ingin Mendapatkan Saran Mengenai mood-mu hari ini</h2>
                <p>TemanMood dapat membantu kamu dalam mencatat, dan memberikan saran mengenai Mood mu</p>
                <Link to={"/dashboard"} className="btn-kuesioner">Isi Kuesioner Hari Ini</Link>
            </div>
        </div>
    );
}
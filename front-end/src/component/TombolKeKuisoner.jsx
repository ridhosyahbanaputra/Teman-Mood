import React from "react";
import { Link } from "react-router-dom";
import "../style/tombolKeKuisoner.css";
import { useState } from "react";

export default function TombolKeKuisoner() {
    const [sudahIsi, setSudahIsi] = useState(false);

    return (
        <div className="tombol-ke-kuisoner-container">
            {sudahIsi ? (
                <div className="status sudah-diisi">
                    <p>kamu sudah mengisi kuisoner hari ini</p>
                </div>
            ) : (
                <Link to={"/kuisoner"} className="status belum-diisi link">
                    <div>
                        <p>kamu belum isi kuisoner hari ini,</p>
                        <p><strong>Yuk Segera isi!</strong></p>
                    </div>
                </Link>
            )}
        </div>
    );
}
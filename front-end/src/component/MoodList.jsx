import React from "react";
import "../style/detail.css";
import MoodItem from "./MoodItem";

export default function MoodList({
    selectedDay,
    setSelectedDay,
    dataMood,
    currentDate
}) {

    const bulanAktif = currentDate.getMonth();
    const tahunAktif = currentDate.getFullYear();

    // filter data berdasarkan bulan aktif
    const filteredMood = dataMood.filter((item) => {

        const moodDate = new Date(item.tanggal);

        return (
            moodDate.getMonth() === bulanAktif &&
            moodDate.getFullYear() === tahunAktif
        );
    });

    // urutkan tanggal
    const sortedMood = [...filteredMood].sort((a, b) => {

        return new Date(a.tanggal) - new Date(b.tanggal);
    });

    const namaBulan = currentDate.toLocaleDateString(
        "id-ID",
        { month: "long" }
    );

    return (
        <div className="detail-mood-container">

            <div className="btn-tutup">

                <p className="bulan">
                    {namaBulan}
                </p>

                <button onClick={() => setSelectedDay(null)}>
                    X
                </button>

            </div>

            <div className="saran-AI">

                {
                    sortedMood.map((detailPerHari) => (

                        <MoodItem
                            key={detailPerHari.tanggal}
                            detail={detailPerHari}
                            selectedDay={selectedDay}
                        />

                    ))
                }

            </div>

        </div>
    );
}
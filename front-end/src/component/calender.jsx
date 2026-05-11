import React from "react";
import '../style/calender.css'

export default function Calender() {
    const now = new Date();
    const tanggalSekarang = now.getDate();
    const bulan = now.toLocaleDateString('id-ID', { month: 'long' })
    const tahun = now.getFullYear()

    const totalHari = 31;
    const dayList = Array.from({ length: totalHari }, (_, i) => i + 1)
    const dummyEmote = {
        3: '😭',
        4: '😄',
        5: '😄',
        6: '😐',
        7: ' 😍',
        [tanggalSekarang]: '?'
    };

    return (
        <div className="kalender-container">
            <h2>Bulan {bulan} {tahun}</h2>

            <div className="grid-kalender">
                {dayList.map((tanggal) => {
                    const isHariIni = tanggal === tanggalSekarang;

                    return (
                        <div
                            key={tanggal}

                            className={`kotak-hari ${isHariIni ? 'hari-ini' : ''}`}
                        >
                            <span className="angka-tanggal">{tanggal}</span>

                            <div className="tempat-emote">
                                {tanggal > tanggalSekarang ? "" : (dummyEmote[tanggal] || "?")}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

}

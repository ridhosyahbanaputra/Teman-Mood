import React from "react";

export default function CalendarDay({ tanggal, currentDate, dataMood, setSelectedDay }) {

    const tahun = currentDate.getFullYear();
    const bulan = currentDate.getMonth();

    const today = new Date();

    const cellDate = new Date(
        tahun,
        bulan,
        tanggal
    );

    const isHariIni =
        cellDate.toDateString() ===
        today.toDateString();

    const dataHariIni = dataMood.find((data) => {

        const moodDate = new Date(data.tanggal);

        return (
            moodDate.getDate() === tanggal &&
            moodDate.getMonth() === bulan &&
            moodDate.getFullYear() === tahun
        );
    });

    return (

        <div
            className={`kotak-hari ${isHariIni ? 'hari-ini' : ''
                }`}
            onClick={() => setSelectedDay(tanggal)}
        >

            <span className="angka-tanggal">
                {tanggal}
            </span>

            <div className="tempat-emote">

                {
                    cellDate > today
                        ? ""
                        : dataHariIni
                            ? dataHariIni.emote
                            : "?"
                }

            </div>

        </div>
    );
}
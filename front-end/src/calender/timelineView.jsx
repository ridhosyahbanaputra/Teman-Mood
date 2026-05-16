import React from "react";
import TimelineRow from "./timelineRow";
import { useEffect } from "react";

export default function TimelineView({
    currentDate,
    selectedDay,
    setSelectedDay,
    dataMood
}) {

    const bulan = currentDate.getMonth();

    const tahun = currentDate.getFullYear();

    const totalHari = new Date(
        tahun,
        bulan + 1,
        0
    ).getDate();

    const semuaTanggal = Array.from(
        { length: totalHari },
        (_, i) => i + 1
    );

    useEffect(() => {

        if (selectedDay) {

            const element = document.getElementById(
                `tanggal-${selectedDay}`
            );

            element?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    }, [selectedDay]);

    return (

        <>

            <div className="timeline-header">

                <button
                    className="btn-close-detail"
                    onClick={() => setSelectedDay(null)}
                >
                    ✕
                </button>

            </div>

            <div className="timeline-container">

                {
                    semuaTanggal.map((tanggal) => {

                        const dataHariIni =
                            dataMood.find((data) => {

                                const moodDate =
                                    new Date(data.tanggal);

                                return (
                                    moodDate.getDate() === tanggal &&
                                    moodDate.getMonth() === bulan &&
                                    moodDate.getFullYear() === tahun
                                );
                            });

                        return (

                            <TimelineRow
                                key={tanggal}

                                tanggal={tanggal}

                                data={dataHariIni}

                                selectedDay={selectedDay}

                                setSelectedDay={setSelectedDay}
                            />

                        );
                    })
                }

            </div>

        </>

    );
}
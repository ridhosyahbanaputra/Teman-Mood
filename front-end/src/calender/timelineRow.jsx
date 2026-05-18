import React from "react";

export default function TimelineRow({ tanggal, data, selectedDay, setSelectedDay }) {

    const emote =
        data?.emote || "?";

    const keterangan =
        data?.keterangan || "Belum ada mood";

    const isSelected =
        tanggal === selectedDay;

    return (

        <div
            id={`tanggal-${tanggal}`}
            className="timeline-row"
        >

            <div
                className={`tanggal-kiri ${isSelected ? 'aktif' : ''
                    }`}
                onClick={() => setSelectedDay(tanggal)}
            >

                <span>{tanggal}</span>

                <span>{emote}</span>

            </div>

            <div className="detail-kanan">

                <h4>
                    {emote} ({keterangan})
                </h4>

                {
                    isSelected && (

                        <div className="detail-expanded">

                            <p>
                                Saran AI untuk hari ini...
                            </p>

                        </div>

                    )
                }

            </div>

        </div>
    );
}
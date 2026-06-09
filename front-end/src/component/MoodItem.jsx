import React from "react";

export default function MoodItem({
    detail,
    selectedDay
}) {

    const moodDate = new Date(detail.tanggal);

    const tanggal = moodDate.getDate();

    const isSelected =
        tanggal === selectedDay;

    return (

        <div className={`timeline ${isSelected ? 'highlight' : ''}`}>

            <div className="selected-tanggal">

                <span className="tanggal">
                    {tanggal}
                </span>

            </div>

            <div className="konten">

                <h4>
                    {detail.emote} ({detail.keterangan})
                </h4>

                {
                    isSelected && (

                        <div className="saran-AI-pertanggal">

                            <p>
                                <strong>
                                    Saran untukmu hari ini
                                </strong>
                            </p>

                            <p>
                                Kurangi aktivitas berlebihan dan coba tidur lebih teratur.
                            </p>

                        </div>

                    )
                }

            </div>

        </div>
    );
}
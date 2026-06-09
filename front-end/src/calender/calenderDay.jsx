import React from "react";

export default function CalendarDay({ tanggal, currentDate, dataMood, setSelectedDay }) {

    const tahun = currentDate.getFullYear();
    const bulan = currentDate.getMonth();
    const today = new Date();

    const cellDate = new Date(tahun, bulan, tanggal);
    const isHariIni = cellDate.toDateString() === today.toDateString();

    const cellDateString = `${tahun}-${String(bulan + 1).padStart(2, '0')}-${String(tanggal).padStart(2, '0')}`;
    const dataHariIni = dataMood?.find((data) => data.date === cellDateString || data.tanggal === cellDateString);

    const getMoodColor = (mood) => {
        if (!mood) return "";
        const status = mood.toLowerCase();
        if (['bahagia', 'semangat', 'senang', 'lega', 'bersyukur', 'positif'].includes(status)) return "var(--neo-green)";
        if (['b aja', 'datar', 'bingung', 'santai', 'lumayan', 'tenang', 'netral'].includes(status)) return "var(--neo-yellow)";
        return "var(--neo-red)";
    }

    const moodData = dataHariIni ? (dataHariIni.feeling || dataHariIni.mood || dataHariIni.rawMood) : null;
    const bgColor = getMoodColor(moodData);

    return (
        <div
            className={`kotak-hari ${isHariIni ? 'hari-ini' : ''}`}
            onClick={() => setSelectedDay(tanggal)}
        >
            <span className="angka-tanggal">
                {tanggal}
            </span>

            <div
                className="tempat-emote"
                style={{
                    backgroundColor: bgColor || undefined,
                    width: '100%',
                    overflow: 'hidden',
                    borderTop: bgColor ? '2px solid black' : 'none',
                }}
            >
                {
                    cellDate > today ? (
                        ""
                    ) : dataHariIni ? (
                        <span style={{
                            fontSize: '10px',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            display: 'block',
                            width: '100%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            padding: '2px 0'
                        }}>
                            {moodData || "OK"}
                        </span>
                    ) : (
                        ""
                    )
                }
            </div>
        </div>
    );
}
import CalendarDay from "./calenderDay";

export default function CalendarGrid({ currentDate, dataMood, setSelectedDay }) {

    const namaHari = [
        "Min",
        "Sen",
        "Sel",
        "Rab",
        "Kam",
        "Jum",
        "Sab"
    ];

    const tahun = currentDate.getFullYear();
    const bulan = currentDate.getMonth();

    const totalHari = new Date(
        tahun,
        bulan + 1,
        0
    ).getDate();

    const firstDay = new Date(
        tahun,
        bulan,
        1
    ).getDay();

    const dayList = Array.from(
        { length: totalHari },
        (_, i) => i + 1
    );

    return (

        <div className="grid-kalender">

            {
                namaHari.map((hari) => (

                    <div
                        key={hari}
                        className="nama-hari"
                    >
                        {hari}
                    </div>

                ))
            }

            {
                Array.from({ length: firstDay }).map((_, i) => (

                    <div
                        key={`empty-${i}`}
                        className="kotak-kosong"
                    ></div>

                ))
            }

            {
                dayList.map((tanggal) => (

                    <CalendarDay
                        key={tanggal}
                        tanggal={tanggal}
                        currentDate={currentDate}
                        dataMood={dataMood}
                        setSelectedDay={setSelectedDay}
                    />

                ))
            }

        </div>
    );
}
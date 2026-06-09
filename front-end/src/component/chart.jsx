import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "../style/chart.css";

const dataMoodDummy = [
    { tanggal: "1 Mei", mood: 4 },
    { tanggal: "2 Mei", mood: 2 },
    { tanggal: "3 Mei", mood: 1 },
    { tanggal: "4 Mei", mood: 4 },
    { tanggal: "5 Mei", mood: 4 },
    { tanggal: "6 Mei", mood: 3 },
    { tanggal: "7 Mei", mood: 5 },
];

export default function Chart() {
    return (
        <div className="chart-container">
            <h2>Grafik Mood Mingguan 📈</h2>
            <div className="chart">
                <ResponsiveContainer>
                    <LineChart data={dataMoodDummy} className="chart-data" >

                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="50%" stopColor="#28a745" /> {/* Hijau */}
                                <stop offset="50%" stopColor="#dc3545" /> {/* Merah */}
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="tanggal" />
                        <YAxis domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} />
                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="mood"
                            stroke="#A1C4FD"

                            strokeWidth={15}
                            opacity={0.1}

                            dot={false}
                            activeDot={false}
                        />

                        <Line
                            type="monotone"
                            dataKey="mood"
                            stroke="url(#gradient)"
                            strokeWidth={5}
                            dot={{ r: 5, fill: "#fff", strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
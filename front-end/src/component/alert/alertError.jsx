import React from "react";
import { AlertTriangle } from "lucide-react";

export default function AlertError({ message = "Terjadi Kesalahan!" }) {
    return (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-[#FF4A4A] border-4 border-black px-8 py-4 shadow-[8px_8px_0_0_#000] z-[10000] flex items-center gap-3">
            <AlertTriangle size={32} strokeWidth={3} color="white" />
            <p className="text-xl font-black uppercase text-white">{message}</p>
        </div>
    );
}
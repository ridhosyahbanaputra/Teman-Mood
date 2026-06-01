import React from "react";
import { CheckSquare } from "lucide-react";

export default function AlertSuccess({ message = "Berhasil!" }) {
    return (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 bg-[#90FF90] border-4 border-black px-8 py-4 shadow-[8px_8px_0_0_#000] z-[10000] flex items-center gap-3">
            <CheckSquare size={32} strokeWidth={3} />
            <p className="text-xl font-black uppercase text-black">{message}</p>
        </div>
    );
}
import React from 'react';
import { CalendarDays, Clock, Smile, TrendingUp, Zap, Lightbulb, Activity } from 'lucide-react';

export default function DailyCheckInDetail({ detailData, fallbackDate }) {
    return (
        <div className="bg-white border-8 border-black shadow-[12px_12px_0_0_#000] p-6 w-full lg:w-[400px] flex flex-col gap-6 max-h-[650px] overflow-y-auto rounded-lg">

            <div>
                <h2 className="text-2xl font-black uppercase tracking-tight border-b-4 border-black pb-2 mb-2">
                    Daily Check-in Detail
                </h2>
                <p className="text-gray-700 font-medium text-sm">Review your feeling and short journal.</p>
            </div>

            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 bg-[#FFFBF0] border-4 border-black p-2 shadow-[2px_2px_0_0_#000]">
                        <div className="bg-[#90FF90] border-2 border-black p-1">
                            <CalendarDays size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase leading-none">Date</p>
                            <p className="text-sm font-black leading-none mt-1">
                                {detailData ? detailData.tanggal : fallbackDate}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-[#FFFBF0] border-4 border-black p-2 shadow-[2px_2px_0_0_#000]">
                        <div className="bg-[#7DF0FF] border-2 border-black p-1">
                            <Clock size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase leading-none">Time</p>
                            <p className="text-sm font-black leading-none mt-1">
                                {detailData ? (detailData.waktu || '00:00') : '-'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {!detailData ? (
                <div className="bg-gray-100 border-4 border-dashed border-gray-400 p-8 text-center mt-2 flex flex-col items-center justify-center gap-2">
                    <p className="text-xl font-black text-gray-400 uppercase">Detail Kosong</p>
                    <p className="text-xs font-bold text-gray-400">Kamu belum mengisi check-in untuk tanggal ini.</p>
                </div>
            ) : (
                <>
                    <div className="flex items-center gap-3 bg-[#FFFBF0] border-4 border-black p-2 shadow-[2px_2px_0_0_#000]">
                        <div className="bg-[#FFA6C9] border-2 border-black p-1">
                            <Smile size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-500 uppercase leading-none">Feeling</p>
                            <p className="text-base font-black capitalize leading-none mt-1">
                                {detailData.keterangan} {detailData.emote}
                            </p>
                        </div>
                    </div>

                    <div className="border-4 border-black p-4 bg-white shadow-[4px_4px_0_0_#000]">
                        <div className="flex justify-between items-end mb-3">
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1">
                                    <TrendingUp size={14} /> Mood Level
                                </p>
                                <p className="text-xl font-black">{detailData.moodLevelStatus || 'N/A'}</p>
                            </div>
                            <p className="text-lg font-black">{detailData.moodLevelScore || 0}/100</p>
                        </div>

                        <div className="w-full h-5 border-4 border-black bg-gray-200 mb-2 relative">
                            <div className="h-full bg-[#FCE14B] border-r-4 border-black" style={{ width: `${detailData.moodLevelScore || 0}%` }}></div>
                            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-7 bg-white border-4 border-black" style={{ left: `${detailData.moodLevelScore || 0}%`, transform: 'translate(-50%, -50%)' }}></div>
                        </div>

                        <div className="flex justify-between text-[10px] font-bold uppercase mb-4 text-gray-600">
                            <span>Bad</span>
                            <span>Normal</span>
                            <span>Good</span>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <div className="border-4 border-black bg-[#FFA6C9] p-1 text-center">
                                <p className="text-[10px] font-bold uppercase">Bad</p>
                                <p className="font-black text-xs">{detailData.persentase?.bad || 0}%</p>
                            </div>
                            <div className="border-4 border-black bg-[#FCE14B] p-1 text-center">
                                <p className="text-[10px] font-bold uppercase">Normal</p>
                                <p className="font-black text-xs">{detailData.persentase?.normal || 0}%</p>
                            </div>
                            <div className="border-4 border-black bg-[#90FF90] p-1 text-center">
                                <p className="text-[10px] font-bold uppercase">Good</p>
                                <p className="font-black text-xs">{detailData.persentase?.good || 0}%</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase mb-2 flex items-center gap-1">
                            <Activity size={14} /> Activities
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {detailData.activities && detailData.activities.map((act, idx) => (
                                <span key={idx} className="bg-white border-2 border-black px-2 py-1 text-sm font-bold shadow-[2px_2px_0_0_#000]">
                                    {act}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase mb-2 flex items-center gap-1">
                            <Zap size={14} /> Recommendations
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {detailData.recommendations && detailData.recommendations.map((rec, idx) => (
                                <span key={idx} className="bg-[#FFA6C9] border-2 border-black px-2 py-1 text-sm font-bold shadow-[2px_2px_0_0_#000]">
                                    {rec}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#7DF0FF] border-4 border-black p-3 shadow-[4px_4px_0_0_#000]">
                        <p className="text-xs font-bold uppercase mb-1 flex items-center gap-1 border-b-2 border-black pb-1">
                            <Lightbulb size={14} /> Insight
                        </p>
                        <p className="font-medium text-black text-xs leading-relaxed">
                            {detailData.insight || 'Belum ada insight.'}
                        </p>
                    </div>
                </>
            )}

        </div>
    )
}
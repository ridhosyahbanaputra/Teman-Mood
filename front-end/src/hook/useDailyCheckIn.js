import { useState, useEffect, useMemo } from "react";
import dailyCheckInApi from "../api/dailyCheckIn";

export default function useDailyCheckIn() {
    const [dailyCheckIns, setDailyCheckIns] = useState([]);
    const [isDailyCheckInLoading, setIsDailyCheckInLoading] = useState(true);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [dailyCheckInError, setDailyCheckInError] = useState("");

    useEffect(() => {
        const fetchCheckIns = async () => {
            try {
                let response;
                if (typeof dailyCheckInApi.getDailyCheckIns === 'function') {
                    response = await dailyCheckInApi.getDailyCheckIns();
                } else if (typeof dailyCheckInApi.getAllCheckIns === 'function') {
                    response = await dailyCheckInApi.getAllCheckIns();
                } else {
                    response = { data: [] };
                }

                const data = response?.data || response?.dailyCheckIns || response || [];
                setDailyCheckIns(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Gagal ngambil data kalender", error);
            } finally {
                setIsDailyCheckInLoading(false);
            }
        };

        fetchCheckIns();
    }, []);

    const checkInByDate = useMemo(() => {
        const map = {};
        dailyCheckIns.forEach(item => {
            const dateStr = item.date || item.checkInDate || item.createdAt || item.tanggal;
            if (dateStr) {
                const dateKey = dateStr.split('T')[0];
                map[dateKey] = item;
            }
        });
        return map;
    }, [dailyCheckIns]);

    const createCheckIn = async (payload) => {
        setIsSubmitting(true);
        setDailyCheckInError("");
        try {
            await dailyCheckInApi.createDailyCheckIn(payload);
            return true;
        } catch (error) {
            console.error(error);
            setDailyCheckInError(error.response?.data?.message || "Gagal menyimpan check-in.");
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        dailyCheckIns,
        checkInByDate,
        isDailyCheckInLoading,
        createCheckIn,
        isSubmitting,
        dailyCheckInError,
        setDailyCheckInError
    };
}
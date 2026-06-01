import { fullDayNames } from "./dailyCheckInConstants";

export const formatDateKey = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export const getIndonesianWeekday = (date = new Date()) => {
    return fullDayNames[date.getDay()];
};

export const getCurrentTime = () => {
    return new Date()
        .toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        })
        .replaceAll(".", ":");
};

export const getCalendarDays = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const firstDayIndex = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();

    const previousMonthLastDay = new Date(year, month, 0).getDate();

    const calendarDays = [];

    for (let index = firstDayIndex - 1; index >= 0; index -= 1) {
        const dayNumber = previousMonthLastDay - index;
        const date = new Date(year, month - 1, dayNumber);

        calendarDays.push({
            date,
            dateKey: formatDateKey(date),
            dayNumber,
            isCurrentMonth: false,
        });
    }

    for (let dayNumber = 1; dayNumber <= totalDays; dayNumber += 1) {
        const date = new Date(year, month, dayNumber);

        calendarDays.push({
            date,
            dateKey: formatDateKey(date),
            dayNumber,
            isCurrentMonth: true,
        });
    }

    const remainingDays = 42 - calendarDays.length;

    for (let dayNumber = 1; dayNumber <= remainingDays; dayNumber += 1) {
        const date = new Date(year, month + 1, dayNumber);

        calendarDays.push({
            date,
            dateKey: formatDateKey(date),
            dayNumber,
            isCurrentMonth: false,
        });
    }

    return calendarDays;
};
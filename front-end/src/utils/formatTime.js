export default function formatTime(dateValue) {
    const date = new Date(dateValue);
    const now = new Date();

    const diffMs = now - date;
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMinutes < 1) {
        return "Just now";
    }

    if (diffMinutes < 60) {
        return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""}`;
    }

    if (diffHours < 24) {
        return `${diffHours} hour${diffHours > 1 ? "s" : ""}`;
    }

    if (diffDays <= 7) {
        return `${diffDays} day`;
    }

    return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}
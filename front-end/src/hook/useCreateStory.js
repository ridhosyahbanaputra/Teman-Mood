import { useState } from "react";
import stories from "../api/stories";

export default function useCreateStory() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [createError, setCreateError] = useState("");

    const normalizeStory = (story) => {
        return {
            ...story,
            author: story.isAnonymous
                ? "Anonymous"
                : story.user?.username || "Unknown User",
        };
    };

    const createStory = async (payload) => {
        setIsSubmitting(true);
        setCreateError("");

        try {
            const result = await stories.createStory(payload);

            const createdStory = result.data || result.story || result;

            return normalizeStory(createdStory);
        } catch (error) {
            console.error(error);

            const message =
                error.response?.data?.message ||
                "Gagal membuat story.";

            setCreateError(message);
            throw new Error(message, { cause: error });
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        createStory,
        isSubmitting,
        createError,
        setCreateError,
    };
}
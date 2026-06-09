import { useCallback, useState } from "react";
import stories from "../api/stories";

export default function useStoryDetail() {
    const [selectedStory, setSelectedStory] = useState(null);
    const [isDetailLoading, setIsDetailLoading] = useState(false);
    const [detailError, setDetailError] = useState("");

    const normalizeStory = (story) => {
        return {
            ...story,
            author: story.isAnonymous
                ? "Anonymous"
                : story.user?.username || "Unknown User",
        };
    };

    const getStoryDetail = useCallback(async (storyId) => {
        setIsDetailLoading(true);
        setDetailError("");

        try {
            const result = await stories.getStoryById(storyId);

            const story = result.data || result.story || result;
            const normalizedStory = normalizeStory(story);

            setSelectedStory(normalizedStory);
            return normalizedStory;
        } catch (error) {
            console.error(error);

            const message =
                error.response?.data?.message ||
                "Story gagal dibuka.";

            setDetailError(message);
            setSelectedStory(null);

            throw new Error(message, { cause: error });
        } finally {
            setIsDetailLoading(false);
        }
    }, []);

    const clearStoryDetail = () => {
        setSelectedStory(null);
        setDetailError("");
    };

    return {
        selectedStory,
        isDetailLoading,
        detailError,
        getStoryDetail,
        clearStoryDetail,
    };
}
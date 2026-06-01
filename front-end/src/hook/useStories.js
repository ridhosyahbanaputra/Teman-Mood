import { useEffect, useState } from "react";
import stories from "../api/stories";

const normalizeStory = (story) => {
    return {
        ...story,
        author: story.isAnonymous
            ? "Anonymous"
            : story.user?.username || "Unknown User",
    };
};

const normalizeStories = (result) => {
    const storyList = result.data || result.stories || result;

    return Array.isArray(storyList)
        ? storyList.map(normalizeStory)
        : [];
};

export default function useStories() {
    const [storiesData, setStoriesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true;

        stories
            .getStories()
            .then((result) => {
                if (!isMounted) return;

                setStoriesData(normalizeStories(result));
            })
            .catch((error) => {
                console.error(error);

                if (!isMounted) return;

                setError(
                    error.response?.data?.message ||
                    "Gagal mengambil data story."
                );
            })
            .finally(() => {
                if (!isMounted) return;

                setIsLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const fetchStories = async () => {
        setIsLoading(true);
        setError("");

        try {
            const result = await stories.getStories();

            setStoriesData(normalizeStories(result));
        } catch (error) {
            console.error(error);

            setError(
                error.response?.data?.message ||
                "Gagal mengambil data story."
            );
        } finally {
            setIsLoading(false);
        }
    };

    const addStory = (newStory) => {
        setStoriesData((prevStories) => [
            normalizeStory(newStory),
            ...prevStories,
        ]);
    };

    return {
        stories: storiesData,
        isLoading,
        error,
        setError,
        fetchStories,
        addStory,
    };
}
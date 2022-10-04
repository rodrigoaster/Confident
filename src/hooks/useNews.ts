import { useCallback, useContext, useEffect } from "react";
import NewsContext from "../components/Context/NewsContext";

export default function useNews(sectionName: string) {
    const { registerNews, unregisterNews, getNewsByName } = useContext(
        NewsContext
    )

    useEffect(() => () => unregisterNews(sectionName), [
        sectionName,
        unregisterNews
    ])

    const getNews = useCallback(() => getNewsByName(sectionName), [
        sectionName, getNewsByName
    ])

    return { registerNews, getNews }
}

import React, { ReactNode } from "react"

interface NewsData {
    sectionName: string
    overlayDefault: ReactNode
    sectionRef: React.RefObject<HTMLElement>
}

interface NewsContext {
    wrapperRef: React.RefObject<HTMLElement>
    registerNews: (news: NewsData) => void
    unregisterNews: (sectionName: string) => void
    getNewsByName: (sectionName: string) => NewsData | null
}

export default React.createContext<NewsContext>({} as NewsContext)
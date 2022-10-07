import { useCallback, useRef, useState } from 'react';
import NewsContext, { NewsData } from '../Context/NewsContext';
import { Container, OverlayRoot } from './styles';
import { NewsOverlay } from '../NewsOverlay';

export function Wrapper({ children }) {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredNews, setRegisteredNews] = useState<NewsData[]>([])

  const registerNews = useCallback((news: NewsData) => {
    setRegisteredNews(state => [...state, news])
  }, [])

  const unregisterNews = useCallback((sectionName: string) => {
    setRegisteredNews(state => state.filter(news => news.sectionName !== sectionName))
  }, [])

  const getNewsByName = useCallback((sectionName: string) => {
    return registeredNews.find(item => item.sectionName === sectionName) || null
  }, [])


  
  return (
    <NewsContext.Provider value={{
      wrapperRef,
      registeredNews,
      registerNews,
      unregisterNews,
      getNewsByName
    }}>
      
      <Container ref={wrapperRef}>
        <OverlayRoot>
          {registeredNews.map(item => (
            <NewsOverlay key={item.sectionName} news={item}>{item.overlayDefault}</NewsOverlay>
          ))}
        </OverlayRoot>

        {children}
      </Container>
    </NewsContext.Provider>
  );
}

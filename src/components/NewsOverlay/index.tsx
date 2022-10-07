import { useCallback, useLayoutEffect, useState } from 'react';

import { useScroll, useTransform } from 'framer-motion';

import { NewsData } from '../Context/NewsContext';

import { Container } from './styles';

interface Props {
  news: NewsData
  children: React.RefObject<HTMLElement>
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

export function NewsOverlay({ children, news }: Props) {
  
  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: news.sectionRef.current?.offsetTop,
      offsetHeight: news.sectionRef.current?.offsetHeight
    } as SectionDimensions
  }, [])


  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  )


  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()))
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)

  })


  const { scrollY } = useScroll()

  const sectionScrollProgress = useTransform(scrollY, y => (y - dimensions.offsetTop) / dimensions.offsetHeight)

  const opacity = useTransform(sectionScrollProgress, [-0.30, -0.05],[0, 1])


  return (
    <Container style={{ opacity }}>      
      {children}
    </Container>
  );
}

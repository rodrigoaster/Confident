import { ReactNode, useEffect, useRef } from 'react';
import useNews from '../../hooks/useNews';
import { Container } from './styles';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionName: string;
  overlayDefault: ReactNode;
}

export function Section({ 
  sectionName, 
  overlayDefault, 
  children, 
  ...props }: SectionProps) {
    const { registerNews } = useNews(sectionName);

    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (sectionRef.current) {
        registerNews({ sectionName, overlayDefault, sectionRef })
      }
    }, [])

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
}

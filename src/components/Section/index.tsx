import { ReactNode } from 'react';
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
  return (
    <Container {...props}>
      {children}
    </Container>
  );
}

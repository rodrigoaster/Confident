import { Container } from './styles';

interface DefaultOverlayProps {
  firstTitle: string;
  lastTitle: string;
  buttonText: string;
}

export function DefaultOverlay({ firstTitle, lastTitle, buttonText }: DefaultOverlayProps) {
  return (
    <Container>
      <h3>{firstTitle}</h3>
      <strong>{lastTitle}</strong>
      <button>{buttonText}</button>
    </Container>
  );
}

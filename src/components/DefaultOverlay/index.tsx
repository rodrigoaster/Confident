import { Container } from './styles';
import { Button } from './styles'
interface DefaultOverlayProps {
  firstTitle: Array<string>;
  lastTitle: string;
  buttonText: Array<string>;
}

export function DefaultOverlay({ firstTitle, lastTitle, buttonText }: DefaultOverlayProps) {
  return (
    <Container>
      <h3>{firstTitle}</h3>
      <strong>{lastTitle}</strong>
      <Button>{buttonText}</Button>
    </Container>
  );
}

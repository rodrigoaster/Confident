import { Container, ContainerText } from './styles';
import { Button } from './styles'
interface DefaultOverlayProps {
  firstTitle: Array<string>;
  lastTitle: string;
  buttonText: Array<string>;
}

export function DefaultOverlay({ firstTitle, lastTitle, buttonText }: DefaultOverlayProps) {
  return (
    <Container>
      <ContainerText>
        <h4>{firstTitle}</h4>
        <h2>{lastTitle}</h2>
      </ContainerText>
        <Button>
          <button>
            {buttonText}
          </button>
      </Button>
    </Container>
  );
}

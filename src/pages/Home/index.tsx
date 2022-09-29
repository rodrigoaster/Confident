import { DefaultOverlay } from '../../components/DefaultOverlay';
import { Section } from '../../components/Section';
import { Wrapper } from '../../components/Wrapper';
import { Container } from './styles';


export function Home() {
  return (
    <Container>
      <Wrapper>
        <div>
          <Section sectionName="Section One"
            overlayDefault={
              <DefaultOverlay firstTitle='LAST UPDATE' lastTitle='STARLINK MISSION' buttonText='LEARN MORE'/>
            }
          />
        </div>
      </Wrapper>
    </Container>
  );
}

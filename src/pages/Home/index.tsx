import { DefaultOverlay } from '../../components/DefaultOverlay';
import { Section } from '../../components/Section';
import { Wrapper } from '../../components/Wrapper';
import { Container } from './styles';


export function Home() {
  return (
    <Container>
      <Wrapper>
        <div>
          {[
            'One',
            'Two',
            'Three',
            'Four',
          ].map(sectionName => (
            <Section 
              key={sectionName}
              className='bg'
              sectionName={sectionName}
              overlayDefault={
                <DefaultOverlay 
                firstTitle='LAST UPDATE' 
                lastTitle={sectionName} 
                buttonText='LEARN MORE'/>}
            />
          ))}
        </div>
      </Wrapper>
    </Container>
  );
}

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
            'SPACEX + T-MOBILE UPDATE',
            'STARLINK MISSION',
            'STARSHIP UPDATE',
            'STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON',
          ].map(sectionName => (
            <Section 
              key={sectionName}
              className='bg'
              sectionName={sectionName}
              overlayDefault={
                <DefaultOverlay 
                firstTitle={['RECENT LAUNCH']} 
                lastTitle={sectionName} 
                buttonText={[
                  'LEARN MORE']}
                />}
            />
          ))}
        </div>
      </Wrapper>
    </Container>
  );
}

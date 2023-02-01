import ButtonCv from '../../components/buttonCv';
import { Container, HeroContainer } from './style';


function Home(){
   return(
   <Container>
      <HeroContainer>
      <h2>Welcome to my website</h2>
      <h1>I'm Lauricio De Souza</h1>
      <h2>FullStack Developer</h2>
      </HeroContainer>
      <ButtonCv/>
   </Container>
 
   )
}

export default Home;
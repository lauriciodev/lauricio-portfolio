import tecImg from "../../assets/tec.jpg"
import setImg from "../../assets/setup.jpg"
import { Container,ContainerHistory,CardText, ContainerImg } from "./styles"

function TextAbout (){
  return (
   <Container>
    <ContainerHistory>
      <h2>Quem sou eu?</h2>
      <CardText>
        <p>
          Meu nome é Laurício De Souza e desde criança sempre fui apaixonado por tecnologia, mais por vir de uma familia pobre não tinha condições de ter um computador e muito menos pagar por um curso na area. Após um tempo se passar eu consegui uma vaga de emprego em uma empresa de telecomunicações e foi a oportunidade que eu precisava para me desenvolver. Quatro anos se passaram e após passar por algumas empresas de telecomunicações percebi que precisava me aprofundar ainda mais. Foi então que a programação entrou na minha vida comecei com HTML, CSS e JAVASCRIPT tendo como fonte PDF's e cursos gratuitos que encontrava na web.
          Minha transição de carreira não foi nada fácil e nem esperava que fosse, tive que sacrificar muitas noites de sono e muitas das vezes até o horário de almoço. após seis meses de estudo aprofundado consegui uma vaga como desenvolvedor web jr onde trabalho até hoje.
        
        </p>
      </CardText>
      <ContainerImg>
      <img src={setImg} alt="lauricio" />
      <img src={tecImg} alt="lauricio" />
      </ContainerImg>
      
    </ContainerHistory>
   </Container>
  )
}

export default TextAbout;
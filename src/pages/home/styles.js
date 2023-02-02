import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
padding-top: 140px;
gap: 30px;

@media screen and (max-width:600px) {
    padding: 190px  30px 0 30px  ;
  }
`



export const HeroContainer = styled.div`
text-align: center;

& > h1{
  color: #04D939;
  font-size: 3rem;
}

& > h2{
  color: #04D939;
}
`
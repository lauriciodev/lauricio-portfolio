import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  margin: 0 10px;

`

export const TecContainer = styled.div`
width: 100%;
max-width: 600px;
padding: 10px;
border:1px solid  #3ccc;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 3px;


& > img{
  max-width: 140px;
  filter: grayscale();
  border: 1px solid #3ccc;
  transition:all .4s;

  :hover{
    filter: none;
  }
}
`
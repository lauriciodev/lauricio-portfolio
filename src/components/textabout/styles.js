import styled from "styled-components";

 
export const Container = styled.div`
display: flex;
margin-top: 40px;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
text-align: center;

`

export const ContainerHistory = styled.div`
width: 100%;
max-width: 700px;
border: 1px solid #04D939;
color: #04D939;
padding: 10px;
display: flex;
flex-direction: column;
gap: 20px;



`

export const ContainerImg = styled.div`
display: flex;
gap: 10px;
flex-wrap: wrap;
align-items: center;
justify-content: center;


& > img{
  max-width: 300px;
  border: 1px solid #04D939;

}`

export const CardText = styled.div`
width: 100%;
`
   



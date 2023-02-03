import styled from "styled-components";


export const Container = styled.div`
width: 100%;
max-width: 800px;
border: 1px solid #3ccc;
padding: 40px;
margin: 50px auto;
display: flex;
flex-wrap: wrap;
gap: 10px;
align-items: center;
justify-content: center;

&>a{
  width: 100%;
max-width: 350px;
border: 1px solid #3ccc;
padding: 10px;
transition: all .4s;
  color: #3ccc;
  text-decoration: none;
}


& >a:hover{
  color: #000;
  background-color: #3ccc;

}

`

export const CardProject = styled.div`




`
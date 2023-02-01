import styled from 'styled-components';

 export const Container = styled.div`
  background-color: #344;
  height: 100vh;
  width: 100%;
  transition: all .4s;
  max-width: ${props => `${props.width}px`};
  visibility:${props => props.visibility};
`


export const Button = styled.button`
background-color: #444;
position: absolute;
top: 10px;
left: (${props => `${props.posi}px`});
width: 50px;
height: 30px;
line-height: 30px;
color: white;
font-size: 1.3rem;
transition: all .4s;
transform: rotate(${props => `${props.rot}deg`});
`
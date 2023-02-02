import styled from 'styled-components';

 export const Container = styled.div`
  background-color: #050505;
  height: 100vh;
  width: 100%;
  transition: all .4s;
  max-width: ${props => `${props.width}px`};
  visibility:${props => props.visibility};
  position:fixed;
  border-right:1px solid #3ccc;
  z-index:100;

`


export const Button = styled.button`
background-color:transparent;
position: fixed;
top: 10px;
left:${props => `${props.posi}px`};
color: white;
padding:5px;
transition: all .4s;
transform: rotate(${props => `${props.rot}deg`});
border:none;
z-index:1010;


& > svg{
  font-size:1.2rem;
  color:#3ccc;
}
`

export const ContainerSideInfo = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 90px;
padding-top: 20px;
`

export  const SideUp = styled.div`
height: 30%;
padding: 30px;
display: flex;
flex-direction: column;
gap: 10px;
color: #3ccc;
text-align: left;
display: ${props => props.display};

& > img{
  width: 100%;
  border: 1px solid #3ccc;
}
`
export  const SideDown = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
text-align: left;
transition: all .4s;
padding-left: 30px;
display:${props => props.display};




& > a{
  font-size: 1.1rem;
  text-decoration: none;
  color: #3ccc;
  font-weight: 600;
  transition: all .4s;
}


& > a::after{
  content: "";
  position: absolute;
  background-color:#3ccc;
  left: 10px;
  transition: all .4s;

}

& > a:hover::after{
  background-color:#000;
  width: 4px;
  height: 20px;
  color: #000;
  transition: all .4s;

} 
`
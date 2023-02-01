import { useState } from 'react';
import { Button, Container, ContainerSideInfo, SideDown, SideUp } from './styles';
import {  FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import lauricioPhoto from "../../assets/lauricio.png"

function Sidebar(){
  const [side, setSide] = useState(true);
  
  return(
    <>
     <Container 
    width={side ? 200 : 0}
    visibility={side ? "visible" : "hidden"}>
     <ContainerSideInfo>
      <SideUp display={side ? "flex" :"none"}>
         <img src={lauricioPhoto} alt="" />
         <h4>Laurício De Souza</h4>
         <p>FullStack Developer</p>
      </SideUp>
      <SideDown display={side ? "flex" :"none"}>
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/technologies">Technologies</Link>
        <Link to="/contact">Contact</Link>
      </SideDown>

     </ContainerSideInfo>
    </Container>
     <Button onClick={() => setSide(!side)} 
     rot={side ? 0 : 180}
     posi={side ? 140 : 10}
     >
       <FaArrowCircleLeft/>
    </Button>  

   
    </>
   
  )
}

export default Sidebar;
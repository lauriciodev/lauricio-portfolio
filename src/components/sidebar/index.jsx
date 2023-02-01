import { useState } from 'react';
import { Button, Container } from './styles';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

function Sidebar(){
  const [side, setSide] = useState(false);
  
  return(
    <>
     <Container 
    width={side ? 200 : 0}
    visibility={side ? "visible" : "hidden"}>
      
    </Container>
     <Button onClick={() => setSide(!side)} 
     rot={side ? 0 : 180}
     posi={side ? 40 : 150}
     >
       <FaArrowAltCircleLeft/>
    </Button>      
    </>
   
  )
}

export default Sidebar;
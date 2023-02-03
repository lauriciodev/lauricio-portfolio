import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardProject, Container } from './styles';

function Projects (){
  const [project, setProject] = useState([]);

  useEffect(() =>{
  const data = async () => await axios.get("https://api.github.com/users/lauriciodev/repos")
  .then(project =>{
  setProject(project.data);
  console.log(project)
  }).catch((erro) =>{
    console.log(erro);
  })

  data();

  },[])

return(
<Container>
      {
       project && project.map(project =>{
          return(
           <a href={project.html_url} key={project.id}>
            <CardProject >
            <h4>{project.name}</h4>
            </CardProject>
           </a>

          )
        })
      }
      
  </Container>
)


}


export default Projects;
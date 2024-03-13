import "../../styles/_ projectcard.scss";
import {Link } from 'react-router-dom';

function ProjectCard() {
  return (
    <Link to="../../Projects.tsx">
      <div className="item project-card"> 
        <img src="https://tenor.com/pt-BR/view/minecraft-crystal-gif-24596905" alt="enchatedbook.gif"/>
        <h2>Projetos</h2>
      </div>
    </Link>
  )
}

export default ProjectCard
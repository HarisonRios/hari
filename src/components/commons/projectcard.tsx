import "../../styles/_ projectcard.scss";
import {Link } from 'react-router-dom';

function ProjectCard() {
  return (
    <Link to="../../Projects.tsx">
      <div className="item project-card"> 
        <img src="https://i.pinimg.com/originals/ca/59/c7/ca59c7300ea299fc9f429da8e7924e5c.gif" alt="Obsidian Effect"/>
        <h2>Projetos</h2>
      </div>
    </Link>
  )
}

export default ProjectCard
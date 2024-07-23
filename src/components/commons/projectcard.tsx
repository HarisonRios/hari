import "../../styles/_projectcard.scss";
import {Link } from 'react-router-dom';


function ProjectCard() {
  return (
    <Link to="../../Projects.tsx">
      <div className="item project-card"> 
        <img src="https://i.pinimg.com/originals/4f/d0/c0/4fd0c049c173c9beb5a0101a84deb6f9.gif" alt="Obsidian Effect"/>
        <h2>Projetos</h2>
      </div>
    </Link>
  )
}

export default ProjectCard
import "../../styles/_ projectcard.scss";
import {Link } from 'react-router-dom';

function ProjectCard() {
  return (
    <Link to="../../Projects.tsx">
      <div className="item project-card"> 
        <img src="../public/home/enderchest.gif"/>
        <h2>Projetos</h2>
      </div>
    </Link>
  )
}

export default ProjectCard
import { Link } from "react-router-dom";
import "./_project.scss";
import GithubCommits from "./components/githudcommitscard";

function Projects() {
  return ( 
    <div className="project"> 

    <h1> Em construção 🚧 </h1>
    <br/>
    <GithubCommits />
    <Link to="/">Volte para pagina inicial</Link>

    </div>

  )
}

export default Projects



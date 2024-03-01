import "../../styles/_githubcard.scss";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";



function GithubCard() {
  return (
    <>
  
    <a target="_blank" href="https://github.com/HarisonRios" className="item content-4"> 
    <div className="icons">
    <FaGithub id="github"/>
    <h2>Confira meus repositórios <IoMdArrowForward id="arrow"/> </h2>
    
    </div>
    </a>

    </> 
  )
}

export default GithubCard

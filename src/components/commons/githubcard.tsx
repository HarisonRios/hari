import "../../styles/_githubcard.scss";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { github_url } from "../partials/constant";

function GithubCard() {
  return (
    <a target="_blank" href={github_url} className="item github-card"> 
      <div className="icons">
        <FaGithub id="github"/>
        <h2>Confira meus repositórios <IoMdArrowForward id="arrow"/> </h2>
      </div>
    </a>
  )
}

export default GithubCard
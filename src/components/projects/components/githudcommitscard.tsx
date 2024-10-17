import "../styles/_githubcommitscard.scss";
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from "react-icons/fa";


const GithubCommits = () => {
  const username = 'HarisonRios'; 

  return (
    <div className="item githubcommitscard">
      <h2>Contribuições</h2>
      <GitHubCalendar username={username} />
      <FaGithub id="icon"/>
    </div>
  );
};

export default GithubCommits;

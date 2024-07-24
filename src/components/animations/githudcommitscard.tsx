import "../../styles/_githubcommitscard.scss";
import GitHubCalendar from 'react-github-calendar';

const GithubCommits = () => {
  const username = 'HarisonRios'; 

  return (
    <div className="item githubcommitscard">
      <h2>Contribuições no GitHub</h2>
      <GitHubCalendar username={username} />
    </div>
  );
};

export default GithubCommits;

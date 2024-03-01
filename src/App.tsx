import "./styles/_main.scss";
import IntroCard from "./components/commons/introcard";
import InstaCard from "./components/commons/instacard";
import LocationCard from "./components/commons/locationcard";
import TimeCard from "./components/commons/timecard";
import GithubCard from "./components/commons/githubcard";
import ProjectCard from "./components/commons/projectcard";
import SpotifyCard from "./components/commons/spotifycard";
import TecCard from "./components/commons/teccard";
import MeCard from "./components/commons/mecard";
import ContactmeCard from "./components/commons/contactmecard";
 



function App() {
  return (
    <>
    <main>
        <div className="container">
        <IntroCard/>
        <InstaCard/>
        <LocationCard/>
        <TimeCard/> 
        <GithubCard/>
        
        <ProjectCard/>
        <SpotifyCard/>
        <TecCard/>
        <MeCard/>
        <ContactmeCard/>
      </div>
    </main>

    </>
  )
}

export default App

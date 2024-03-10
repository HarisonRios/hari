import { useEffect } from "react";
import ContactmeCard from "./components/commons/contactmecard";
import GithubCard from "./components/commons/githubcard";
import InstaCard from "./components/commons/instacard";
import IntroCard from "./components/commons/introcard";
import LocationCard from "./components/commons/locationcard";
import MeCard from "./components/commons/mecard";
import ProjectCard from "./components/commons/projectcard";
import SpotifyCard from "./components/commons/spotifycard";
import TecCard from "./components/commons/teccard";
import TimeCard from "./components/commons/timecard";
import { clock } from "./components/partials/constant";
import "./styles/_main.scss";

function App() {
  useEffect(() => {
    const interval = setInterval(clock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
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

  )
}
export default App
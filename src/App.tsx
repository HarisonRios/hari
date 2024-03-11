import { useEffect, useState } from "react";
import ContactmeCard from "./components/commons/contactmecard";
import GithubCard from "./components/commons/githubcard";
import DiscordCard from "./components/commons/discordcard";
import IntroCard from "./components/commons/introcard";
import LocationCard from "./components/commons/locationcard";
import MeCard from "./components/commons/mecard";
import ProjectCard from "./components/commons/projectcard";
import SpotifyCard from "./components/commons/spotifycard";
import TecCard from "./components/commons/teccard";
import TimeCard from "./components/commons/timecard";
import { clock } from "./components/partials/constant";
import "./styles/_main.scss";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(clock, 1000);
    return () => clearInterval(interval);
  }, []);

    useEffect(() => {
      getData();
    }, [])
  
    async function getData(){
      const url = "https://api.lanyard.rest/v1/users/398875341554188290"
      try {
        const response = await axios.get(url)
        setData(response.data.data)
      } catch (e) { console.error(e) }
    }

    useEffect(() => {
      console.log(data)
    }, [data])
    

  return (
      <div className="container">
        <IntroCard/>
        <DiscordCard discordData={data.discord} />
        <LocationCard/>
        <TimeCard/> 
        <GithubCard/>
        <ProjectCard/>
        <SpotifyCard spotifyData={data.spotify} />
        <TecCard/>
        <MeCard/>
        <ContactmeCard/>
      </div>

  )
}
export default App




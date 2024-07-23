import axios from "axios";
import { useEffect, useState } from "react";
import ContactmeCard from "./components/commons/contactmecard";
import DiscordCard from "./components/commons/discordcard";
import GithubCard from "./components/commons/githubcard";
import IntroCard from "./components/commons/introcard";
import LocationCard from "./components/commons/locationcard";
import MeCard from "./components/commons/mecard";
import ProjectCard from "./components/commons/projectcard";
import SpotifyCard from "./components/commons/spotifycard";
import TecCard from "./components/commons/teccard";
import TimeCard from "./components/commons/timecard";
import CvCard from "./components/commons/cv";
import TemperaturaCard from "./components/commons/temperatura";
// import PreLoader from "./components/partials/preloader";
import { DiscordData, SpotifyData, clock, kv } from "./components/partials/constant";
import "./styles/_main.scss";



function App() {
  const [data, setData] = useState({});
  const [spotifyData, setSpotifyData] = useState<SpotifyData | undefined>(undefined);
  const [discordData, setDiscordData] = useState<DiscordData | undefined>(undefined);
  const [locationData, setLocationData] = useState<kv>({location: undefined});

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
        setDiscordData(response.data.data.discord_user)
        setSpotifyData(response.data.data.spotify)
        setLocationData(response.data.data.kv)
      } catch (e) { console.error(e) }
    }

    useEffect(() => {
      console.log(data)
    }, [data])
    

  return (
    <> 
    {/* <PreLoader/> */}
      <div className="container">
        <IntroCard/>
        <DiscordCard discord_user={discordData}/>
        <LocationCard location={locationData}/>
        <TimeCard/> 
        <GithubCard/>
        <ProjectCard/>
        <SpotifyCard spotifyData={spotifyData}/> 
        <TecCard/>
        <MeCard/>
        <TemperaturaCard/>
        <CvCard/>
        <ContactmeCard/>
      </div>
      </>
  )
}
export default App




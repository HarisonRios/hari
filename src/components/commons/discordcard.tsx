import { FaDiscord } from "react-icons/fa";
import "../../styles/_discordcard.scss";
import { DiscordCardProps, discord_url } from "../partials/constant";


function Discordcard({discord_user}: DiscordCardProps) {
  return (
    <a href={discord_url} target="_blank">
    <div className="item discord-card">  
     <FaDiscord id="discord"/>
        {discord_user &&  (
            <>
            <div className="discorditems"> 
            <img alt="Avatar Discord" src={`https://cdn.discordapp.com/avatars/398875341554188290/${discord_user.avatar}`}/>
            <h1>  {discord_user.global_name} </h1>
            <h2>  {discord_user.active_on_discord_desktop}  </h2>
            <h2>  {discord_user.active_on_discord_mobile}  </h2>
            <DiscordStatus online={discord_user.active_on_discord_desktop} />
            </div>
            </>
         )
        }
    </div>
    </a>
  )
};

const DiscordStatus = ({ online }: {online: boolean}) => {
  return <div id="status" style={{ backgroundColor: online ? "red": "green", width: "20px", height: "20px", borderRadius: "360px" }}/>
}

export default Discordcard

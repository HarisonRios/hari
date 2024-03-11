import "../../styles/_discordcard.scss";
import { DiscordCardProps } from "../partials/constant";
import { ReactElement } from "react";


function Discordcard({ discordData }: DiscordCardProps): ReactElement {
  return (
    <div className="item discord-card">  
        {discordData &&  (
            <>
            <img src={discordData.avatar} alt="teste"/>
            <h1> {discordData.username} </h1>
            <h2> {discordData.id} </h2>
            <h3> {discordData.discord_status} </h3>
            </>
          )
        }
    </div>
  )
};



export default Discordcard

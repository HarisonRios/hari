import "../../styles/_spotiftcard.scss";
import { SpotifyCardProps } from "../partials/constant";
import { FaSpotify } from "react-icons/fa";
import { GiSoundOff } from "react-icons/gi";


function SpotifyCard({ spotifyData }: SpotifyCardProps) {
  return (
    <div className="spotify-card">
      <FaSpotify id="spotify" />  
      {spotifyData ? (
        <div className="listen"> 
          <p>Escultando agora...</p>
          <img alt="Album Spotify" src={spotifyData.album_art_url}/>
          <h1 id="listentext">{spotifyData.song}</h1>
          <h2 id="listentext">{spotifyData.artist}</h2>
          <h3 id="listentext">{spotifyData.album}</h3>
        </div>
      ) : (
        <div className="spotifyclosed"> 
        <GiSoundOff />
        <p>Spotify Fechado</p>
        <h2>Nada tocando no momento</h2>
        </div>
      )}
    </div>
  );
};

export default SpotifyCard;

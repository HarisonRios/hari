import "../../styles/_spotiftcard.scss";
import { FaSpotify } from "react-icons/fa";
import { SpotifyCardProps } from "../partials/constant";
import { ReactElement } from "react";




function SpotifyCard({ spotifyData }: SpotifyCardProps): ReactElement {
  return (

    <div className="spotify-card">
        <FaSpotify id="spotify" />  
        <p>Escultando agora...</p>
        {spotifyData &&  (
            <>
            <div className="listen"> 
            <img alt="Album Spotify" src={spotifyData.album_art_url}/> 
         
            <h1> {spotifyData.song} </h1>
            <h2> {spotifyData.artist} </h2>
            <h3> {spotifyData.album} </h3>
            
            </div>
            </>
          )
        }
    </div>
  )
};

export default SpotifyCard







// const defaultSong = {
//   track: {
//     album: {
//       images: [
//         {
//           height: 640,
//           url: "https://i.scdn.co/image/ab67616d0000b273010c8f1c844abf0e172962e9",
//           width: 640,
//         },
//       ],
//     },
//     artists: [
//       {
//         name: "Ryu, The Runner, Enzo from the Block",
//       },
//     ],
//     duration_ms: 195882,
//     external_urls: {
//       spotify: "https://open.spotify.com/track/159CffclwSTvynlA0BUlQG",
//     },
//     name: "3S",
//   },
//   played_at: "2024-10-03T14:16:32.895Z",
// };
import "../../styles/_spotiftcard.scss";
import { FaSpotify } from "react-icons/fa";
// import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

function SpotifyCard() {
  return (
    <div className="spotify-card"> 
      {/* <Player
        trackList={tracks}
        includeTags={false}
        includeSearch={false}
        showPlaylist={false}
        sortTracks={false}
        autoPlayNextTrack={false}
        customColorScheme={colors}
          /> */}
      <div className="icons">
        <FaSpotify id="spotify"/>
      </div>
    </div>
  )
}

// const tracks = [
//   {
//     url: "../../public/music/piano.mp3",
//     title: "Sweden - Minecraft",
//     tags: ["Sweden"],
//   },
//   {
//     url: "../../public/music/classic.mp3",
//     title: "C418 - Minecraft",
//     tags: ["C418"],
//   },
//   {
//     url: "../../public/music/classic2.mp3",
//     title: "Subwoofer - Minecraft",
//     tags: ["Subwoofer"],
//   },
// ];

// const colors = {
//   tagsBackground: "#9400d3",
//   tagsText: "#ffffff",
//   tagsBackgroundHoverActive: "#6e65f1",
//   tagsTextHoverActive: "#ffffff",
//   searchBackground: "#18191f",
//   searchText: "#ffffff",
//   searchPlaceHolder: "#575a77",
//   playerBackground: "#18191f",
//   titleColor: "#ffffff",
//   timeColor: "#ffffff",
//   progressSlider: "#9400d3",
//   progressUsed: "#ffffff",
//   progressLeft: "#151616",
//   bufferLoaded: "#1f212b",
//   volumeSlider: "#9400d3",
//   volumeUsed: "#ffffff",
//   volumeLeft: "#151616",
//   playlistBackground: "#18191f",
//   playlistText: "#575a77",
//   playlistBackgroundHoverActive: "#18191f",
//   playlistTextHoverActive: "#ffffff",
// };

export default SpotifyCard
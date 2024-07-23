export const github_url = "https://github.com/HarisonRios";
export const discord_url = "https://discord.com/users/hariisu_";
export const spotify_url = "https://open.spotify.com/playlist/6fiyHiNYi1gDeaRn9ONCcy";
export const linkedin_url = "https://www.linkedin.com/in/harisonrios/";
export const instagram_url = "https://www.instagram.com/harison_rioos/";
export const email_url = "mailto:hharison562@gmail.com.br";


export function clock() { 
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
  
    document.querySelectorAll('.clock')[0].innerHTML = 
      harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
  
      
    function harold(standIn: string | number): any {
      if (Number(standIn) < 10) {
        standIn = '0' + standIn
      }
      return standIn;
    }
  }


   export interface SpotifyData {
    album_art_url: string | undefined;
    artist: string | null;
    song: string | null;
    album: string | null;
  }

  export interface SpotifyCardProps {
    spotifyData: SpotifyData | undefined;
  }
 

  export interface DiscordData {
    avatar: string | undefined;
    global_name: string | null;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean; 
  }

  export interface DiscordCardProps {
    discord_user: DiscordData | undefined;
  }



  export interface kv {
    location : string | null | undefined;
  }

  export interface LocationType {
    location: kv;
  }






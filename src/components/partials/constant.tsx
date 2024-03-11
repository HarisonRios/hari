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
  
   interface SpotifyData {
    album_art_url: string | undefined;
    artist: string | null;
    song: string | null;
    album: string | null;
  }

  export interface SpotifyCardProps {
    spotifyData: SpotifyData;
  }

  interface LocationData {
    location: string | undefined;
  }

  export interface LocationCardProps {
    LocationData: LocationData;
  }
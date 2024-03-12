import "../../styles/_locationcard.scss";
import { LocationType } from "../partials/constant";
import { GiBrazil } from "react-icons/gi";



function Locationcard({location}: LocationType)  {
  return (
    <div className="item location-card">  
      <GiBrazil id="br"/>
       <div className="pulse1"></div>
       <div className="pulse2"></div>
       <div className="icon"></div>
      { location && (
          <>
          
          <h1> 📍 {location.location}</h1>
          </>
          )
        }
    </div>
  )
}

export default Locationcard
import "../../styles/_instacard.scss";
import { FaInstagram } from "react-icons/fa";

function Instacard() {
  return (
    <a 
      target="_blank" 
      href="https://www.instagram.com/harison_rioos/" 
      className="item insta-card">  
      <FaInstagram />
    </a>
  )
}

export default Instacard
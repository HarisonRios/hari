import "../../styles/_contactmecard.scss"; 
import { 
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
// import resume from '../../../public/cv.pdf';



  function  ContactmeCard() {
    return (
      <>
    <div className="item footer"> 

    {/* <a href={resume} download={resume}><p> Baixar Curriculo</p></a> */}
    <a href="mailto:email@provedor.com.br" target="_blank"> <MdOutlineMailOutline size={45}/> </a>
    <a href="https://github.com/HarisonRios" target="_blank"> <FaGithub size={45}/> </a>
    <a href="https://www.linkedin.com/in/harison-rios-046731235/" target="_blank"> <FaLinkedin size={45}/> </a> 
    <a href="https://www.instagram.com/harison_rioos/" target="_blank"> <FaInstagram size={45} /> </a>
    <a href="https://discord.com/users/hariisu_" target="_blank"> <FaDiscord size={45}/> </a>
    </div>     
      </>
    )
  }
  
  export default ContactmeCard
  
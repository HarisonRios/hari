import "../../styles/_contactmecard.scss"; 
import { 
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function ContactmeCard() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleClick = () => {
    Swal.fire({
        backdrop: `rgba(51, 14, 73, 0.263)`,
        title: 'Obrigado!',
        text: 'Sua mensagem foi enviado com sucesso.',
        icon: 'success',
        confirmButtonText: 'Voltar'
    });
};

function sendEmail(e: { preventDefault: () => void; }) {
  e.preventDefault();
  
  if(name === '' || email === '' || message === '') {
    Swal.fire({
      backdrop: `rgba(51, 14, 73, 0.263)`,
      title: 'Por favor !',
      text: 'Prencha o formulario',
      icon: 'error',
      confirmButtonText: 'Voltar'
    });
    return;
  }

  const templateParams = {
    from_name: name,
    message: message,
    email: email
  }


  emailjs.send("service_8vyp68t", "template_ofgphb1", templateParams, "KNMpzbiR9gngVz57L")
  .then((response) =>{
    console.log("Email enviado com sucesso", response.status, response.text)
    setName('')
    setEmail('')
    setMessage('')


  }, (err) => {
    console.log("Email não foi enviado - ERROR: ", err)
  })
}
 

  return ( 
    <div className="item contact-card"> 
      <form className="form" onSubmit={(sendEmail)} id="meuFormulario">
        <h2>Vamos Conversar</h2>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <input className="button" type="submit" value="Enviar" onClick={handleClick}/>
      </form>

      <div className="contact-card__icons">
        <a href="mailto:email@provedor.com.br" target="_blank"> <MdOutlineMailOutline size={45}/> </a>
        <a href="https://github.com/HarisonRios" target="_blank"> <FaGithub size={45}/> </a>
        <a href="https://www.linkedin.com/in/harison-rios-046731235/" target="_blank"> <FaLinkedin size={45}/> </a> 
        <a href="https://www.instagram.com/harison_rioos/" target="_blank"> <FaInstagram size={45} /> </a>
        <a href="https://discord.com/users/hariisu_" target="_blank"> <FaDiscord size={45}/> </a> 
      </div> 
    </div>
  );
}

export default ContactmeCard;
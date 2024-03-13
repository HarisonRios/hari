import moment from 'moment';
import "../../styles/_timecard.scss";


function ImagemComBaseNoHorario() {
  const horaAtual = Number(moment().format('H'));
  let imagem;
  console.log(horaAtual);

  if (horaAtual >= 6 && horaAtual < 12) { // Manhã
    imagem = <img src="../../public/morning.png" alt="Manhã" />;
  } 
  else if (horaAtual >= 12 && horaAtual < 19) { // Tarde
    imagem = <img src="../../public/evening.png" alt="Tarde" />;
  } 
  else if (horaAtual >= 19 && horaAtual < 24){ // Noite
    imagem = <img src="../../public/night.png" alt="Noite" />;
  }
  else{ // Madrugada
    imagem = <img src="../../public/dawn.png" alt="Madrugada" />;
  }

  return (
    <div className="item time-card">
      {imagem}
      <h2> Em&nbsp;São&nbsp;Paulo</h2>
      <div className="clock"> 
      </div>
    </div>
  );
  }



export default ImagemComBaseNoHorario;

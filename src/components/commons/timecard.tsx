import "../../styles/_timecard.scss";
import moment from 'moment';

function ImagemComBaseNoHorario() {
  const horaAtual = Number(moment().format('H'));
  let imagem;

  if (horaAtual >= 6 && horaAtual < 12) { // Manhã
    imagem = <img src="../../public/time/morning.png" alt="Manhã" />;
  } 
  else if (horaAtual >= 12 && horaAtual < 19) { // Tarde
    imagem = <img src="../../public/time/evening.png" alt="Tarde" />;
  } 
  else if (horaAtual >= 19 && horaAtual < 24){ // Noite
    imagem = <img src="../../public/time/night.png" alt="Noite" />;
  }
  else{ // Madrugada
    imagem = <img src="../../public/time/dawn.png" alt="Madrugada" />;
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
  
function clock() {
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

setInterval(clock, 1000);
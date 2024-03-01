import "../../styles/_timecard.scss";
import moment from 'moment';


function ImagemComBaseNoHorario() {
  const horaAtual = moment().format('H');
  let imagem;
  if (horaAtual >= 6 && horaAtual < 12) {
    // Manhã
    imagem = <img src="../../public/morning.png" alt="Manhã" />;
  } 
  else if (horaAtual >= 12 && horaAtual < 19) {
    // Tarde
    imagem = <img src="../../public/evening.png" alt="Tarde" />;
  } 
  else if (horaAtual >= 19 && horaAtual < 24){
    // Noite
    imagem = <img src="../../public/night.png" alt="Noite" />;
  }
  else{
    // Madrugada
    imagem = <img src="../../public/dawn.png" alt="Madrugada" />;
  }
  return (
    <div className="item content-3">
      {imagem}
        <h2> Em&nbsp;São&nbsp;Paulo</h2>
    <div className="clock"> 
    </div>
    </div>
  );
  }
  
  
  export default ImagemComBaseNoHorario;
  

 
function clock() {
  var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

  document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

  function harold(standIn: string | number): any {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);



import moment from 'moment';
import "../../styles/_timecard.scss";


function ImagemComBaseNoHorario() {
  const horaAtual = Number(moment().format('H'));
  let imagem;
  console.log(horaAtual);

  if (horaAtual >= 6 && horaAtual < 12) { // Manhã
    imagem = <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2016/08/o-que-fazer-em-sao-paulo-capa2019-01.jpg" alt="Manhã" />;
  } 
  else if (horaAtual >= 12 && horaAtual < 19) { // Tarde
    imagem = <img src="https://blogdaliga.com.br/wp-content/uploads/2021/03/setor-imobiliario.jpg" alt="Tarde" />;
  } 
  else if (horaAtual >= 19 && horaAtual < 24){ // Noite
    imagem = <img src="https://letsimage.s3.amazonaws.com/letsbook/211/destinos/2/1.jpg" alt="Noite" />;
  }
  else{ // Madrugada
    imagem = <img src="http://i1.r7.com/data/files/2C95/948F/3709/C402/0137/0D59/C941/432B/frio-madrugada-g-20120502.jpg" alt="Madrugada" />;
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

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
    imagem = <img src="https://blog.maxmilhas.com.br/wp-content/uploads/2020/07/raphael-fernandes-0uzG88fsp6Q-unsplash-scaled-770x450.jpg" alt="Tarde" />;
  } 
  else if (horaAtual >= 19 && horaAtual < 24){ // Noite
    imagem = <img src="https://letsimage.s3.amazonaws.com/letsbook/211/destinos/2/1.jpg" alt="Noite" />;
  }
  else{ // Madrugada
    imagem = <img src="https://unidospelavida.org.br/wp-content/uploads/2021/09/banner-site-ponte-estaiada.png" alt="Madrugada" />;
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

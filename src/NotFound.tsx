import { Link } from "react-router-dom";
import "./styles/_notfound.scss";

function NotFound() {
  return (
      <div id="notfound" className="notfound"> 
        <h1>404 - Pagina Não Encontrada</h1>
        <br/>
        <Link to="/">Volte para pagina inicial</Link>
      </div>
  );
}

export default NotFound;




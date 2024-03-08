import { Link } from "react-router-dom";

function NotFound() {
  return (
    <body id="error"> 
      <div className="notfound"> 
        <h1>404 - Pagina Não Encontrada</h1>
        <br/>
        <Link to="/">Volte para pagina inicial</Link>
      </div>
    </body>
  );
}

export default NotFound;
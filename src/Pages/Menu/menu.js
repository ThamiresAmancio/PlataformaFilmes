import { Link } from "react-router-dom";
import "../Home/style.css";
import "./style.css";

function MenuFilmes({ black, change }) {
  return (
    <>
      <header className={black ? "black" : ""}>
        <h1>Tflix</h1>
        <div>
          <Link className="link" to="/">
            Início
          </Link>
        </div>
        <div>
          <Link className="link" to="/filmes/populares">
            Filmes
          </Link>
        </div>
        <input
          type="search"
          placeholder="Pesquise as categorias dos filmes..."
          onChange={change}
        />
      </header>
    </>
  );
}

export default MenuFilmes;

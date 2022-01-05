import { Categorias, Titulo } from "./style";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";
import { api } from "../service/api";
import { Link, useLocation } from "react-router-dom";
import MenuFilmes from "../Menu/menu";
import "../Home/style.css";
import { FilmesRandom } from "../Home/style";

function Filmes() {
  const [filmes, setFilmes] = useState([]);

  const api_key = "23ef43567db026524d99518cb6f8a479";
  const languagePtBr = "pt-BR";
  const query = new URLSearchParams(useLocation().search);
  const genre = query.get("genre");
  const name = query.get("name");

  const [busca, setBusca] = useState("");

  const results = filmes.filter(
    (i) => i.title.toLowerCase().indexOf(busca) !== -1
  );

  function handleSearchChange(e) {
    setBusca(e.target.value);
  }

  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    try {
      api
        .get(
          `/discover/movie?with_genres=${genre}&language=${languagePtBr}&api_key=${api_key}`
        )
        .then(({ data }) => {
          setFilmes(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div>
        <MenuFilmes black={blackHeader} change={handleSearchChange} />
      </div>
      <Titulo>{name}</Titulo>
      <Categorias>
        {results.length !== 0 ? (
          results.map((item) => {
            return (
              <div key={item.id}>
                <Link className="link" to={`/filme/descricao?name=${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                    alt={item.title}
                    title={item.title}
                  />
                  <p>{item.title}</p>
                </Link>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </Categorias>
      <FilmesRandom></FilmesRandom>
      <Footer />
    </>
  );
}

export default Filmes;

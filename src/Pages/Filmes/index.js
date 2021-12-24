import Menu from "../Menu";
import { Categorias, Titulo } from "./style";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";
import { api } from "../service/api";
import { Link, useLocation } from "react-router-dom";

function Filmes() {
  const [genres, setGenres] = useState([]);

  const api_key = "23ef43567db026524d99518cb6f8a479";

  const languagePtBr = "pt-BR";

  const query = new URLSearchParams(useLocation().search);
  const genre = query.get("genre");
  const name = query.get("name");

  useEffect(() => {
    try {
      api
        .get(
          `/discover/movie?with_genres=${genre}&language=${languagePtBr}&api_key=${api_key}`
        )
        .then(({ data }) => {
          setGenres(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div>
        <Menu />
      </div>
      <Titulo>{name}</Titulo>
      <Categorias>
        {genres.length !== 0 ? (
          genres.results.map((item) => {
            return (
              <div key={item.id}>
                <Link to="/filme/descricao">
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                    alt={item.title}
                    title={item.title}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </Categorias>
      <Footer />
    </>
  );
}

export default Filmes;

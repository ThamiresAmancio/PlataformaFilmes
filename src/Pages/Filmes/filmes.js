import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import { FilmesRandom, Titulo } from "../Home/style";
import { api } from "../service/api";
import MenuFilmes from "../Menu/menu";
import Menu from "../Menu/index";
import Paginations from "./pagination";

function FilmesPopulares() {
  const api_key = "23ef43567db026524d99518cb6f8a479";

  const languagePtBr = "pt-BR";
  const [filmesPopular, setFilmesPopular] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);

  const [busca, setBusca] = useState("");

  const filmes = filmesPopular.filter(
    (i) => i.title.toLowerCase().indexOf(busca) !== -1
  );

  function handleSearchChange(e) {
    setBusca(e.target.value);
  }

  //pega aonde que a página está EX: 1
  const [currentPage, setCurrentPage] = useState(1);

  //pega o total de páginas
  const [totalPage, setTotalPage] = useState(null);

  // quantidade de items
  const [perPage, setPerpage] = useState(1);

  useEffect(() => {
    if (currentPage) {
      api
        .get(
          `/movie/popular?api_key=${api_key}&language=${languagePtBr}&page=${currentPage}`
        )
        .then(({ data }) => {
          setFilmesPopular(data.results);
          setTotalPage(data?.total_pages);
        });
    }
  }, [currentPage]);

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

  //função que aumenta uma página
  function nextPage(page) {
    setCurrentPage((page) => page + 1);
  }

  //função que diminui uma página
  function backPage(page) {
    setCurrentPage((page) => page - 1);
  }

  return (
    <>
      <div>
        <MenuFilmes change={handleSearchChange} black={blackHeader} />
        <Titulo>Filmes Populares</Titulo>
        <FilmesRandom>
          {filmes.length !== 0 ? (
            filmes.map((movie) => {
              return (
                <>
                  <div key={movie.id}>
                    <div key={movie.id}>
                      <Link to={`/filme/descricao?name=${movie.id}`}>
                        <img
                          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                          alt={movie.title}
                          title={movie.title}
                        />
                      </Link>
                      <p>{movie.title}</p>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <> </>
          )}
        </FilmesRandom>

        <Paginations
          //proxima
          nextPage={nextPage}
          //anterior
          backPage={backPage}
          //página atual
          currentPage={currentPage}
          //quantidade de paginas
          qtdItem={perPage}
          // total de páginas
          totalResults={totalPage}
        />
      </div>
      <FilmesRandom></FilmesRandom>
      <Footer />
    </>
  );
}

export default FilmesPopulares;

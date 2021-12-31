import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../Components/Footer";
import Menu from "../Menu";
import { api } from "../service/api";
import "./movies.css";

function Description() {
  const api_key = "23ef43567db026524d99518cb6f8a479";

  const languagePtBr = "pt-BR";

  const [moviesDescription, setMoviesDescription] = useState([]);

  const query = new URLSearchParams(useLocation().search);

  const name = query.get("name");

  useEffect(() => {
    try {
      api
        .get(`/movie/${name}?api_key=${api_key}&language=${languagePtBr}`)
        .then(({ data }) => {
          setMoviesDescription(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function getFilmesById() {
    const array = [];
    array.push(moviesDescription);
    return array;
  }

  return (
    <>
      {getFilmesById().map((item) => {
        return (
          <>
            <section
              key={item.id}
              className="featured"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
              }}
            >
              <div className="featured--vertical">
                <div className="featured--horizontal">
                  <div className="featured--name">{item.title}</div>
                  <div className="featured--info">
                    <div className="featured--points">
                      {item.vote_average} pontos
                    </div>
                  </div>
                  <div className="featured--description">{item.overview}</div>
                  <div className="featured--buttons">
                    <Link
                      to={`/videos?id=${item.id}`}
                      className="featured--watchButton"
                    >
                      ▶ Assistir Trailer
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
    </>
  );
}

export default Description;

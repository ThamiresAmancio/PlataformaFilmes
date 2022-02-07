import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { api } from "../service/api";
import "./movies.css";
import { IconDelete } from "./style";

function Description() {
  const api_key = "23ef43567db026524d99518cb6f8a479";

  const languagePtBr = "pt-BR";

  const [moviesDescription, setMoviesDescription] = useState([]);

  const [videos, setVideos] = useState([]);
  const query = new URLSearchParams(useLocation().search);
  const name = query.get("name");

  useEffect(() => {
    try {
      api
        .get(
          `/movie/${name}/videos?api_key=${api_key}&language=${languagePtBr}`
        )
        .then(({ data }) => {
          setVideos(data?.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function getVideos(listVideos) {
    const videosMovies = [];
    for (let i = 0; i < 1; i++) {
      videosMovies.push(listVideos[i]);
    }
    return videosMovies;
  }

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

  const [show, setShow] = useState(false);

  const handleModalClose = (e) => {
    const currentClass = e.target.className;

    if (currentClass === "modal-card") {
      return;
    }
    setShow(false);
  };

  const handleModalOpen = () => {
    setShow(true);
  };

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

                  <div className="featured--genres"></div>
                  <div className="featured--description">{item.overview}</div>
                  <div className="featured--buttons">
                    <div
                      className="featured--watchButton"
                      onClick={handleModalOpen}
                    >
                      ▶ Assistir Trailer
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div hidden={!show}>
              <div className="modal-background">
                {" "}
                <IconDelete onClick={handleModalClose} />
                <div className="modal-card">
                  {videos.length > 0 ? (
                    getVideos(videos).map((item) => {
                      return (
                        <ReactPlayer
                          width={"1200px"}
                          height={"650px"}
                          url={`https://www.youtube.com/watch?v=${item.key}`}
                        />
                      );
                    })
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Description;

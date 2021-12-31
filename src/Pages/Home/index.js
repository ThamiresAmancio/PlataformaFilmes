import React, { useEffect, useState } from "react";
import Menu from "../Menu";
import "../../App.css";
import Footer from "../../Components/Footer";
import { api } from "../service/api";
import List from "./movie";

function Home() {
  const api_key = "23ef43567db026524d99518cb6f8a479";

  const languagePtBr = "pt-BR";

  const [generos, setGeneros] = useState([]);
  const [busca, setBusca] = useState("");
  const [img, setImg] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [movieList, setMovieList] = useState([]);

  const results = generos.filter(
    (genre) => genre.name.toLowerCase().indexOf(busca) !== -1
  );

  function handleSearchChange(e) {
    setBusca(e.target.value.toLowerCase());
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
    api
      .get(`/genre/movie/list?api_key=${api_key}&language=${languagePtBr}`)
      .then(({ data }) => {
        let info = [];
        for (let i = 0; i < data?.genres?.length; i++) {
          const key = data.genres[i].name;
          info[key] = {
            id: data.genres[i].id,
            name: data.genres[i].name,
          };
        }
        setGeneros(data?.genres);
      });
  }, []);

  useEffect(() => {
    api
      .get(`/movie/popular?api_key=${api_key}&language=${languagePtBr}&page=1`)
      .then(({ data }) => {
        setImg(data);
      });
  });

  return (
    <>
      <Menu change={handleSearchChange} black={blackHeader} />

      <div>
        {Object.keys(results).map((item) => {
          return (
            <div key={item.id}>
              <List name={results?.[item]?.name} id={results?.[item]?.id} />
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Home;

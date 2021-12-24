import React, { useEffect, useState } from "react";
import Menu from "../Menu";
import "../../App.css";
import Footer from "../../Components/Footer";
import { api } from "../service/api";
import List from "./movie";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Categorias, FilmesRandom, ImgSlide, Titulo } from "./style";

function Home() {
  const api_key = "23ef43567db026524d99518cb6f8a479";

  const languagePtBr = "pt-BR";

  const [generos, setGeneros] = useState([]);
  const [imgPopulares, setImgPopulares] = useState([]);
  const [busca, setBusca] = useState("");

  const results = generos.filter(
    (genre) => genre.name.toLowerCase().indexOf(busca) !== -1
  );

  function handleSearchChange(e) {
    setBusca(e.target.value.toLowerCase());
  }

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
      .get(`movie/popular?api_key=${api_key}&language=${languagePtBr}&page=1`)
      .then(({ data }) => {
        setImgPopulares(data?.results);
      });
  }, []);

  function getImages(listImg) {
    const img = [];
    for (let i = 0; i < 5; i++) {
      img.push(listImg[i]);
    }
    return img;
  }

  return (
    <>
      <Menu change={handleSearchChange} />
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

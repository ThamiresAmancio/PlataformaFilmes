import React, { useEffect, useState } from 'react';
import Menu from '../Menu';
import { FilmesRandom, SlideImage, Titulo } from './style';
import img1 from '../../Assets/jogoperigoso.PNG';
import SimpleImageSlider from "react-simple-image-slider";
import '../../App.css';
import Footer from '../../Components/Footer';
import { api } from '../service/api';
import './MovieRow.css';
import List from './Movie';

function Home() {

  const api_key = '23ef43567db026524d99518cb6f8a479';

  const languagePtBr = 'pt-BR'

  const [generos, setGeneros] = useState([]);

  const [recomendados, setRecomendados] = useState([])

  const [movies, setMovies] = useState([])

  useEffect(() => {
    api.get(`/genre/movie/list?api_key=${api_key}&language=${languagePtBr}`).then(({ data }) => {
      let info = [];
      for (let i = 0; i < data?.genres?.length; i++) {
        const key = data.genres[i].name;
        info[key] = {
          id: data.genres[i].id,
          name: data.genres[i].name,
        };
      }
      setGeneros(data?.genres);
    })
  }, [])

  useEffect(() => {
    api.get(`/trending/all/week?api_key=${api_key}&language=${languagePtBr}&page=1`).then(({ data }) => {
      setRecomendados(data);
    })
  }, [])

  function getEmAlta(altaLista) {
    const alta = []
    for (let i = 0; i < 5; i++) {
      alta.push(altaLista.results[i]);
    }
    return alta;
  }

  const images = [
    { url: img1 }
  ];

 

  return (
    <>
      <Menu />
      <SlideImage>
        <SimpleImageSlider
          width={'95%'}
          height={'370px'}
          images={images}
          showBullets={true}
          showNavs={true}
          navSize={50}
          navStyle={2}
          navMargin={2}
        />
      </SlideImage>

      <div>
        <Titulo>Recomendados para você</Titulo>
        <FilmesRandom>
          {recomendados.length !== 0 ? (
            getEmAlta(recomendados).map((item) => {
              return <div key={item.id}>
                <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.title} title={item.title} />
              </div>
            })) : (
            <p></p>
          )
          }
        </FilmesRandom>
      </div>
      <div>
        {console.log(Object.values(generos))}
        {Object.keys(generos).map((item, i) => {
          return (
            <div key={i}>
              <List name={generos?.[item]?.name} id={generos?.[item]?.id} />
            </div>
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default Home;

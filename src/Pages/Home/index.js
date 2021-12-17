import React, { useEffect, useState } from 'react';
import Menu from '../Menu';
import { Categorias, FilmesRandom, SlideImage, Titulo } from './style';
import img1 from '../../Assets/jogoperigoso.PNG';
import img2 from '../../Assets/unnamed.jpg';
import img3 from '../../Assets/euantesdevocê.jpg';
import SimpleImageSlider from "react-simple-image-slider";
import '../../App.css';
import Footer from '../../Components/Footer';
import { api } from '../service/api';
import './MovieRow.css';

function Home() {

  const api_key = '23ef43567db026524d99518cb6f8a479';

  const languagePtBr = 'pt-BR'

  const [generos, setGeneros] = useState([]);

  const [recomendados, setRecomendados] = useState([])

  const [filmess,setFilmes] = useState([])


  useEffect(() => {
      api.get(`/genre/movie/list?api_key=${api_key}&language=${languagePtBr}`).then(({ data }) => {
        setGeneros(data);

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
    { url: img1 },
    { url: img2 },
    { url: img3 }
  ];

  async function getMoviesById (id) {

    const movies = await api.get(`/discover/movie?with_genres=${id}&language=${languagePtBr}&api_key=${api_key}`)

    const movieData =   {  id: { results: movies }}
    
    return movieData
    }

  useEffect(()=>{
  getMoviesById()
  },[])

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
        {  
           generos.length !== 0 ? (
            generos.genres.map((item)=>(
              <Titulo key={item.id}>
                {item.name}
              
                <FilmesRandom>
      
                </FilmesRandom>
                </Titulo>
               )
            )) : (
              <p></p>
            )
        }
      </div> 
      
     <Footer />
    </>
  )
}

export default Home;


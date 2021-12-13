import React, { useEffect, useState } from 'react';
import Menu from '../Menu';
import { Categorias, FilmesRandom, SlideImage, Titulo } from './style';
import img1 from '../../Assets/jogoperigoso.PNG';
import img2 from '../../Assets/unnamed.jpg';
import img3 from '../../Assets/euantesdevocê.jpg';
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from 'react-router-dom';
import '../../App.css';
import Footer from '../../Components/Footer';
import { api } from '../service/api';

function Home() {

  const api_key = '23ef43567db026524d99518cb6f8a479';
  
  const language = 'pt-BR'

  const [generos,setGeneros] = useState([]);

  const [recomendados, setRecomendados] = useState([])

  const move_id =  Math.floor((Math.random() * 510))
  const page_id = Math.floor((Math.random() * 2) +1)

 
  useEffect(() =>{
    
    try {
      api.get(`/genre/movie/list?api_key=${api_key}&language=${language}`).then(({data})=>{
        setGeneros(data);
      })
    } catch (error) {
      console.log('Error');
    }
},[])

useEffect(() =>{
    
  try {
    api.get(`movie/{move_id}/recommendations?api_key=${api_key}&language=${language}&page=1`).then(({data})=>{
      setRecomendados(data);
    })
  } catch (error) {
    console.log('Error');
  }
},[])

  const images = [
    { url: img1 },
     {url:img2},
     {url:img3}
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
      
      <Categorias>
        {generos.length != 0 ? (
          generos.genres.map((item)=>{
            return <div key={item.id}>
            <Link className="link" to="/filmes">
              {item.name}
            </Link>
          </div>
          })) : (
            <p></p>
          )
        }
      </Categorias>
      <div>
      <Titulo>Recomendados para você</Titulo>
            <FilmesRandom>
            {recomendados.length != 0 ? (
              recomendados.results.map((item)=>{
                return <div key={item.id}>
                  <img src={item.poster_path} title={item.title}/>
              </div>
              })) : (
                <p></p>
              )
            }
            </FilmesRandom>
      </div>
      <div>
      <Titulo>Em Alta</Titulo>
            <FilmesRandom>
              
            </FilmesRandom>
      </div>
      <Footer />
    </>
  )
}

export default Home;


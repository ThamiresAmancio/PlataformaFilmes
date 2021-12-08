import React from 'react';
import Menu from '../Menu';
import { Categorias, SlideImage } from './style';
import img1 from '../../Assets/jogoperigoso.PNG';
import img2 from '../../Assets/unnamed.jpg';
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from 'react-router-dom';
import '../../App.css';
import Footer from '../../Components/Footer';
function Home() {

  const images = [
    { url: img1 },
    {url:img2}
  ];

  // function randList() {
  //   return images[Math.floor(Math.random() * images.length)];
  //const newPokemon = Math.floor(Math.random() * segundaMao.length);
  // }

  const randList = images[Math.floor(Math.random() * images.length)];

  console.log(randList)
  
  

  const generos = [
    {
      genero: 'Terror'
    },
    {
      genero: 'Romance'
    },
    {
      genero: 'Comédia'
    },
    {
      genero: 'Ação'
    }, {
      genero: 'Suspense'
    },
    {
      genero: 'Ficção'
    },
    {
      genero: 'Drama'
    },
    {
      genero: 'Documentário'
    },
    {
      genero: 'Animação'
    },
    {
      genero: 'Anime'
    },

  ]

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
        {
          generos.map((item) => {
            return <div>
              <Link className="link" to="/filmes">
                {item.genero}
              </Link>
            </div>
          })
        }
      </Categorias>
      <Footer />
    </>
  )
}

export default Home;


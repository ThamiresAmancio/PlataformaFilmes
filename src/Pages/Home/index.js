import React from 'react';
import Menu from '../Menu';
import { Categorias, SlideImage } from './style';
import img1 from '../../Assets/simplesmenteacontece.jpeg';
import img2 from '../../Assets/antes.jpg';

import SimpleImageSlider from "react-simple-image-slider";
import { Link } from 'react-router-dom';
import '../../App.css';
import './style.css';
import Footer from '../../Components/Footer';

function Home() {

  const images = [
    { url: img1 },
    { url: img2 },
    { url: img2 }
  ];

  const generos = [
    {
      genero:'Terror'
    },
    {
      genero:'Romance'
    },
    {
      genero:'Comédia'
    },
    {
      genero:'Ação'
    }, {
      genero:'Suspense'
    },
    {
      genero:'Ficção'
    },
    {
      genero:'Drama'
    },
    {
      genero:'Documentário'
    },
    {
      genero:'Animação'
    },
    {
      genero:'Anime'
    },

  ]


  return (
    <>
      <Menu />
      <SlideImage>
        <SimpleImageSlider
          width={1800}
          height={590}
          images={images}
          showBullets={true}
          showNavs={true}
          slideDuration={0.1}
          navMargin={5}
          navSize={40}
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
      <Footer/>
    </>
  )
}

export default Home;


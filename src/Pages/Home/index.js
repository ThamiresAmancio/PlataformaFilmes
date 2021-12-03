import React from 'react';
import Menu from '../Menu';
import { Categorias, CategoriasTwo, SlideImage } from './style';
import img1 from '../../Assets/simplesmenteacontece.jpeg';
import img2 from '../../Assets/antes.jpg';

import SimpleImageSlider from "react-simple-image-slider";

import '../../App.css';

function Home() {

  const images = [
    { url: img1 },
    { url: img2 },
    { url: img2 }
  ];


  return (
    <>
      <Menu />
      <SlideImage>
        <SimpleImageSlider
          width={1600}
          height={580}
          images={images}
          showBullets={true}
          showNavs={true}
          slideDuration={0.1}
          navMargin={25}
          navSize={50}
        />
      </SlideImage>
      <Categorias>
        <div>
          <p>Terror</p>
        </div>
        <div>
          <p>Comédia</p>
        </div>
        <div>
          <p>Ação</p>
        </div>
        <div>
          <p>Suspense</p>
        </div>
        <div>
          <p>Ficção </p>
        </div>
      </Categorias>
      <CategoriasTwo>
        <div>
          <p>Drama</p>
          
        </div>
        <div>
          <p>Documentário</p>
        </div>
        <div>
          <p>Animação</p>
        </div>
        <div>
          <p>Séries</p>
        </div>
        <div>
          <p>Anime</p>
        </div>
      </CategoriasTwo>

    </>
  )
}

export default Home;


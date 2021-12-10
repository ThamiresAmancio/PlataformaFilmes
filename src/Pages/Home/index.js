import React from 'react';
import Menu from '../Menu';
import { Categorias, FilmesRandom, SlideImage, Titulo } from './style';
import img1 from '../../Assets/jogoperigoso.PNG';
import img2 from '../../Assets/unnamed.jpg';
import img3 from '../../Assets/euantesdevocê.jpg';
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from 'react-router-dom';
import '../../App.css';
import Footer from '../../Components/Footer';
import img4 from '../../Assets/051042.jpg';
import img5 from '../../Assets/euantesdevocê.jpg';
import img6 from '../../Assets/culpa.jpg';
import img7 from '../../Assets/shang.jfif';
import img8 from '../../Assets/$value.jfif';
function Home() {

  const images = [
    { url: img1 },
     {url:img2},
     {url:img3}
  ];

  const filmes = [
    {
        nome:'Simplesmente acontece',
        url: img5
    },
    {
        nome:'Como Eu Era Antes de Você',
        url: img6
    },
    {
        nome:'A culpa é das estrelas',
        url: img7
    },
    {
        nome:'A lenda dos dez anéis',
        url: img8
    },
    {
      nome:'A culpa é das estrelas',
      url: img7
  },
  {
      nome:'A lenda dos dez anéis',
      url: img8
  },
]

  
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

      <div>
      <Titulo>Destaques</Titulo>
            <FilmesRandom>
                {
                    filmes.map((item)=>
                    {
                        return  <div>
                        <img src={item.url}  alt={item.nome} title={item.nome}/>
                    </div>
                    }
                   )
                }
            </FilmesRandom>
      </div>
      <Footer />
    </>
  )
}

export default Home;


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
import img5 from '../../Assets/euantesdevocê.jpg';
import img6 from '../../Assets/culpa.jpg';
import img7 from '../../Assets/shang.jfif';
import img8 from '../../Assets/$value.jfif';
import { api } from '../service/api';

function Home() {

  const api_key = '23ef43567db026524d99518cb6f8a479';
  
  const language = 'pt-BR'

  const [generos,setGeneros] = useState([]);


  useEffect(() =>{

    try {
      api.get(`/genre/movie/list?api_key=${api_key}&language=${language}`).then(({data})=>{
        setGeneros(data);
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
          generos.genres.map((item) => {
           
            return <div key={item.id}>
              <Link className="link" to="/filmes">
                {item.name}
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
                        return  <div key={item.id}>
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


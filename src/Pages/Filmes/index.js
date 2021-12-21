import Menu from "../Menu";
import { Categorias, Titulo,  } from "./style";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";
import { api } from "../service/api";

function Filmes({name,id}) {

  const [filmes,setFilmes] = useState([]);

  const api_key = '23ef43567db026524d99518cb6f8a479';

  const languagePtBr = 'pt-BR'

  useEffect(()=>{
    api.get(`/discover/movie?with_genres=${id}&language=${languagePtBr}&api_key=${api_key}`).then(({data}) => {
        setFilmes(data)
    })
  },[])

  const getFilmes = filmes.length > 0 ? filmes.map(movie => {
    return (
     <div>
          <div key={movie.id}>
               <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}  alt={movie.title} title={movie.title}/>
          </div>
      </div>
    );
  }) : <> </>;

    return (
        <>
           <div>
                <Menu/>
            </div>
            <Titulo>
                {name}
            </Titulo>
            <Categorias >
               {getFilmes}
            </Categorias> 
        </>
    )
}

export default Filmes;

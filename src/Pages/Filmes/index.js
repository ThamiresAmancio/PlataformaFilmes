import Menu from "../Menu";
import { Categorias, Titulo,  } from "./style";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";
import { api } from "../service/api";

function Filmes() {

  const [filmes,setFilmes] = useState([]);

  const api_key = '23ef43567db026524d99518cb6f8a479';

  const languagePtBr = 'pt-BR'

  useEffect(()=>{

    api.get(`discover/movie?with_genres=28&language=${languagePtBr}&api_key=${api_key}`).then(({data}) =>{
      setFilmes(data)
    })
  },[])


    return (
        <>
           <div>
                <Menu/>
            </div>
            <Titulo>
               
            </Titulo>
            <Categorias >
               {
                 filmes.length !== 0 ? (
                   filmes.results.map((item)=> {
                     return <div  key={item.id}>
                       <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}  alt={item.title} title={item.title}/>
                     </div>
                   })
                 ): (
                   <></>
                 )
               }
            </Categorias> 
            <Footer/>
        </>
    )
}

export default Filmes;

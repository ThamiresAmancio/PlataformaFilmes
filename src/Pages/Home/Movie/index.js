import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { api } from '../../service/api'

import { FilmesRandom, Titulo } from '../style';

export  function List({name, id}) {

    const [movies, setMovies] = useState([])

    const api_key = '23ef43567db026524d99518cb6f8a479';

    const languagePtBr = 'pt-BR'

    const getMovies = async () => {
        const url = await api.get(`/discover/movie?with_genres=${id}&language=${languagePtBr}&api_key=${api_key}`)
        setMovies(url?.data?.results)
    }
     useEffect(() => {
            getMovies(id)
     }, [id])

     function getFilmes () {
        const alta = []
        for (let i = 0; i < 5; i++) {
        alta.push(movies[i]);
        
        }
        return alta;
      }
    
    const filmes = movies.length > 0 ? getFilmes().map(movie => {
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
        <Titulo>
            <h2>{name}</h2>
        </Titulo>
        <FilmesRandom>
            {filmes}
        </FilmesRandom>
        </>
    );
}

export default List;
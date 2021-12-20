import Menu from "../Menu";
import { Categorias, Titulo,  } from "./style";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";
import { api } from "../service/api";
import Teste from "./teste";

function Filmes() {

    const [generos, setGeneros] = useState([]);

    const api_key = '23ef43567db026524d99518cb6f8a479';

    const languagePtBr = 'pt-BR';

    useEffect(() => {
        api.get(`/genre/movie/list?api_key=${api_key}&language=${languagePtBr}`).then(({ data }) => {
          let info = [];
          for (let i = 0; i < data?.genres?.length; i++) {
            const key = data.genres[i].name;
            info[key] = {
              id: data.genres[i].id,
              name: data.genres[i].name,
            };
          }
          setGeneros(data?.genres);
        })
      }, [])
    
   
    return (
        <>
            <div>
            {Object.keys(generos).map((item, i) => {
            return (
                <div key={i}>
                <Teste name={generos?.[item]?.name} id={generos?.[item]?.id} />
                </div>
            )
            })}
        </div>
        </>
    )
}

export default Filmes;

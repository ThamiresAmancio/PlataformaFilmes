import { Link } from "react-router-dom";
import { MenuTitle } from "./style";
import '../Home/style.css';
import './style.css';
import { useEffect, useState } from "react";
import { api } from "../service/api";


function Menu({ change }) {

    const api_key = '23ef43567db026524d99518cb6f8a479';

    const languagePtBr = 'pt-BR';


    const [generos, setGeneros] = useState([]);


    useEffect(() => {
        api.get(`/genre/movie/list?api_key=${api_key}&language=${languagePtBr}`).then(({ data }) => {
          setGeneros(data);
        })
      }, [])

    return (
        <>
            <MenuTitle >
                <h1>Tflix</h1>
                <div>
                    <Link className="link" to='/'>
                        Início
                    </Link>
                </div>
                <div>
                    <p>Filmes</p>
                </div>
                {/* <div>
                    <p>Categorias:</p>
                </div>
                <div id="boxHorario">
                    <input
                        id="horainicio"
                        label="Hora de inicio:"
                        placeholder="Selecione uma categoria "
                        list="horaInicio"
                    />
                    <datalist id="horaInicio">
                        {generos.length !== 0 ? (
                            generos.genres.map((item)=> {
                                return <Link className="link"  to='/filmes'>
                                    <option value={item.name} />
                                </Link>
                                
                            })
                        ):(
                            <p></p>
                        )
                            
                        }
                    </datalist>
                </div>
                <select>
                    <option value=''>Selecione uma categoria</option>
                    {generos.length !== 0 ? (
                            generos.genres.map((item)=> {
                                return <Link className="link"> 
                                    <option>{item.name}</option> 
                            </Link>
                            })
                        ):(
                            <p></p>
                        )
                        }
                </select> */}
                <input type="search" placeholder='Pesquise as categorias dos filmes...' onChange={change} />

            </MenuTitle>
        </>
    )
}


export default Menu;
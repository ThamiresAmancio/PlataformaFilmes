import { Link } from "react-router-dom";
import { MenuTitle } from "./style";
import '../Home/style.css';
import './style.css';


function Menu() {

    return (
        <>
            <MenuTitle>
                <h1>Tflix</h1>
                <div>
                    <Link className="link" to='/'>
                        Início
                    </Link>
                </div>
                <div>
                    <p>Filmes</p>
                </div>
                <input type="search" placeholder='Pesquise por títulos dos filmes...' />
            </MenuTitle>
        </>
    )
}


export default Menu;
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
                {/* <div className='itemsCategoria'>
                        <p>Categorias</p>
                        <div className='containerSubmenu'>
                            <ul className='subCategoria'>
                                <li className='subItem'>Comédia</li>
                                <li className='subItem'>Drama</li>
                                <li className='subItem'>Documentários</li>
                                <li className='subItem'>Para crianças e toda a família</li>
                                <li className='subItem'>Fantasia</li>
                                <li className='subItem'>Terror</li>
                            </ul>
                            <ul className='subCategoria2'>
                                <li className='subItem'>Ação e aventura</li>
                                <li className='subItem'>Comédia</li>
                                <li className='subItem'>Drama</li>
                                <li className='subItem'>Documentários</li>
                                <li className='subItem'>Para crianças e toda a família</li>
                                <li className='subItem'>Fantasia</li>
                                <li className='subItem'>Terror</li>
                            </ul>   
                        </div> 
                    </div> */}
                <input type="search" placeholder='Pesquise por títulos dos filmes...' />
            </MenuTitle>
        </>
    )
}


export default Menu;
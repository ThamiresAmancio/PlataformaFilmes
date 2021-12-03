import {MenuTitle } from "./style";

function Menu() {
    return (
        <>
            <MenuTitle>
                  <h1>Tflix</h1>
                <div>
                    <p>Início</p>
                </div>
                <div>
                    <p>Séries</p>
                </div>
                <div>
                <p>Filmes</p>
                </div>
                <input type="search" placeholder='Pesquise por títulos...'/> 
            </MenuTitle>
        </>
    )
}


export default Menu;
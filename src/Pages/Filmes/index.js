import Menu from "../Menu";
import { Categorias } from "./style";
import img1 from '../../Assets/051042.jpg';
import img2 from '../../Assets/euantesdevocê.jpg';
import ReactPlayer from "react-player";


function Filmes() {


    return (
        <>
            <div>
                <Menu />
            </div>

            <div>
               < ReactPlayer url='https://www.youtube.com/watch?v=PnqUs3xiAVI' width={1500} height={500} />
            </div>
            
            <Categorias>
                <div>
                    <img src={img1} alt='Simplesmente Acontece' title='Simplesmente Acontece' />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img1} />
                </div>


            </Categorias>
            <Categorias>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img1} />
                </div>

            </Categorias>
        </>
    )
}

export default Filmes;
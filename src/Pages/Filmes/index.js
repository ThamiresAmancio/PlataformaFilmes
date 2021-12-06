import Menu from "../Menu";
import { Categorias, Titulo } from "./style";
import img1 from '../../Assets/051042.jpg';
import img2 from '../../Assets/euantesdevocê.jpg';
import img3 from '../../Assets/culpa.jpg';
import Footer from "../../Components/Footer";


function Filmes() {

    const filmes = [
        {
            nome:'Simplesmente acontece',
            url: img1
        },
        {
            nome:'Como Eu Era Antes de Você',
            url: img2
        },
        {
            nome:'A culpa é das estrelas',
            url: img3
        },
        {
            nome:'Simplesmente acontece',
            url: img1
        },
        {
            nome:'Como Eu Era Antes de Você',
            url: img2
        },
        {
            nome:'A culpa é das estrelas',
            url: img3
        },
        {
            nome:'Simplesmente acontece',
            url: img1
        },
        {
            nome:'Como Eu Era Antes de Você',
            url: img2
        },
        {
            nome:'A culpa é das estrelas',
            url: img3
        },
        {
            nome:'Simplesmente acontece',
            url: img1
        },
        {
            nome:'Como Eu Era Antes de Você',
            url: img2
        },
        {
            nome:'A culpa é das estrelas',
            url: img3
        },
        {
            nome:'Simplesmente acontece',
            url: img1
        },
        {
            nome:'Como Eu Era Antes de Você',
            url: img2
        },
        {
            nome:'A culpa é das estrelas',
            url: img3
        },
        {
            nome:'Simplesmente acontece',
            url: img1
        },
        {
            nome:'Como Eu Era Antes de Você',
            url: img2
        },
        {
            nome:'A culpa é das estrelas',
            url: img3
        },
        
    ]
    return (
        <>
            <div>
                <Menu />
            </div>
            <Titulo>Romance</Titulo>
            <Categorias>
                {
                    filmes.map((item)=>
                    {
                        return  <div>
                        <img src={item.url}  alt={item.nome} title={item.nome}/>
                    </div>
                    }
                   )
                }
            </Categorias>
            <Footer/>
        </>
    )
}

export default Filmes;

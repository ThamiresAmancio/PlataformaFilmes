import Menu from "../Menu";
import { Categorias, Titulo,  } from "./style";
import img1 from '../../Assets/051042.jpg';
import img2 from '../../Assets/euantesdevocê.jpg';
import img3 from '../../Assets/culpa.jpg';
import img4 from '../../Assets/shang.jfif';
import img5 from '../../Assets/$value.jfif';
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
            nome:'A lenda dos dez anéis',
            url: img4
        },
        {
            nome:'Os croods 2',
            url: img5
        },
        {
            nome:'A culpa é das estrelas',
            url: img3
        },
        {
            nome:'A lenda dos dez anéis',
            url: img4
        },
        {
            nome:'Como Eu Era Antes de Você',
            url: img5
        }

    ]
    return (
        <>
            <div>
                <Menu />
            </div>
            <Titulo>Filmes</Titulo>
            {/* <Videos>
                <ReactPlayer loop={true} url='https://youtu.be/ZUqU9SQOt10' width={1750} height={650}/>
            </Videos> */}
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

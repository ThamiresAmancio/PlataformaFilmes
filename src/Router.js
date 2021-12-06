import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Filmes from './Pages/Filmes';
import Home from './Pages/Home';

function Rotas() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filmes" component={Filmes}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Rotas;
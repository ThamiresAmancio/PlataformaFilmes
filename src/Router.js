import { BrowserRouter, Route, Switch } from "react-router-dom";
import Filmes from "./Pages/Filmes";
import Description from "./Pages/Filmes/description";
import { Videos } from "./Pages/Filmes/style";
import Home from "./Pages/Home";

function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme" component={Filmes} />
        <Route exact path="/filme/descricao" component={Description} />
        <Route exact path="/videos" component={Videos} />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;

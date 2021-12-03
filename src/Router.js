import { BrowserRouter } from "react-router-dom";
import Filmes from "./Pages/Filmes";

function Routers() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/filmes">
                <Filmes/>
            </Route>
        </Switch>
    </BrowserRouter>
    )

}

export default Routers;
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";


const Routes = () => (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" exact>
                {/*<Home/>*/}
            </Route>
            <Route path="/products">
                {/*<Catalog/>*/}
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;

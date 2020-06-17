import React from "react"
import { BrowserRouter,  Link,Switch, Route } from "react-router-dom"

import"../style/Main.css"
import"../style/Header.css"
import QuemSomos from "../pages/QuemSomos"
import FaleConosco from "../pages/FaleConosco"
import Portifolio from "../pages/Portifolio"
import Home from "../pages/Home"



const Header= () =>{
        
return(
    <BrowserRouter>
        <ul className="menu">
            <li>
                <Link to="/">Homes</Link>
            </li>
            <li>
                <Link to="/portifolio">Portifólio</Link>
            </li>      
            <li>
                <Link to="/Quemsomos">Quem somos</Link>
            </li>
            <li>
                <Link to="FaleConosco">Fale Conosco</Link> 
            </li>
        </ul>  
        <Switch>
            <Route path="/portifolio">
            <Portifolio />
            </Route>
            <Route path="/FaleConosco">
            <FaleConosco />
            </Route>
            <Route path="/QuemSomos">
            <QuemSomos />
            </Route>
            <Route path="/">
                <Home />
            </Route>    
        </Switch>
    </BrowserRouter>
)



}
export default Header


import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

//Paginas do site---------------------------------------------------
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Bio from "./Pages/Bio"
import Comunidades from "./Pages/Comunidades";
import Perfil from "./Pages/Perfil";
import Produtos from "./Pages/Produtos"
import Carrinho from "./Pages/Carrinho"
import Detalhes from "./Pages/Detalhes"
import Header from "./Components/Header"
//------------------------------------------------------------------

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" component={header}/>
            </Switch>
        </BrowserRouter>
    )
}

function header() {
    return (
        <Header>
            <Switch>
                <Route path = "/login" component={Login}/>
                <Route path = "/home" component={Home}/>
                <Route path = "/cadastro" component={Cadastro}/>
                <Route path = "/bio" component={Bio}/>
                <Route path = "/comunidades" component={Comunidades}/>
                <Route path = "/perfil" component={Perfil}/>
                <Route path = "/Produtos" component={Produtos}/>
                <Route path = "/Carrinho" component={Carrinho}/>
                <Route path = "/Detalhes" component={Detalhes}/>
                <Route component={()=> <Redirect to="/home"/> } />
            </Switch>
        </Header>
    )
}

export default Routes;
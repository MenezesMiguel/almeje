import React, { Component } from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

//Paginas do site---------------------------------------------------
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Bio from "./Pages/Bio"
import Perfil from "./Pages/Perfil";
import Produtos from "./Pages/Produtos"
import Carrinho from "./Pages/Carrinho"
import Detalhes from "./Pages/Detalhes"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { isAuthenticated } from "./services/auth";
//------------------------------------------------------------------

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: "/login", state: { from: props.location }}}
                    onChange={alert("Você precisa estar logado para acessar seu carrinho")}
                />
            )
        }
    />
    )
}

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/" component={header}/>
            </Switch>
        </BrowserRouter>
    );
}

function header() {
    return (
        <Header>
            <Switch>
                <Route path = "/login" component={Login}/>
                <Route path = "/home" component={Home}/>
                <Route path = "/cadastro" component={Cadastro}/>
                <Route path = "/bio" component={Bio}/>
                <Route path = "/perfil" component={Perfil}/>
                <Route path = "/Produtos" component={Produtos}/>
                <PrivateRoute path = "/carrinho" component={Carrinho}/>
                <Route path = "/detalhes" component={Detalhes}/>
                <Route component={()=> <Redirect to="/home"/> } />
            </Switch>
            <Footer/>
        </Header>
    );
}

export default Routes;
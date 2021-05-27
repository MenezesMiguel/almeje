import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

//Paginas do site---------------------------------------------------
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Bio from "./Pages/Bio";
import Perfil from "./Pages/Perfil";
import Produtos from "./Pages/Produtos";
import Carrinho from "./Pages/Carrinho";
import Detalhes from "./Pages/Detalhes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Atualizar from "./Pages/Atualizar";
import { isAuthenticated } from "./services/auth";
//------------------------------------------------------------------

const PrivateRouteCarrinho = ({component: Component, ...rest}) => {
    return (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: "/login", state: { from: props.location }}}
                    onChange={alert("Faça login antes de começar a comprar.")}
                />
            )
        }
    />
    )
};

const PrivateRouteLogin = ({component: Component, ...rest}) => {
    return (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Redirect
                    to={{ pathname: "/perfil", state: { from: props.location }}}
                    />
            ) : (
                <Component {...props} />
            )
        }
    />
    )
};

const PrivateRoutePerfil = ({component: Component, ...rest}) => {
    return (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{ pathname: "/login", state: { from: props.location }}}
                    />
            )
        }
    />
    )
};

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
        <PrivateRouteLogin path="/login" component={Login} />
        <PrivateRoutePerfil path="/atualizar" component={Atualizar} />
        <Route path="/home" component={Home} />
        <PrivateRouteLogin path="/cadastro" component={Cadastro} />
        <Route path="/bio" component={Bio} />
        <PrivateRoutePerfil path="/perfil" component={Perfil} />
        <Route path="/Produtos" component={Produtos} />
        <PrivateRouteCarrinho path="/carrinho" component={Carrinho} />
        <Route path="/detalhes" component={Detalhes} />
        <Route component={() => <Redirect to="/home" />} />
      </Switch>
      <Footer />
    </Header>
  );
}

export default Routes;

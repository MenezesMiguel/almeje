import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import { MdAccountCircle } from "react-icons/md"
import { IconContext } from "react-icons/lib";
import { useHistory } from "react-router";
import "./Menu.css"

function Menu(){
    const history = useHistory();

    function handleClick(pathName){
        history.push(pathName);
    }

    return (
        <AppBar position="static">
            <Toolbar className="cabecalho">
                <img src="/images/logo.png" alt="logo" onClick={()=>handleClick("/home")}className="logo"/>
                <div className="links" onClick={()=>handleClick("/bio")}>SOBRE</div>
                <div className="links" onClick={()=>handleClick("/comunidades")}>COMUNIDADES</div>
                <div className="links" onClick={()=>handleClick("/produtos")}>PRODUTOS</div>
                <div className="links" onClick={()=>handleClick("/carrinho")}>CARRINHO</div>
                <div onClick={()=>handleClick("/login")} className="profile">
                        <IconContext.Provider value={{ color: "#343434", size: "2em"}}>
                            <MdAccountCircle />
                        </IconContext.Provider>
                    <p className="userName">Registre-se/Login</p>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Menu;
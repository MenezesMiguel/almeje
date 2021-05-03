import { AppBar, Menu, MenuItem, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import { MdAccountCircle, MdMenu } from "react-icons/md"
import { IconContext } from "react-icons/lib";
import { useHistory, useLocation } from "react-router";
import "./Header.css"

function Header(props){
    const history = useHistory();
    let location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    let title;
    if(location.pathname === "/bio") title = "Quem nós somos"
    else if(location.pathname === "/comunidades") title = "Comunidades"
    else if(location.pathname === "/login") title = "Bem vindo ao Atlas"
    else title = "O melhor do Atlas"
    

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleClick(pathName){
        history.push(pathName);
        handleClose();
    }

    return (
        <>
        <AppBar position="static">
            <Toolbar className="cabecalho">
                <div className="logoDesk">
                    <img src="/images/logo.png" alt="logo" onClick={()=>handleClick("/home")}className="img"/>
                    <h2 className="titles">Atlas</h2>
                </div>
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
                <div className="logoMobile">
                <img src="/images/logo.png" alt="logo" onClick={()=>handleClick("/home")}className="img"/>
                </div>
                <div className="logoMobile">
                    <h1 className="titles">{title}</h1>
                </div>
                <div className="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMenu}>
                    <IconContext.Provider value={{ color: "#343434", size: "2em"}}>
                        <MdMenu />
                    </IconContext.Provider>
                </div>
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={()=>handleClick("/bio")}>Sobre</MenuItem>
                    <MenuItem onClick={()=>handleClick("/comunidades")}>Comunidades</MenuItem>
                    <MenuItem onClick={()=>handleClick("/produtos")}>Produtos</MenuItem>
                    <MenuItem onClick={()=>handleClick("/carrinho")}>Carrinho</MenuItem>
                    <MenuItem onClick={()=>handleClick("/login")}>Login</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        {props.children};
        </>
    );
}

export default Header;
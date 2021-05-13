import { AppBar, Menu, MenuItem, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md"
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
                    <img src="/images/Logo.png" alt="logo" onClick={()=>handleClick("/home")} className="imglogo"/>
                    <img src="/images/Nome.png" alt="nome" className="imgnome"/>
                </div>
                <div className="links" onClick={()=>handleClick("/bio")}>Quem Somos</div>
                <div className="links" onClick={()=>handleClick("/produtos")}>Produtos</div>
                <div className="links" onClick={()=>handleClick("/carrinho")}>Meu Carrinho</div>
                <div className="links" onClick={()=>handleClick("/login")}>Meu Perfil</div>
                <img src="/images/Logo.png" alt="logo" onClick={()=>handleClick("/home")} className="imglogomobile"/>
                <h1 className="title">{title}</h1>
                <div className="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMenu}>
                    <IconContext.Provider value={{ color: "#343434", size: "2em"}}>
                        <MdMenu />
                    </IconContext.Provider>
                </div>
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem classes={{root: 'menuItem'}} onClick={()=>handleClick("/bio")}>Quem Somos</MenuItem>
                    <MenuItem classes={{root: 'menuItem'}} onClick={()=>handleClick("/produtos")}>Produtos</MenuItem>
                    <MenuItem classes={{root: 'menuItem'}} onClick={()=>handleClick("/carrinho")}> Meu Carrinho</MenuItem>
                    <MenuItem classes={{root: 'menuItem'}} onClick={()=>handleClick("/login")}>Meu Perfil</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        {props.children}
        </>
    );
}

export default Header;
import { AppBar, Menu, MenuItem, Toolbar, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md"
import { IconContext } from "react-icons/lib";
import { useHistory, useLocation } from "react-router";
import "./Header.css"

const styles = {
    menuItem: {
        color: "#f27934",
        fontFamily: "Asap Condensed, sans-serif",
        fontWeight: 700,
      },
}

function Header(props){
    const { classes } = props;
    let location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    let title;
    if(location.pathname === "/bio") title = "Quem nós somos"
    else if(location.pathname === "/comunidades") title = "Comunidades"
    else if(location.pathname === "/login" || location.pathname === "/cadastro") title = "Bem vindo ao Atlas"
    else title = "O melhor do Atlas"

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <AppBar position="fixed">
            <Toolbar className="cabecalho">
                <div className="logoDesk">
                    <a href="/home"><img src="/images/Logo.png" alt="logo" className="imglogo"/></a>
                    <img src="/images/Nome.png" alt="nome" className="imgnome"/>
                </div>
                <a href="/bio" className="links">Quem Somos</a>
                <a href="/produtos" className="links">Produtos</a>
                <a href="/carrinho" className="links">Meu Carrinho</a>
                <a href="/login" className="links">Meu Perfil</a>
                <a href="/home" ><img src="/images/Logo.png" alt="logo" className="imglogomobile"/></a>
                <h1 className="title">{title}</h1>
                <div className="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMenu}>
                    <IconContext.Provider value={{ color: "#343434", size: "2em"}}>
                        <MdMenu />
                    </IconContext.Provider>
                </div>
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem className={classes.menuItem}>
                        <a className="menuItem" href="/bio" onClick={handleClose}>
                            Quem Somos
                        </a>
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <a className="menuItem" href="/produtos" onClick={handleClose}>
                            Produtos
                        </a>
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <a className="menuItem" href="/carrinho" onClick={handleClose}>
                            Meu Carrinho
                        </a>
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <a className="menuItem" href="/login" onClick={handleClose}>
                            Meu Perfil
                        </a>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        <Toolbar />
        {props.children}
        </>
    );
}

export default withStyles(styles)(Header);
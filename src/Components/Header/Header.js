import { AppBar, Menu, MenuItem, Toolbar, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md"
import { IconContext } from "react-icons/lib";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
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
        <AppBar position="fixed">
            <Toolbar className="cabecalho">
                <div className="logoDesk">
                    <Link to="/home"><img src="/images/Logo.png" alt="logo" className="imglogo"/></Link>
                    <img src="/images/Nome.png" alt="nome" className="imgnome"/>
                </div>
                <Link className="links" to="/bio">Quem Somos</Link>
                <Link className="links" to="/produtos">Produtos</Link>
                <Link className="links" to="/carrinho">Meu Carrinho</Link>
                <Link className="links" to="/login">Meu Perfil</Link>
                <img src="/images/Logo.png" alt="logo" onClick={()=>handleClick("/home")} className="imglogomobile"/>
                <h1 className="title">{title}</h1>
                <div className="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMenu}>
                    <IconContext.Provider value={{ color: "#343434", size: "2em"}}>
                        <MdMenu />
                    </IconContext.Provider>
                </div>
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem className={classes.menuItem}>
                        <Link className="menuItem" to="/bio" onClick={handleClose}>
                            Quem Somos
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <Link className="menuItem" to="/produtos" onClick={handleClose}>
                            Produtos
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <Link className="menuItem" to="/carrinho" onClick={handleClose}>
                            Meu Carrinho
                        </Link>
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                        <Link className="menuItem" to="/login" onClick={handleClose}>
                            Meu Perfil
                        </Link>
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
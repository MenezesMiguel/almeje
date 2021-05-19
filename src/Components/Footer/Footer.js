import React from "react";
import { useHistory } from "react-router";
import { IconContext } from "react-icons/lib";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    const history = useHistory();

    function handleClick(pathName){
        history.push(pathName);
    }

    return (
        <div className="footer">
            <div className="tituloFooter">
                <p className="principal">Entre em contato conosco</p>
                <p className="secundario">Nossa equipe estará a disposição para ajudar</p>
            </div>
            <div className="contato">
                <a href="https://www.instagram.com" target="_blank">
                <IconContext.Provider value={{ color: "#343434", size: "6vw", className: "icon"}}>
                    <FaInstagram />
                </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                <IconContext.Provider value={{ color: "#343434", size: "6vw", className: "icon"}}>
                    <FaLinkedin />
                </IconContext.Provider>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                <IconContext.Provider value={{ color: "#343434", size: "6vw", className: "icon"}}>
                    <FaFacebook />
                </IconContext.Provider>
                </a>
            </div>
            <div className="quickLinks">
                <p className="principal">Acesso rápido</p>
                <ul>
                    <li><Link className="link" to="/home">Home</Link></li>
                    <li><Link className="link" to="/login">Login</Link></li>
                    <li><Link className="link" to="/produtos">Produtos</Link></li>
                    <li><Link className="link" to="/bio">Quem Somos</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
import React from "react";
import { useHistory } from "react-router";
import { IconContext } from "react-icons/lib";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
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
                    <li className="link" onClick={()=>handleClick("/home")}>Home</li>
                    <li className="link" onClick={()=>handleClick("/login")}>Login</li>
                    <li className="link" onClick={()=>handleClick("/produtos")}>Produtos</li>
                    <li className="link" onClick={()=>handleClick("/bio")}>Quem Somos</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
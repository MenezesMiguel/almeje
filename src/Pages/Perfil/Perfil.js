import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

import "./Perfil.css";

function Perfil() {
  return (
    <div className="geralPerfil">
      <p className="frase">Meu perfil</p>
      <div className="userInfo">
        <div className = "ImagemEButtons">
        <ButtonGroup aria-label="Basic example">
          <a href="/atualizar">
          <Button variant="primary" >Atualizar Cadastro</Button>
          </a>
          <Button variant="secondary">Logout</Button>
          <Button variant="terciary">Deletar Usuario</Button>
        </ButtonGroup>
        <img src="/images/user.png" className="userLogo" />
        </div>
        <div className="userData">
          Nome: <p /> Nascimento: <p /> CPF: <p /> Email: <p /> Endereço: <p />{" "}
          Cidade: <p /> Estado: <p /> CEP:
        </div>
      </div>
    </div>
  );
}

export default Perfil;

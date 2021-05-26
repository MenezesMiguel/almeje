import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import {logout} from "../../services/auth";

import "./Perfil.css";

function Perfil() {
  const history = useHistory();
  async function Logout() {
    logout();
    history.push("/login");
  }
  return (
    <div className="geralPerfil">
      <p className="frase">Meu perfil</p>
      <div className="userInfo">
        <div className = "ImagemEButtons">
        <ButtonGroup aria-label="Basic example">
          <a href="/atualizar">
          <Button variant="primary" >Atualizar Cadastro</Button>
          </a>
          <Button variant="secondary" onClick={Logout}>Logout</Button>
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

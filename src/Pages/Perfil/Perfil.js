import React, { useEffect, useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import api from "../../services/api";
import { logout, getUserID } from "../../services/auth";

import "./Perfil.css";

function Perfil() {
  const history = useHistory();
  async function Logout() {
    logout();
    history.push("/login");
  };
  const [data, setData] = useState({});
  const user_id = getUserID();

  async function getData() {
    const response = await api.get(`/users/${user_id}`);
    console.log(response);
    setData(response.data);
  }

  useEffect(()=>{
    getData();
  },[]);
  async function deletar() {
    
  }
  return (
    <div className="geralPerfil">
      <p className="frase">Meu perfil</p>
      <div className="userInfo">
        <div className="ImagemEButtons">
          <ButtonGroup aria-label="Basic example">
            <a href="/atualizar">
              <Button variant="primary">Atualizar Cadastro</Button>
            </a>
            <Button variant="secondary" onClick={Logout}>
              Logout
            </Button>
            <Button variant="terciary">
              Deletar Usuario
            </Button>
          </ButtonGroup>
          <img src="/images/user.png" className="userLogo" />
        </div>
        <div className="userData">
          Nome: {data.nome} <p /> Nascimento: {data.nascimento}<p /> CPF: {data.cpf}<p /> Email: {data.email}<p /> Endereço: {data.endereco}
          <p /> Cidade: {data.cidade}<p /> Estado: {data.estado}<p /> CEP: {data.cep}
        </div>
      </div>
    </div>
  );
}

export default Perfil;

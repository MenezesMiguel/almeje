import React, { useEffect, useState } from "react";
import { ButtonGroup, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import api from "../../services/api";
import { logout, getUserID } from "../../services/auth";

import "./Perfil.css";

function Perfil() {
  const history = useHistory();
  const [data, setData] = useState({});
  const user_id = getUserID();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function Logout() {
    logout();
    history.push("/login");
  };

  async function getData() {
    const response = await api.get(`/users/${user_id}`);
    console.log(response);
    setData(response.data);
  }

  useEffect(()=>{
    getData();
  },[]);

  async function Deletar() {
    handleClose();
    const response = await api.delete(`/users/${user_id}`);
    logout();
    alert("Conta deletada com sucesso!!");
    history.push("/login");
  };
  return (
    <div className="geralPerfil">
      <p className="frase">Meu perfil</p>
      <div className="userInfo">
        <div className="ImagemEButtons">
          <ButtonGroup aria-label="Basic example">
            <a href="/atualizar">
              <Button variant="secondary">Atualizar Cadastro</Button>
            </a>
            <Button variant="secondary" onClick={Logout}>
              Logout
            </Button>
            <Button variant="terciary" onClick={handleShow}>
              Deletar Usuario
            </Button>
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Tem certeza?</Modal.Title>
              </Modal.Header>
              <Modal.Body>Essa ação não poderá ser disfeita.</Modal.Body>
              <Modal.Footer>
                <Button variant="terciary" onClick={Deletar}>
                  Sim
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Não
                </Button>
              </Modal.Footer>
            </Modal>
          </ButtonGroup>
          <img src="/images/logo.png" className="userLogo" />
        </div>
        <div className="userData">
          Nome: <t className="dados">{data.nome}</t><p />
          Nascimento: <t className="dados">{data.nascimento}</t><p />
          CPF: <t className="dados">{data.cpf}</t><p />
          Email: <t className="dados">{data.email}</t><p />
          Endereço: <t className="dados">{data.endereco}</t><p />
          Cidade: <t className="dados">{data.cidade}</t><p />
          Estado: <t className="dados">{data.estado}</t><p />
          CEP: <t className="dados">{data.cep}</t>
        </div>
      </div>
    </div>
  );
}

export default Perfil;

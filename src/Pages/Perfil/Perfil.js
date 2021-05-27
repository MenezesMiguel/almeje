import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import api from "../../services/api";
import { logout } from "../../services/auth";
import { useState } from "react";

import "./Perfil.css";

function Perfil() {
  const [nome, setNome] = useState();
  const [nascimento, setNascimento] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [endereco, setEndereco] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [cep, setCep] = useState();

  const history = useHistory();
  async function Logout() {
    logout();
    history.push("/login");
  }
  async function Delete() {
    const resp = await api.delete();
    history.push("/home");
  }

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   if (accessToken) {
  //     async function grabData() {
  //       const config = {
  //         headers: { authorization: `Bearer ${accessToken}` },
  //       };
  //       const resp = await api.get("user", config);
  //       if (resp.data.user) {
  //         await Promise.all([
  //           setNome(resp.data.user.nome)
  //         ]);
  //       }
  //     }
  //     grabData();
  //   }
  // }, []);
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
            <Button variant="terciary" onClick={Delete}>
              Deletar Usuario
            </Button>
          </ButtonGroup>
          <img src="/images/user.png" className="userLogo" />
        </div>
        <div className="userData">
          Nome: {nome} <p /> Nascimento: <p /> CPF: <p /> Email: <p /> Endereço:{" "}
          <p /> Cidade: <p /> Estado: <p /> CEP:
        </div>
      </div>
    </div>
  );
}

export default Perfil;

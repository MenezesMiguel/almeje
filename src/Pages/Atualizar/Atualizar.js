import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { getUserID } from "../../services/auth";

import "./Atualizar.css";



function Atualizar() {
  const history = useHistory();
  const [nome, setNome] = useState();
  const [nascimento, setNascimento] = useState();
  const [endereco, setEndereco] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [cep, setCep] = useState();
  
  async function Atualizar() {
    const user_id = getUserID();
    const response = await api.put(`/users/${user_id}`, {
      nome,
      nascimento,
      endereco,
      cidade,
      estado,
      cep,
    });
    alert("Dados atualizados!");
    history.push("perfil");
  }

  return (
    <div className="geralAtualizar">
      <p className="frase">Meu perfil</p>
      <div className="Formulario">
        <p className="AtualizarCadastro">Atualizar Informacoes Pessoais</p>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              placeholder="Nome completo"
              onChange={(e) => setNome(e.target.value)}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="nascimento">
              <Form.Label>Nascimento</Form.Label>
              <Form.Control
                placeholder="DD/MM/AAAA"
                onChange={(e) => setNascimento(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Endereco</Form.Label>
            <Form.Control
              placeholder="Rua abcd, 123"
              onChange={(e) => setEndereco(e.target.value)}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                placeholder="Cidade"
                onChange={(e) => setCidade(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select" defaultValue="Selecione">
                <option>Selecione</option>
                <option>AC</option>
                <option>AL</option>
                <option>AP</option>
                <option>AM</option>
                <option>BA</option>
                <option>CE</option>
                <option>DF</option>
                <option>ES</option>
                <option>GO</option>
                <option>MA</option>
                <option>MT</option>
                <option>MS</option>
                <option>MG</option>
                <option>PA</option>
                <option>PB</option>
                <option>PR</option>
                <option>PE</option>
                <option>PI</option>
                <option>RJ</option>
                <option>RN</option>
                <option>RS</option>
                <option>RO</option>
                <option>RR</option>
                <option>SC</option>
                <option>SP</option>
                <option>SE</option>
                <option>TO</option>
                onChange={(e) => setEstado(e.target.value)}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>CEP</Form.Label>
              <Form.Control placeholder="12345-678"               onChange={(e) => setCep(e.target.value)}/>
            </Form.Group>
          </Form.Row>
          <Button variant="primary" onClick={Atualizar}>
            Atualizar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Atualizar;

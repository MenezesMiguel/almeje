import React from "react";
import { Form, Button, Col } from "react-bootstrap";

import "./Perfil.css";

function Perfil() {
  return (
    <div className="geralPerfil">
      <p className="frase">Meu perfil</p>
      <div className="Formulario">
        <p className="AtualizarCadastro">Atualizar Informacoes Pessoais</p>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control placeholder="Nome completo" />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="nascimento">
              <Form.Label>Nascimento</Form.Label>
              <Form.Control placeholder="DD/MM/AAAA" />
            </Form.Group>
            <Form.Group as={Col} controlId="cpf">
              <Form.Label>CPF</Form.Label>
              <Form.Control placeholder="123.456.789-00" />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Atualizar
          </Button>
        </Form>
        <p className="AtualizarCadastro">Cadastrar endereco</p>
        <Form>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Endereco</Form.Label>
            <Form.Control placeholder="Rua abcd, 123" />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                placeholder="Cidade"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Selecione"
              >
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
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>CEP</Form.Label>
              <Form.Control
                placeholder="12345-678"
              />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Atualizar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Perfil;

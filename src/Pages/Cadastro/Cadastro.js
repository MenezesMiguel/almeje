import React from "react";
import "./Cadastro.css";
import { Form, Button, Col } from "react-bootstrap";

function Cadastro() {
  return (
    <div className="pagina">
      <div className="forms">
        <div className="Teste">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="name">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control placeholder="Nome Completo" />
              </Form.Group>
              <Form.Group as={Col} controlId="cpf">
                <Form.Label>CPF</Form.Label>
                <Form.Control placeholder="123.456.789-00" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email@email.com" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Endereco</Form.Label>
              <Form.Control placeholder="Rua abcd, 123" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Cidade</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Estado</Form.Label>
                <Form.Control as="select" defaultValue="Selecione">
                  <option>Selecione</option>
                  <option>SP</option>
                  <option>MG</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CEP</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Cadastre-se
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;

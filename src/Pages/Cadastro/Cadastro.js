import React, { useState } from "react";
import "./Cadastro.css";
import { Form, Button, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Cadastro() {
  const history = useHistory();
  const [nome, setNome] = useState();
  const [nascimento, setNascimento] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [endereco, setEndereco] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [cep, setCep] = useState();

  function Cadastro() {
    alert(
      "Cadastrado!\n" + nome + "\n" + nascimento + "\n" + cpf + "\n" + email
    );
    history.push("login");
  }

  return (
    <div className="pagina">
      <div className="teste" color="orange">
        <p>Bem vindo ao Atlas!</p>
      </div>
      <div className="forms">
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
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control
                  placeholder="DD/MM/AAAA"
                  onChange={(e) => setNascimento(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="cpf">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  placeholder="123.456.789-00"
                  onChange={(e) => setCpf(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => setSenha(e.target.value)}
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
                <Form.Control
                  as="select"
                  defaultValue="Selecione"
                  onChange={(e) => setEstado(e.target.value)}
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
                  onChange={(e) => setCep(e.target.value)}
                />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" onClick={Cadastro}>
              Cadastre-se
            </Button>
          </Form>
        </div>
    </div>
  );
}

export default Cadastro;

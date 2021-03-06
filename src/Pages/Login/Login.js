import React, { useState } from "react";
import "./Login.css";
import { Form, Button, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../services/api"
import { login } from "../../services/auth"

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("/login", {email, password});
      alert("Bem vindo "+ response.data.user.nome +"!");
      login(response.data.accessToken, response.data.user.user_id);
      history.push("home");
    } catch (error) {
      console.warn(error);
      alert("Credenciais Inválidas");
    }
  }

  return (
    <div className="geral">
      <p className="frase" color="orange">
        Bem vindo ao Atlas!
      </p>
      <div className="image">
        <img src="/images/logo_atlas2.png" className="logo" />
        <div className="painelInicial">
          <Form className="merda">
            <div className="inputs">
              <Form.Label>Atlas deseja Boas Vindas!</Form.Label>
              <Form.Group controlId="email">
                <Form.Control
                  className="barra"
                  type="email"
                  placeholder="Email@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Control
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/cadastro">Não sou cadastrado</Nav.Link>
              </Nav>
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>{" "}
    </div>
  );
}

export default Login;


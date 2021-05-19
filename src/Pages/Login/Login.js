
import React, { useState } from "react";
import "./Login.css";
import { Form, Button, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";


function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();


    function Login(){
        alert("Bem vindo!\n"+ email + "\n" + password);
        history.push("home");
    }
    return(
        <div className="geral">
            <div className="painelInicial">
                <Form>
                    <div className="inputs">
                        <Form.Label>Atlas deseja Boas Vindas!</Form.Label>
                        <Form.Group controlId="email">
                            <Form.Control 
                                type="email" 
                                placeholder="Email@email.com" 
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </Form.Group>
                            <Form.Control 
                                type="password" 
                                placeholder = "Senha"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                         <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Esqueci a senha</Nav.Link>
                            <Nav.Link href="/cadastro">Não sou cadastrado</Nav.Link>
                        </Nav>
                        <Button variant="primary" onClick={(Login)}>
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
        
    );
}

export default Login;

import React, { useState } from "react";
import "./Login.css";
import { Form, Button, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const styles = {
  classForm: {
    width: "80%",
  },
};
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  function Login() {
    alert("Bem vindo!\n" + email + "\n" + password);
    history.push("home");
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
              <Button variant="primary" onClick={Login}>
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


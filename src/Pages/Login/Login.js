import React from "react";
import "./Login.css"
import { Form, Button, Nav } from "react-bootstrap";


function Login(){
    return(
        <div className="geral">
            <div className="painelInicial">
                <Form>
                    <img src="./images/Thankyo.png" alt = "Logo"/>
                    <div className="inputs">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Atlas deseja Boas Vindas!</Form.Label>
                            <Form.Control type="email" placeholder="email@email.com" />
                        </Form.Group>

                            <Form.Control type="password" placeholder="Senha" />

                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Esqueci a senha</Nav.Link>
                            <Nav.Link href="/cadastro">Não sou cadastrado</Nav.Link>
                        </Nav>
                        <Button variant="primary" type="submit" href="/home">
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
        
    );
}

export default Login;
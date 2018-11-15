import React from 'react';
import { Col, Input, Button, Card, CardBody } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import axios from 'axios'

class Login extends React.Component {

    email = '';
    senha = '';

    login(){ 
        axios.post('localhost::7000/login',{
            email: this.email,
            senha: this.senha
        })
        .then(response => {console.log(response)})
        .catch(error => {console.log(error)})
    }

    render() {
        return (
            <Col md="6" className='component-content'>
                <Card>
                    <CardBody>
                        <form>
                            <p className="h5 text-center mb-4 cadastre">Login</p>
                            <div className="grey-text">
                                <Input label="Email" onChange={(event) => {this.email = event.target.value}} group type="email" validate error="wrong" success="right" />
                                <Input label="Senha" onChange={(event) => {this.senha = event.target.value }} group type="password" validate />
                            </div>
                            <div className="text-center">
                                <Button onClick = {this.login()}>Login</Button>
                            </div>
                        </form>
                        <br />
                        <p className="cadastre">Não possui login?
                            <a href="/cadastro"> Cadastre-se aqui</a>
                        </p>
                    </CardBody>
                </Card>
            </Col>
        );
    }
};

export default Login;
import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

class Login extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="6">
                        <form>
                            <p className="h5 text-center mb-4">Login</p>
                            <div className="grey-text">
                                <Input label="Email" icon="envelope" group type="email" validate error="wrong" success="right" />
                                <Input label="Senha" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                                <Button>Login</Button>
                            </div>
                        </form>
                        <p>
                            <a href="#">Não possui login? Cadastre-se aqui</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Login;
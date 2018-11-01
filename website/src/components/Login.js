import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css'; 

class Login extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="6">
                        <Card>
                            <CardBody>
                                <form>
                                    <p className="h5 text-center mb-4 cadastre">Login</p>
                                    <div className="grey-text">
                                        <Input label="Email" icon="envelope" group type="email" validate error="wrong" success="right" />
                                        <Input label="Senha" icon="lock" group type="password" validate />
                                    </div>
                                    <div className="text-center">
                                        <Button>Login</Button>
                                    </div>
                                </form>
                                <p className="cadastre">Não possui login?
                                    <a href="#"> Cadastre-se aqui</a>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
};

export default Login;
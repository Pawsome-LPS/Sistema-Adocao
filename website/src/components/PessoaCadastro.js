import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody } from 'mdbreact';

class PessoaCadastro extends React.Component  {
  render() {
    return(
            <Card>
              <CardBody>
                <form>
                  <p className="h4 text-center py-4 cadastre">Cadastre-se</p>
                  <div className="grey-text">
                    <Input label="Nome" icon="user" group type="text" validate error="wrong" success="right"/>
                    <Input label="Email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="Telefone" icon="phone" group type="number" validate error="wrong" success="right"/>
                    <Input label="Senha" icon="lock" group type="password" validate/>
                    <Input label="Confirme a senha" icon="exclamation-triangle" group type="password" validate error="wrong" success="right"/>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="red">Cancelar</Button>
                    <Button color="cyan" type="submit">Register</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
    );
  }
};

export default PessoaCadastro;

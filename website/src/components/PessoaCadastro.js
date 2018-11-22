import React from 'react';
import { Col, Input, Button, Card, CardBody } from 'mdbreact';

class PessoaCadastro extends React.Component  {
  render() {
    return(
      <Col md="6" className='component-content'>
          <Card>
            <CardBody>
              <form>
                <p className="h4 text-center py-4 cadastre">Cadastre-se</p>
                <div className="grey-text">
                  <Input label="Nome" group type="text" validate error="wrong" success="right"/>
                  <Input label="Email" group type="email" validate error="wrong" success="right"/>
                  <Input label="Telefone" group type="number" validate error="wrong" success="right"/>
                  <Input label="Senha" group type="password" validate/>
                  <Input label="Confirme a senha" group type="password" validate error="wrong" success="right"/>
                </div>
                <div className="text-center py-4 mt-3">
                  <Button color="red" href="/login">Cancelar</Button>
                  <Button color="cyan" type="submit">Register</Button>
                </div>
              </form>
            </CardBody>
          </Card>
      </Col>
    );
  }
};

export default PessoaCadastro;


import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody } from 'mdbreact';
import axios from 'axios'

class CadastroPet extends React.Component {

    nome = '';
    especie = '';
    raca = '';
    nascimento = '';
    vacinacao = '';

    login() {
        axios.post('localhost::7000/cadastro_pet', {
            nome: this.nome,
            especie: this.especie,
            raca: this.raca,
            nascimento: this.nascimento,
            vacinacao: this.vacinacao
        })
            .then(response => { console.log(response) })
            .catch(error => { console.log(error) })
    }
    render() {
        return (
            <Col md="6" className='component-content'>
                <Card>
                    <CardBody>
                        <form>
                            <p className="cadastre">Cadastre Seu Amigo</p>
                            <div className="grey-text">
                                <Input label="Nome" icon="user" group type="text" validate error="wrong" success="right" />
                                <Input label="Espécie" icon="paw" group type="text" validate error="wrong" success="right" />
                                <Input label="Raça" icon="user" group type="text" validate error="wrong" success="right" />
                                <input id="data_nascimento" type="date" className="form-control" name="data_nascimento" placeholder="Data Nascimento" />
                                <input id="data_vacinacao" type="date" className="form-control" name="data_vacinacao" placeholder="Data de Vacinação" />
                                <input className="btn btn-primary" type="file" accept="image/gif, image/jpeg, image/png" /><br />
                                <input onClick={this.login()} className="btn btn-primary" type="submit" value="Cadastrar" /><br />
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </Col>
        );
    }
};

export default CadastroPet;
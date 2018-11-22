import React from 'react';
import { Container, Row, Col ,Button, Card, CardBody, Input }  from 'mdbreact';
import {
    MDBSelect,
    MDBSelectInput,
    MDBSelectOptions,
    MDBSelectOption,
  } from "mdbreact";
import './../App.css';
import './components.css';
import axios from 'axios';
import DogCard from './DogCard';

class Busca extends React.Component {

    constructor(){
        super();
        this.state = {
            ok: false,
            pets: []
        }
    }

    nome = '';
    data = '';
    raca = ''; 

    busca() {
        axios.get('localhost:7000/busca',{
            nome: this.nome,
            data: this.data,
            raca: this.raca
        })
            .then(response => {
                this.setState({ok: response.status, pets: response.data.pets})
            })
            .catch(error => {console.log(error)})
    }

    render(){
        if(this.state.ok) {
            return(
                <div style={{marginTop: '50px', margingLeft: '40px'}}>
                    <h1 className='cadastre'>Resultados</h1>
                    <Cards pets={this.state.pets}/>
                 </div>
            )
        }

        return(
                <Col md="6" className='component-content'>
                    <Card>
                        <CardBody>
                            <form>
                            <p className="h4 py-4 cadastre">Busca</p>
                            <div className="grey-text input-div">
                                <Input label="Raça" onChange={(event) => {this.raca = event.target.value}} group type="text" validate error="wrong" success="right"/>
                                <Input label="Nome" onChange={(event) => {this.nome = event.target.value}} group type="text" validate error="wrong" success="right"/>
                                <Input label="" onChange={(event) => {this.data = event.target.value}} group type="date" validate error="wrong" success="right"/>
                            </div>
                            <div className="text-center py-4 mt-3">
                                <Button color="red" href="/">Cancelar</Button>
                                <Button color="cyan" type="submit">Buscar</Button>
                            </div>
                        </form>
                        </CardBody>
                    </Card>
                </Col>

        )
    }
}

class Cards extends React.Component {
    render() {
        var style = {
            paddingLeft: '25px',

            
        };
      const cardData = this.props.pets; // show in the following codes
      return (
        <section style={style}>
        {
          cardData.map((pet, i) => {
            return (
                <DogCard key={i} name={pet.name} idade={pet.idade} vacinacao={pet.vacinacao}/>
            )
          })
        }
        </section>
      )
    }
}

export default Busca;
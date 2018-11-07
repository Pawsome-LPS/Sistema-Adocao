import React from 'react';
import { Table, TableBody, TableHead } from 'mdbreact';
import LinhaRelatorio from './LinhaRelatorio';
import axios from 'axios';

class Relatorio extends React.Component {
    
    constructor(){
        super();
        this.state = {linhas: []};
    }


    componentDidMount(){
        axios.get('localhost::7000/relatorio').then((response) => {
            this.setState({linhas: response.data.linhas});
        }).catch((err) => {
            console.log(err);
        })
    }

    render(){
        const linhas = this.state.linhas.map((linha, i) => (<LinhaRelatorio key={i} nome ={linha.nome} sexo = {linha.sexo} especie = {linha.especie} idade = {linha.idade} raca = {linha.raca}/> ))
        return (
            <Table hover>
                <TableHead>
                    <tr>
                        <th>Nome</th>
                        <th>Sexo</th>
                        <th>Espécie</th>
                        <th>Idade</th>
                        <th>Raça</th>
                    </tr>
                </TableHead>
                <TableBody>
                    {linhas}
                </TableBody>
            </Table>
        );
    }
}

export default Relatorio;
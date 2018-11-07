import React from 'react';
import { Table, TableBody, TableHead } from 'mdbreact';
import LinhaRelatorio from './LinhaRelatorio'

const Relatorio = (props) => {
    const linhas 


    return (
        <Table hover>
            <TableHead>
                <tr>
                    <th>Nome</th>
                    <th>Sexo</th>
                    <th>Categoria</th>
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

export default Relatorio;
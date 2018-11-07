import React from 'react';
class LinhaRelatorio extends React.Component {
    render() {
        return (
            <tr>
                <th>{this.props.nome}</th>
                <th>{this.props.sexo}</th>
                <th>{this.props.especie}</th>
                <th>{this.props.idade}</th>
                <th>{this.props.raca}</th>
            </tr>
        )
    }
}

export default LinhaRelatorio;
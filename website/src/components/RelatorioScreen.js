import React from 'react';
import Relatorio from './Relatorio';
import Navbar from './navbar';

class RelatorioScreen extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div>
                    <Relatorio />
                </div>
            </div>
        )
    }
}

export default RelatorioScreen;
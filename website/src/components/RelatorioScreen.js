import React from 'react';
import Relatorio from './Relatorio';
import NavbarPage from './navbar';

class RelatorioScreen extends React.Component {
    render() {
        return (
            <div>
                <NavbarPage />
                <div>
                    <Relatorio />
                </div>
            </div>
        )
    }
}

export default RelatorioScreen;
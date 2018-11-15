import React from 'react';
import CadastroPet from './CadastroPet';
import NavbarPage from './navbar';
import './components.css';

class CadastroPetScreen extends React.Component {
    render(){
        return(
            <div>
                <NavbarPage />
                <div className="component">
                    <CadastroPet />
                </div>
            </div>
        )
    }
}

export default CadastroPetScreen;
import React from 'react';
import CadastroPet from './CadastroPet';
import Navbar from './navbar';
import './components.css';

class CadastroPetScreen extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <div className="component">
                    <CadastroPet/>
                </div>
            </div>
        )
    }
}

export default CadastroPetScreen;
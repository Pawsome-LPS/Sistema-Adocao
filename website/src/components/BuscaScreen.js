import React from 'react';
import Busca from './Busca';
import NavbarPage from './navbar';
import './components.css';

class BuscaScreen extends React.Component {
    render(){

        return(
            <div>
                <NavbarPage />
                <div className='component'>
                    <Busca />
                </div>
            </div>
        );
    }
}

export default BuscaScreen;
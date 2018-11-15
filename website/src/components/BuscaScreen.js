import React from 'react';
import Busca from './Busca';
import NavbarPage from './navbar';
import './components.css';
import { Fa } from "mdbreact";

class BuscaScreen extends React.Component {
    render(){

        return(
            <div>
                <NavbarPage />
                <div className='component'>
                    <Busca />
                    <Fa icon="paper-plane-o" className="ml-1" />
                </div>
            </div>
        );
    }
}

export default BuscaScreen;
import React from 'react';
import Busca from './Busca';
import Navbar from './navbar';
import './components.css';

class BuscaScreen extends React.Component {
    render(){

        return(
            <div>
                <Navbar/>
                <div className='component'>
                    <Busca />
                </div>
            </div>
        );
    }
}

export default BuscaScreen;
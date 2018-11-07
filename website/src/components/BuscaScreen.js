import React from 'react';
import Busca from './Busca'
import './components.css';
class BuscaScreen extends React.Component {
    render(){
        return(
            <div className="App container-fluid">
                <Busca className="component"/>
            </div>
        )
    }
}

export default BuscaScreen;
import React from 'react';
import Cadastro from './PessoaCadastro';
import './components.css';

class PessoaCadastroScreen extends React.Component {
    render(){
        return(
            <div className="App component">
                <Cadastro className='component'/>
            </div>
        )
    }
}

export default PessoaCadastroScreen;
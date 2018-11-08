import React from 'react';
import Cadastro from './PessoaCadastro';
import Navbar from './navbar';
import './components.css';

class PessoaCadastroScreen extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <div className="component">
                    <Cadastro className='component'/>
                </div>
            </div>
        )
    }
}

export default PessoaCadastroScreen;
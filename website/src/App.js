import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'; 
import PessoaCadastro from "./components/PessoaCadastro";
import LoginScreen from './components/LoginScreen';
import CadastroPetScreen from './components/CadastroPetScreen';
import BuscaScreen from './components/BuscaScreen';
import RelatorioScreen from './components/RelatorioScreen';



class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
        
        <BrowserRouter>
          <switch>
            <Route path="/login" component={LoginScreen}/>
            <Route path="/cadastro" component={PessoaCadastro}/>
            <Route path="/cadastro_pet" component={CadastroPetScreen}/>
            <Route path="/busca" component={BuscaScreen}/>
            <Route path="/relatorio" component= {RelatorioScreen}/>
          </switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

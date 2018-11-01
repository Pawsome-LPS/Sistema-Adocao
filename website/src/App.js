import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'; 
import DogCard from './components/DogCard';
import PessoaCadastro from "./components/PessoaCadastro";
import CadastroPet from "./components/CadastroPet";
import LoginScreen from './components/LoginScreen';
import PessoaCadastroScreen from './components/PessoaCadastroScreen';
import CadastroPetScreen from './components/CadastroPetScreen';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <BrowserRouter>
          <switch>
            <Route path="/login" component={LoginScreen}/>
            <Route path="/cadastro" component={PessoaCadastro}/>
            <Route path="/cadastro_pet" component={CadastroPetScreen}/>
            <Route path="/#/"/>
          </switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

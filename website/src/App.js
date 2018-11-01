import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'; 
import DogCard from './components/DogCard';
import PessoaCadastro from "./components/PessoaCadastro";
import CadastroPet from "./components/CadastroPet";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <BrowserRouter>
          <switch>
            <Route path="/login"/>
            <Route path="/cadastro"/>
            <Route path="/#/cadastro_pet"/>
            <Route path="/#/"/>
          </switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

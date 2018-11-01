import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogCard from './components/DogCard';
import PessoaCadastro from "./components/PessoaCadastro";
import CadastroPet from "./components/CadastroPet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DogCard name="Wyllianderson" idade="2 anos" vacinacao="13/06/2018"/>
          <PessoaCadastro/>
          <CadastroPet/>
        </header>
      </div>
    );
  }
}

export default App;

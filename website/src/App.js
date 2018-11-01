import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogCard from './components/DogCard';
import PessoaCadastro from "./components/PessoaCadastro";
import CadastroPet from "./components/CadastroPet";
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DogCard name="Wyllianderson" idade="2 anos" vacinacao="13/06/2018"/>
          <PessoaCadastro/>
          <CadastroPet/>
<<<<<<< HEAD
          <Login/>
          <a
            className="App-link"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
=======
>>>>>>> ac01095e0fc31e2c2091e628d1428de4b13269ad
        </header>
      </div>
    );
  }
}

export default App;

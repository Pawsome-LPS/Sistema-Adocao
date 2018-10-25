import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogCard from './components/DogCard';
import PessoaCadastro from "./components/PessoaCadastro";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <DogCard/>
          <PessoaCadastro/>
          <a
            className="App-link"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default App;

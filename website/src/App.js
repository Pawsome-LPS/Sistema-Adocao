import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import CadastroPetScreen from './components/CadastroPetScreen';
import BuscaScreen from './components/BuscaScreen';
import RelatorioScreen from './components/RelatorioScreen';
import PessoaCadastroScreen from "./components/PessoaCadastroScreen";
import HomeScreen from "./components/homeScreen";



class App extends Component {
  render() {
    return (
      <div className="container-fluid App" style={{paddingLeft: "0px", paddingRight: "0px"}}>
        
        <BrowserRouter>
          <switch>
            {/*<Redirect from exact="/" to="/login"/>*/}
            <Route exact path="/" component={HomeScreen}/>
            <Route path="/login" component={LoginScreen}/>
            <Route path="/cadastro" component={PessoaCadastroScreen}/>
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

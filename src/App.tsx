import React from 'react';
import logo from './logo.svg';
import './App.css';
import Botao from './components/Botao';
import Lista from './components/Lista';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <p>Seja bem vindo!!!</p>
      <Formulario/>

      <Lista/>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/Output';
import UserInput from './UserInput/UserInput'

function App() {
  return (
    <div>
      <h1>Teste</h1>
      <UserOutput userName="Charles"></UserOutput>
      <UserOutput userName="Fernanda"></UserOutput>
      <UserOutput userName="Andressa"></UserOutput>
      <UserInput></UserInput>
    </div>
  );
}

export default App;

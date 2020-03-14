import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">      
          Hello There
      </header>
    </div>
  );
}

export default App;

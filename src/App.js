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
      <svg width="340" height="340">
       <circle cx="50" cy="110" r="100" stroke="yellow" stroke-width="4" fill="yellow" />
       
      <rect x="70" y="10" width="220" height="130" fill="transparent" rx="150" stroke="crimson" stroke-width="10" />
       <rect x="10" y="70" width="340" height="80" fill="crimson" rx="30" />
     </svg> 
      </header>
    </div>
  );
}

export default App;

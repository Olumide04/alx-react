import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import holbertonLogo from './holberton_logo.jpg';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
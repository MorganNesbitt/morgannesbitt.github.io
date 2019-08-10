import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import ErrorBoundary from './errorBoundary.js';

function App() {
  return (
    <div className="vw100 vh100 bg-orange flex flex-column items-center justify-center">
      <header className="wp100 wh100 flex-row justify-center items-center">
        <button onClick={() => {
          let lol;
          lol.hihi()
        }}>Hi</button>
        <button>Ho</button>
        <button>He</button>
      </header>
      <div className="wp100 wh100 flex-row justify-center items-center">
        <Link to="dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

export default function wrapped() {
  return (
    <ErrorBoundary appName={'App'}>
      <App/>
    </ErrorBoundary>
  );
}

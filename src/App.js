import React from 'react';

import { Routes, Route } from 'react-router-dom'

import Birds from './components/birds';

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
      
        </h1>
      </header>
      <main>

    <Birds />


      </main>
    </>
  );
}

export default App;

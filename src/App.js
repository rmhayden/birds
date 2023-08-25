import React from 'react';

import { Routes, Route } from 'react-router-dom'

import Birds from './components/birds';
import BirdDetails from './components/birdDetails';

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
      
        </h1>
      </header>

      <main>
    
  <Routes>
    <Route path="/" element={ <Birds /> } />
    <Route path="/details/:id" element={ <BirdDetails />} />
  </Routes>

</main>

    </>
  );
}

export default App;

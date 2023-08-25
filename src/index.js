import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));

root.render(

    // this Router below allows us to access all route features in the app component and any compomnent rendered within app
    <Router>
      <App />
    </Router>
    

    );
    
    
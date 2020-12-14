import React from 'react';
import './styles/App.css';
import { CitiesPeekContainer } from './containers/CitiesPeekContainer';
import { BrowserRouter as Router } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <CitiesPeekContainer />
      </Router>
    </div>
  );
};

export default App;
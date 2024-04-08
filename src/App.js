import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {TrackerWrapper} from './components/TrackerWrapper';
import { ProgressBar } from './components/ProgressBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={TrackerWrapper} />
        <Route path="/progress" component={ProgressBar} />
      </div>
    </Router>
  );
}

export default App;

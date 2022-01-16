import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import MoviePage from './MoviePage';

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/myapps' element={<Navigate replace to={'/learn'} />} />
      <Route path='/learn' element={<Learn />} />
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>Home Route</h1>
    </div>
  )
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      <Link className='btn btn-outline-success text-white mx-2' to="/learn/course" >Courses</Link>
      <Link className='btn btn-outline-info text-white'to="/learn/bundle" >Bundle</Link>
    </div>
  )
}

reportWebVitals();

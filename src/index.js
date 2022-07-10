import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/myapps' element={<Navigate replace to={'/learn'} />} />
      <Route path='/learn' element={<Learn />}>
        <Route path='courses' element={<Courses />}>
          <Route path=':courseid' element={<CourseId />} />
        </Route>
        <Route path='bundles' element={<Bundles />} />
      </Route>
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
      <Link className='btn btn-outline-success text-white mx-2' to="/learn/courses" >Courses</Link>
      <Link className='btn btn-outline-info text-white' to="/learn/bundles" >Bundle</Link>
      <Outlet />
    </div>
  )
}

function Courses() {
  const courseList = ['React', 'Angular', 'Vue', 'Nodejs']
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)]
  return (
    <div>
      <h1>Courses list</h1>
      <h4>Courses Cards</h4>
      <p>More Test</p>
      <NavLink style={({ isActive }) => {
        return {
          border: isActive ? '2px solid yellow' : '0',
          padding: isActive ? '1rem' : 0
        }
      }} to={`/learn/courses/${randomCourseName}`}>{randomCourseName}</NavLink>
      <NavLink className="btn btn-outline-light mx-2" to={`/learn/courses/tests`}>Tests</NavLink>
      <Outlet />
    </div>
  )
}

function Bundles() {
  return (
    <div>
      <h1>Bundle list</h1>
      <h4>Bundle Cards</h4>
    </div>
  )
}

function CourseId() {
  const { courseid } = useParams()
  return (
    <div>
      <h1>URL Param : {courseid}</h1>
    </div>
  )
}

reportWebVitals();

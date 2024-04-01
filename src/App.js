import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './screens/Home'
import CoreTeam from './screens/CoreTeam';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/core-team' element={<CoreTeam/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

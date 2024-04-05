import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Home from './screens/Home';
import CoreTeam from './screens/CoreTeam';
import EventPage from './screens/EventPage';
import VotingPage from './screens/VotingPage'
import Login from './screens/login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/events" element={<EventPage/>} />
          <Route path="/core-team" element={<CoreTeam/>} />
          <Route path="/voting" element={<VotingPage/>} />
          <Route path='/register' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

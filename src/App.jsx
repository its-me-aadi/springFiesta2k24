import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventPage from './screens/EventPage';
import VotingPage from './screens/VotingPage';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/events" element={<EventPage/>}></Route>
          <Route path="/voting" element={<VotingPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventPage from './screens/EventPage';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/events" element={<EventPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

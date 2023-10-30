import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import WorkoutLogger from './components/WorkoutLogger';
import ProgressTracker from './components/ProgressTracker';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/log-workout" element={<WorkoutLogger />} />
        <Route path='/track-progress' element={<ProgressTracker />} />
      </Routes>
    </Router>
  )
}

export default App;
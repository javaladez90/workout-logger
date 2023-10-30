import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import WorkoutLogger from './components/WorkoutLogger';
import ProgressTracker from './components/ProgressTracker';
import BMICalculator from './components/BMICalculator';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/log-workout" element={<WorkoutLogger />} />
        <Route path='/track-progress' element={<ProgressTracker />} />
        <Route path='/bmi-calculator' element={<BMICalculator />} />
        <Route path='register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import './App.css';
import Navbar from './components/Navbar';
import BrokerForm from './components/BrokerForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <React.Fragment>
              <Navbar />
              <Routes>
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/broker" element={<BrokerForm />} />
                {/* Add more routes as needed */}
                <Route path="*" element={<Navigate to="/landing-page" />} />
              </Routes>
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

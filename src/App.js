import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import MainApp from './components/MainApp';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check if user is already authenticated on app start
    const checkAuthStatus = () => {
      const authStatus = localStorage.getItem('isAuthenticated');
      const userData = localStorage.getItem('currentUser');
      
      if (authStatus === 'true' && userData) {
        setIsAuthenticated(true);
        setCurrentUser(JSON.parse(userData));
      }
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? 
              <Navigate to="/" replace /> : 
              <Login onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/" 
            element={
              isAuthenticated ? 
              <MainApp currentUser={currentUser} onLogout={handleLogout} /> : 
              <Navigate to="/login" replace />
            } 
          />
          <Route 
            path="*" 
            element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

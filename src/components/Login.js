import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (isSignUp) {
      if (!formData.fullName) {
        newErrors.fullName = 'Full name is required';
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (isSignUp) {
        // Store user data in localStorage (in real app, this would be sent to backend)
        const userData = {
          email: formData.email,
          fullName: formData.fullName,
          password: formData.password // In real app, password would be hashed
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Account created successfully! Please sign in.');
        setIsSignUp(false);
        setFormData({
          email: formData.email,
          password: '',
          confirmPassword: '',
          fullName: ''
        });
      } else {
        // Check credentials (in real app, this would be verified by backend)
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          const userData = JSON.parse(storedUserData);
          if (userData.email === formData.email && userData.password === formData.password) {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('currentUser', JSON.stringify({
              email: userData.email,
              fullName: userData.fullName
            }));
            onLogin();
          } else {
            setErrors({ general: 'Invalid email or password' });
          }
        } else {
          setErrors({ general: 'No account found. Please sign up first.' });
        }
      }
    } catch (error) {
      setErrors({ general: 'An error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: ''
    });
    setErrors({});
  };

  return (
    <section className="login-container">
      <div className="login-card container">
        <div className="login-header">
          <h1 className="login-logo">WATCHES</h1>
          <p className="login-subtitle">
            Premium timepieces crafted with precision and style. 
            Access your personalized watch collection.
          </p>
        </div>

        <div className="login-form-container">
          <div className="login-tabs">
            <button
              type="button"
              className={`tab ${!isSignUp ? 'active' : ''}`}
              onClick={() => !isSignUp || toggleMode()}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`tab ${isSignUp ? 'active' : ''}`}
              onClick={() => isSignUp || toggleMode()}
            >
              Sign Up
            </button>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {errors.general && (
              <div className="error-message general-error">
                {errors.general}
              </div>
            )}

            {isSignUp && (
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? 'error' : ''}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
                placeholder="Enter your password"
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            {isSignUp && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? 'error' : ''}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
            )}

            <button
              type="submit"
              className="login-submit"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : (isSignUp ? 'Create Account' : 'Sign In')}
            </button>
          </form>

          <div className="login-footer">
            <p>
              {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
              <button type="button" className="toggle-link" onClick={toggleMode}>
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="login-background">
        <div className="bg-shape shape1"></div>
        <div className="bg-shape shape2"></div>
        <div className="bg-shape shape3"></div>
      </div>
    </section>
  );
};

export default Login;

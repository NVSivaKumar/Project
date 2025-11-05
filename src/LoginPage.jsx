import React, { useState } from 'react';
import './LoginPage.css';
import { FaGoogle, FaFacebookF } from 'react-icons/fa'; 

// Receive onLoginSuccess as a new prop
const LoginPage = ({ onSwitchToSignUp, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Define the required valid credentials
  const VALID_EMAIL = 'siv@gmail.com';
  const VALID_PASSWORD = '1234';

  const handleSubmit = (e) => {
    e.preventDefault();

    // CRITICAL: Check for specific valid credentials (case-sensitive for password)
    if (username === VALID_EMAIL && password === VALID_PASSWORD) {
        console.log("Login successful! Switching to dashboard.");
        onLoginSuccess(); // Switch view to Dashboard
        return;
    }

    // Handle failed login attempt
    console.log('Login attempt failed for:', username);
    document.getElementById('message-box').innerText = `Login Failed: Invalid Email ID or Password.`;
    document.getElementById('message-box').classList.add('visible');
    setTimeout(() => {
        document.getElementById('message-box').classList.remove('visible');
    }, 3000);
  };

  const handleSocialLogin = (platform) => {
    document.getElementById('message-box').innerText = `${platform} Login initiated.`;
    document.getElementById('message-box').classList.add('visible');
    setTimeout(() => {
        document.getElementById('message-box').classList.remove('visible');
    }, 3000);
  }

  return (
    <div className="login-page">
      <div id="message-box"></div> 

      <div className="left-panel">
        <h1>Great To See You Again!</h1>
        <p>HireSphere: Connecting users with skilled professionals efficiently.</p>
      </div>

      <div className="right-panel">
        {/* Top Navigation */}
        <div className="top-nav">
          <button className="text-btn">Log In</button>
          <button className="signup-btn" onClick={onSwitchToSignUp}>Sign Up</button> 
        </div>

        <div className="login-form-container">
          <h2>Log In</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username/ Email ID</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Your Username/Email ID"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>

            <div className="options-row">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <a href="#" className="forgot-password-link">Forgot Password?</a>
            </div>

            <button type="submit" className="login-btn">
              Log In
            </button>
          </form>

          <div className="separator">or</div>

          <div className="social-login">
            <button className="social-btn google-btn" onClick={() => handleSocialLogin('Google')}>
              <FaGoogle />
              <span>G+ Login with Google</span>
            </button>
            <button className="social-btn facebook-btn" onClick={() => handleSocialLogin('Facebook')}>
              <FaFacebookF />
              <span>f Login with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage = ({ onSwitchToLogin }) => {
  // Existing state fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [registerAs, setRegisterAs] = useState('user'); 
  const [profession, setProfession] = useState('');
  const [password, setPassword] = useState('');
  
  // NEW state fields
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [codeSent, setCodeSent] = useState(false); // To simulate code sending

  const handleSendCode = () => {
    // Simulate API call to send code
    setCodeSent(true);
    document.getElementById('message-box').innerText = `Verification code sent to ${email || 'your email/phone'}.`;
    document.getElementById('message-box').classList.add('visible');
    setTimeout(() => {
        document.getElementById('message-box').classList.remove('visible');
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError('');

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }

    // Placeholder for actual sign-up logic 
    console.log('Signing Up with:', { 
      fullName, email, phoneNumber, registerAs, 
      profession: registerAs === 'professional' ? profession : 'N/A', 
      password, verificationCode 
    });
    
    // Display message box feedback
    document.getElementById('message-box').innerText = `Sign Up attempted for: ${fullName}`;
    document.getElementById('message-box').classList.add('visible');
    setTimeout(() => {
        document.getElementById('message-box').classList.remove('visible');
    }, 3000);
  };

  return (
    <div className="signup-page">
      <div id="message-box"></div> 

      {/* Left Panel (Purple Sidebar) */}
      <div className="signup-left-panel">
        <h1>Great To See You Again!</h1>
        <p>HireSphere: Connecting users with skilled professionals efficiently.</p>
      </div>

      {/* Right Panel (Sign Up Form) */}
      <div className="signup-right-panel">
        {/* Top Navigation */}
        <div className="signup-top-nav">
          <button className="signup-text-btn" onClick={onSwitchToLogin}>Log In</button>
          <button className="signup-btn-active">Sign Up</button>
        </div>

        <div className="signup-form-container">
          <h2>Sign Up</h2>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="signup-form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name" required />
            </div>

            {/* Email ID */}
            <div className="signup-form-group">
              <label htmlFor="email">Email ID</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
            </div>

            {/* Phone Number */}
            <div className="signup-form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your phone number" required />
            </div>

            {/* Register As Dropdown */}
            <div className="signup-form-group">
              <label htmlFor="registerAs">I want to register as:</label>
              <select
                id="registerAs"
                value={registerAs}
                onChange={(e) => {
                    setRegisterAs(e.target.value);
                    if (e.target.value !== 'professional') { setProfession(''); }
                }}
                className="signup-select"
              >
                <option value="user">User (Need Services)</option>
                <option value="professional">Professional (Offer Services)</option>
              </select>
            </div>

            {/* Profession/Service Field (conditionally rendered) */}
            {registerAs === 'professional' && (
              <div className="signup-form-group">
                <label htmlFor="profession">What type of profession/service?</label>
                <input type="text" id="profession" value={profession} onChange={(e) => setProfession(e.target.value)} placeholder="e.g., Plumber, Web Developer, Tutor" required />
              </div>
            )}

            {/* Password */}
            <div className="signup-form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" required />
            </div>
            
            {/* NEW: Confirm Password */}
            <div className="signup-form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                placeholder="Confirm your password" 
                required 
              />
              {passwordError && <p className="password-error">{passwordError}</p>}
            </div>

            {/* NEW: Verification Code with button */}
            <div className="signup-form-group">
              <label htmlFor="verificationCode">Verification Code</label>
              <div className="code-input-group">
                <input 
                  type="text" 
                  id="verificationCode" 
                  value={verificationCode} 
                  onChange={(e) => setVerificationCode(e.target.value)} 
                  placeholder="Enter the 6-digit code" 
                  required 
                />
                <button 
                  type="button" 
                  className="send-code-btn" 
                  onClick={handleSendCode} 
                  disabled={codeSent}
                >
                  {codeSent ? 'Resend Code' : 'Send Code'}
                </button>
              </div>
            </div>

            {/* Save Account Button */}
            <button type="submit" className="signup-save-btn">
              Save Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
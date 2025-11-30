import React, { useState, useEffect } from "react";
import "./LoginPage.css";

function LoginPage({ onLoginSuccess, onSwitchToSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  // Generate random text captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let text = "";
    for (let i = 0; i < 5; i++) {
      text += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(text);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = () => {
    if (captchaInput !== captcha) {
      setCaptchaError("Incorrect CAPTCHA. Please try again.");
      generateCaptcha();
      return;
    }

    setCaptchaError("");

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      alert("No account found. Please register first.");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      alert("Login successful!");
      onLoginSuccess();
    } else {
      alert("Wrong email or password.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* CAPTCHA API key=6Lf2YxwsAAAAAOqL2KGUCsT9amqfL8Y5CqvOlsfR*/}
      <div className="captcha-box">
        <p>Enter the following code:</p>

        <div className="captcha-text">{captcha}</div>

        <input
          type="text"
          placeholder="Type CAPTCHA"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
        />

        <p className="refresh-text" onClick={generateCaptcha}>
          🔄 Refresh CAPTCHA
        </p>

        {captchaError && <p className="error-msg">{captchaError}</p>}
      </div>

      <button onClick={handleLogin}>Login</button>

      <p className="switch-link" onClick={onSwitchToSignUp}>
        Create an account
      </p>
    </div>
  );
}

export default LoginPage;

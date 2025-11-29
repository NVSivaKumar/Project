import React, { useState } from "react";
import './LoginPage.css';

function LoginPage({ onLoginSuccess, onSwitchToSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No account found. Please register first.");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      alert("Login Successful!");
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

      <button onClick={handleLogin}>Login</button>

      <p onClick={onSwitchToSignUp} className="switch-link">
        Create an account
      </p>
    </div>
  );
}

export default LoginPage;

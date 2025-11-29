import React, { useState } from "react";
import './SignUpPage.css';
function SignUpPage({ onSwitchToLogin }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user"); // dropdown
  const [profession, setProfession] = useState(""); // extra field if professional

  const handleSignup = (e) => {
    e.preventDefault();

    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = { fullName, email, phoneNumber, password };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Registration successful!");
    onSwitchToLogin();
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
           {/* Dropdown for User or Professional */}
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User (Need Services)</option>
          <option value="professional">Professional (Offer Services)</option>
        </select>

        {/* Extra input only for professional */}
        {role === "professional" && (
          <input
            type="text"
            placeholder="Your Profession (e.g., Plumber, Tutor)"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        )}


        <button type="submit">Register</button>
      </form>

      <p onClick={onSwitchToLogin} className="switch-link">
        Already have an account? Login
      </p>
    </div>
  );
}

export default SignUpPage;

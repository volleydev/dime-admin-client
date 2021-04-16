import "./signup-form.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { signUp } from "../services/auth";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    signUp({ email, password });
  };

  return (
    <div className="singup-form">
      <h2>Sign Up</h2>
      <input
        onChange={({ target: { value } }) => setUsername(value)}
        placeholder="Name"
        type="text"
        name="signup-name"
      />
      <input
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        type="text"
        name="email"
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        type="password"
        name="password"
      />
      <button onClick={handleSignup} id="signup-btn">
        SIGN UP
      </button>
      <Link to="/auth/signIn">Sign In</Link>
    </div>
  );
};

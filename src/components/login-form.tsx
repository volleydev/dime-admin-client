import { signIn } from "../services/auth";
import { Link } from "react-router-dom";
import "./login-form.scss";
import { useState } from "react";
// TODO
// 1. UI
// 2. Firebase Auth service -> service/auth.ts
// 3. Auth service in UI einbauen
// 4. Auth token in localStorage speichern
// 5. Authenticated request to admin-api:
//    fetch(url, {
//      headers: {
//        authorization: token
//      }
//    })

// Ziel: Token bekommen damit wir in der Api durchkommen

export const LogIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignIn = () => {
    signIn({ email, password });
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input
        onChange={({ target: { value } }) => setEmail(value)}
        placeholder="Email"
        id="email"
        name="email"
        type="text"
      />
      <input
        onChange={({ target: { value } }) => setPassword(value)}
        placeholder="Password"
        name="password"
        type="password"
      />
      <button id="logsubmit-btn" onClick={handleSignIn}>
        LOGIN
      </button>
      <Link to="/auth/signUp">Sign Up</Link>
    </div>
  );

};
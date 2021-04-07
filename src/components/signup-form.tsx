import "./signup-form.scss";
import React, {useState} from 'react'

export const SignUp = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="singup-form">
            <h2>Sign Up</h2>
            <input onChange={(event) => setUsername(event.target.value)}  placeholder="Name" type="text" name="signup-name" />
            <input onChange={(event) => setEmail(event.target.value)}  placeholder="Email" type="text" name="email"  />
            <input onChange={(event) => setPassword(event.target.value)}  placeholder="Password" type="text" name="password"  />
            <button id="signup-btn">SIGN UP</button>
        </div>
    )
}
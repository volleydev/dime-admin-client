import "./signup-form.scss";

export const SignUp = () => {
    return (
        <div className="singup-form">
            <h2>Sign Up</h2>
            <input placeholder="Name" type="text" name="signup-name" />
            <input placeholder="Email" type="text" name="email" />
            <input placeholder="Password" type="text" name="password" />
            <button id="signup-btn">SIGN UP</button>
        </div>
    )
}
import "./login-form.scss";

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
  return (
    <div className="login-form">
      <h2>Login</h2>
      <input placeholder="Email" id="email" name="email" type="text" />
      <input placeholder="Password" name="password" type="text" />
      <button id="logsubmit-btn">LOGIN</button>
    </div>
  );
};

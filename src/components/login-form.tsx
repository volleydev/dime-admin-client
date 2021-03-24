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


export const LoginForm = () => {



  return (
  <div className="body">

    <div className="grid-container login-container">

      <div className="header"><h2>Login</h2></div>

      <div className="username">
      <input placeholder="Email" id="email" name="email" type="text"/>
      </div>
      <div className="password">
      <input placeholder="Password" name="password" type="text"/>
      </div>
      <div className="login-btn-container">
      <button id="logsubmit-btn" >LOGIN</button>
        <div className="btn-container">
        <img src="./google-icon.png" alt="googleicon"/>
        </div>
      </div>
     
    </div>

  </div>
  )

};



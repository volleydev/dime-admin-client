<<<<<<< HEAD
import { LogIn } from "./components/login-form"
import {SignUp} from './components/signup-form'

function App() {
  return <div>
    <br/>
    < LogIn/>
  <br/>
    <SignUp/>
  </div>
=======
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/header";

import { AuthPage } from "./pages/auth";
import { MenusPage } from "./pages/menus";
import { useAuthUser } from "./services/auth";

function App() {
  const user = useAuthUser();
  return (
    <div>
      <BrowserRouter>
        <Header user={user} />
        {!user ? (
          <Route path="/auth/:type" component={AuthPage} />
        ) : (
          <Route path="/" component={MenusPage} />
        )}
      </BrowserRouter>
    </div>
  );
>>>>>>> f8450f6431923a2ee02f0902c6ff595149f2c3b0
}

export default App;

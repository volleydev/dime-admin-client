import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/header";

import { AuthPage } from "./pages/auth";
import { MenusPage } from "./pages/menus";
import { useAuthUser } from "./services/auth";

import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./firebaseConfig.json";
import { useEffect } from "react";

firebase.initializeApp(firebaseConfig);

const App = () => {
  const user = useAuthUser();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // @ts-ignore
        const idToken = await firebase.auth().currentUser.getIdToken(false);
        localStorage.setItem("idToken", idToken);
      } else {
        // logout
        localStorage.removeItem("idToken");
      }
    });
  }, []);

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
};

export default App;

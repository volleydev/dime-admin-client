import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/header";

import { AuthPage } from "./pages/auth";
import { MenusPage } from "./pages/menus";
import { listenToAuthStateChange, useAuthUser } from "./services/auth";

import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./firebaseConfig.json";
import { useEffect, useMemo } from "react";

const App = () => {
  const user = useAuthUser();


  // hier folgendes eingefügt, da er mir nen fehlehr geschmissen hat 
  // --> if (!firebase.apps.length) {}
  useMemo(() => {
    if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } }, []);

  useEffect(() => {
    listenToAuthStateChange();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header signedIn={!!user} />
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

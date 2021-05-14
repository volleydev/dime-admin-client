import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/header";
import { AuthPage } from "./pages/auth";
import { MenusPage } from "./pages/menus";
import { ExtrasPage } from "./pages/extras";
import { ItemsPage } from "./pages/items";
import { Menu } from "./components/list/menu";
import { listenToAuthStateChange, useAuthUser } from "./services/auth";

import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./firebaseConfig.json";
import { useEffect, useMemo } from "react";
import { Modal } from "./components/mechanics/modal";

const App = () => {
  const user = useAuthUser();

  // hier folgendes eingefügt, da er mir nen fehlehr geschmissen hat
  // --> if (!firebase.apps.length) {}
  useMemo(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  useEffect(() => {
    listenToAuthStateChange();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header signedIn={!!user} />
        {!user ? (
          <>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/auth/:type" component={AuthPage} />
          </>
        ) : (
          <>
            <Route exact path="/menus" component={MenusPage} />
            <Route exact path="/items" component={ItemsPage} />
            <Route exact path="/extras" component={ExtrasPage} />
            <Route exact path="/list/menu/:id" component={Menu} />

            {/* um props an die component in der Route zu geben: */}
            {/* <Route exact path="/menus" component={(props) => <MenusPage {...props} user={user} /> }/>  */}
            {/* <Route exact path="/profile" component={Proil} /> */}
          </>
        )}
        <Modal />
      </BrowserRouter>
    </div>
  );
};

export default App;


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

}

export default App;

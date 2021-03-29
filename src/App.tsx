import { BrowserRouter, Route } from "react-router-dom";

import { AuthPage } from "./pages/auth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/auth/:type" component={AuthPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;

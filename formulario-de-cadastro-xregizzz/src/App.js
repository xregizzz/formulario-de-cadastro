import "./App.css";
import { Switch, Route } from "react-router-dom";

import Form from "./components/Form";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/logedIn/:name">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

import { Main } from "../Main/Main"
import React from "react";
import { Route, Switch, useHistory, useLocation, Redirect } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="app">
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
        </Switch>
    </div>
  );
}

export default App
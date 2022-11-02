import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
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
        <Route exact path="/movies">
          <Movies/>
        </Route>
      </Switch>
    </div>
  );
}

export default App
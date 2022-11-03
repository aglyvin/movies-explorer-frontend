import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import React from "react";
import { Route, Routes, useHistory, useLocation, Redirect } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/movies" element={<Movies/>}/>
      </Routes>
    </div>
  );
}

export default App
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" name="Home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

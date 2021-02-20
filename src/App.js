import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./views/Landing";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/:id", "/"]} name="Home" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

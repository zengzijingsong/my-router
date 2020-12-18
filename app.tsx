import React from "react";
import { Router, Route } from "./my-router";
import A from "./src/a";
import B from "./src/b";

const App = () => (
  <Router>
    <Route path="/a" component={A} />
    <Route path="/b" component={B} />
  </Router>
);

export default App;

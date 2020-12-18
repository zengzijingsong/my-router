import React from "react";
import { Router, Route } from "./my-router";
import A from "./src/a";
import B from "./src/b";
import C from "./src/c";

const App = () => (
  <Router>
    <Route path="/a" component={A} exact />
    <Route path="/b" component={B} />
    <Route path="/c/:id" component={C} exact />
  </Router>
);

export default App;

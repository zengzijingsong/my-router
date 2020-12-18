import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(<App />, document.getElementById("root"));

// @ts-ignore: Unreachable code error
if (import.meta.hot) {
  // @ts-ignore: Unreachable code error
  import.meta.hot.accept();
}

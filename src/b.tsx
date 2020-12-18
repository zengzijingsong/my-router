import React from "react";
import history from "../my-history";

export default () => (
  <>
    <p>This is component b</p>
    <p onClick={() => history.push("/a")}>Click to jump to a</p>
    <p onClick={() => history.push("/c/test")}>Click to jump to c/:id</p>
  </>
);

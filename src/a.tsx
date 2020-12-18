import React from "react";
import history from "../my-history";

export default () => (
  <>
    <p>This is component a</p>
    <p onClick={() => history.push("/b")}>Click to jump to b</p>
  </>
);

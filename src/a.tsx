import React from "react";
import history from "../my-history";
import { Link } from "../my-router";

export default () => (
  <>
    <p>This is component a</p>
    <p onClick={() => history.push("/b")}>Click to jump to b</p>
    <Link to="b">This is from Link</Link>
  </>
);

import React from "react";
import history, { useParams } from "../my-history";

export default () => {
  const params = useParams<{ id: string }>();
  return (
    <>
      <p>This is component c</p>
      <p onClick={() => history.push("/a")}>Click to jump to a</p>
      <p>This is C,params is {params.id}</p>
    </>
  );
};

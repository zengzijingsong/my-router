import React, { useEffect, useState } from "react";
import history from "./my-history";
import { matchPath, compilePath } from "./lib";

export const Router = (props) => {
  useEffect(() => {
    window.onpopstate = function () {
      console.log(2323);
    };
  }, []);
  const Child = props.children;
  return <p>{props.children}</p>;
};

export const Switch = () => {};

interface IRouteProps {
  path: string;
  component?: () => JSX.Element;
  render?: () => JSX.Element;
  exact: boolean;
  strict: boolean;
  sensitive: boolean;
}
export const Route = (props: IRouteProps) => {
  const { path, component, render, exact, strict, sensitive } = props;
  const [match, setMatch] = useState(false);
  const pathReAndKeys = compilePath(path, { exact, strict, sensitive });
  useEffect(
    () =>
      history.listen(() => {
        const pathname = location.pathname;
        debugger;
        // setMatch(matchPath(pathname, props, pathReAndKeys));
      }),
    []
  );

  const getRender = React.useCallback(() => {
    if (component) {
      const Comp = component;
      return <Comp />;
    }
    if (render) {
      return render();
    }
  }, []);

  return match && getRender();
};

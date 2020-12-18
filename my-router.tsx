import React, { useEffect, useState } from "react";
import history from "./my-history";
import { matchPath, compilePath } from "./lib";

export const Router = (props) => {
  useEffect(() => {
    history.notifyAll();
  }, []);
  return <>{props.children}</>;
};

export const Switch = () => {};

interface IRouteProps {
  path: string;
  component?: () => JSX.Element;
  render?: () => JSX.Element;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
}
export const Route = ({
  path,
  component,
  render,
  exact = false,
  strict = false,
  sensitive = false,
}: IRouteProps) => {
  const [match, setMatch] = useState(false);
  const pathReAndKeys = compilePath(path, { exact, strict, sensitive });
  useEffect(
    () =>
      history.listen(() => {
        const pathname = location.pathname;
        setMatch(
          !!matchPath(
            pathname,
            { path, component, render, exact, strict, sensitive },
            pathReAndKeys
          )
        );
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

import React, { useEffect, useState } from "react";
import history from "./my-history";
import { matchPath, compilePath } from "./lib";

export const Router = (props) => {
  useEffect(() => {
    history.notifyAll();
    window.onpopstate = function () {
      history.notifyAll();
    };
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
        const a = matchPath(
          pathname,
          { path, component, render, exact, strict, sensitive },
          pathReAndKeys
        );
        if (a) {
          history.currentParams = a.params;
        }
        setMatch(!!a);
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

export const Link = (props: {
  to: string;
  onClick?: () => void;
  children?: JSX.Element | string | number;
}) => {
  const handleClick = (e: React.MouseEvent) => {
    props.onClick && props.onClick();
    e.preventDefault();
    history.push(props.to);
  };
  return (
    <a {...props} onClick={handleClick}>
      {props.children}
    </a>
  );
};

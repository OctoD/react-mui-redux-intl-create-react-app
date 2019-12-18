import React from "react";
import { useDispatch } from "react-redux";
import actions from "@actions";

const hour = 1000 * 60 * 60;

export default function withUserSession<T>(
  Component: React.ComponentType<T>
): React.ComponentType<T> {
  return (props: T) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
      actions.user.checkSigninState()(dispatch);
      setInterval(() => actions.user.checkSigninState()(dispatch), hour);
    }, [dispatch]);

    return <Component {...props} />;
  };
}

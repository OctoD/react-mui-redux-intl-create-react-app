import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Redirect, Switch, Route } from "react-router-dom";
import withUserSession from "@hocs/withUserSession";
import { ApplicationState } from "@state";
import * as routes from "../routes";

function selector(state: ApplicationState) {
  return state.user.checkingAuthState;
}

function RouteMapper() {
  const checkingState = useSelector(selector);

  if (checkingState) {
    return null;
  }

  const LazyAccount = lazy(() => import("./Account"));
  const LazyEula = lazy(() => import("./Eula"));

  return (
    <Switch>
      <Route path={routes.account.account}>
        <Suspense fallback={null}>
          <LazyAccount />
        </Suspense>
      </Route>
      <Route path={routes.eula.eula}>
        <Suspense fallback={null}>
          <LazyEula />
        </Suspense>
      </Route>
      <Redirect to={routes.account.account} />
    </Switch>
  );
}

export default withUserSession(RouteMapper);

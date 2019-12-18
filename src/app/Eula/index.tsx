import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import * as routes from "./routes";

export default function Eula() {
  return (
    <Route
      path={routes.eula}
      render={props => (
        <Switch location={props.location} key={props.location.pathname}>
          <Route exact path={routes.conditions}>
            conditions
          </Route>
          <Route exact path={routes.privacy}>
            privacy
          </Route>
          <Route exact path={routes.terms}>
            terms
          </Route>
          <Redirect to="/" />
        </Switch>
      )}
    />
  );
}

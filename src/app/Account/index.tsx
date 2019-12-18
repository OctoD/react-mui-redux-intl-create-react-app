import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import SetSid from "./components/SetSid";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import * as routes from "./routes";
import { ApplicationState } from "@state";
import { useSelector } from "react-redux";

function selector(state: ApplicationState) {
  const signedIn = state.user.signedIn;

  return { signedIn };
}

function AccountRouting() {
  const { signedIn } = useSelector(selector);

  return (
    <Switch>
      <Route component={SetSid} path={routes.signcallback} />
      {!signedIn && (
        <Route exact path={routes.signin}>
          <SignIn />
        </Route>
      )}
      {!signedIn && (
        <Route exact path={routes.signup}>
          <SignUp />
        </Route>
      )}
      {!signedIn && <Redirect exact from={routes.account} to={routes.signin} />}
    </Switch>
  );
}

export default withRouter(AccountRouting);

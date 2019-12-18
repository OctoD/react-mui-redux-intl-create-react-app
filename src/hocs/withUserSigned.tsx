import React from "react";
import { ApplicationState } from "@state";
import { SimpleHoc } from "../types";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const withUserSignedIn = withUserSigned(true);
export const withUserSignedOut = withUserSigned(false);
export const withUserSignedInOrRedirect = withUserSigned(true, true);
export const withUserSignedOutOrRedirect = withUserSigned(false, true);

function selector(state: ApplicationState) {
  return {
    signedIn: state.user.signedIn
  };
}

export default function withUserSigned(
  signedIn: boolean = true,
  redirect: boolean = false
): SimpleHoc {
  return Component => {
    return props => {
      const state = useSelector(selector);
      return signedIn === state.signedIn ? (
        <Component {...props} />
      ) : redirect ? (
        <Redirect to="/" />
      ) : null;
    };
  };
}

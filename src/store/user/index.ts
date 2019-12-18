import * as actions from "./actions";
import aar from "redux-aar";

export interface IUser {
  auth0tokens: auth0.Auth0DecodedHash | null;
  checkingAuthState: boolean;
  signedIn: boolean;
  user: auth0.Auth0UserProfile | null;
  waitingForCredentialsCheck: boolean;
}

function getInitialState(): IUser {
  return {
    auth0tokens: null,
    checkingAuthState: true,
    signedIn: false,
    user: null,
    waitingForCredentialsCheck: true
  };
}

const reducer = aar.createReducer(getInitialState());

reducer.on(actions.checkingAuthState, (state, checkingAuthState) => ({
  ...state,
  checkingAuthState
}));

reducer.on(actions.setUser, (state, user) => ({ ...state, user }));

reducer.on(actions.signedIn, (state, auth0tokens) => ({
  ...state,
  auth0tokens,
  signedIn: true
}));

reducer.on(actions.signedOut, state => ({
  ...state,
  auth0tokens: null,
  signedIn: false
}));

export default reducer.reduce();

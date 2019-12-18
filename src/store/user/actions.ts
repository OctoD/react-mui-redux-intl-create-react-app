import * as auth from "@sdk/auth";
import { TryCatchAsync, Maybe } from "tiinvo";
import { Dispatch } from "redux";
import aar from "redux-aar";

const createAction = aar.prefix("user");

export type Social = "google";

export const credentialsChecked = createAction("credentialsChecked");

export const checkingAuthState = createAction<boolean>("checkingAuthState");

export const setUser = createAction<auth0.Auth0UserProfile>("setUser");

export const signedIn = createAction<auth0.Auth0DecodedHash | null>("signedIn");

export const signedOut = createAction("signedOut");

/**
 *
 *
 * @export
 * @returns {action.ActionDispatcher<boolean>}
 */
export function callback() {
  const handleError = (dispatch: Dispatch) => (error: any) => {
    return false;
  };

  return async (dispatch: Dispatch): Promise<boolean> => {
    const result = await TryCatchAsync(auth.callback);

    return result.mapOrElse(
      async error => handleError(dispatch)(error),
      async result =>
        Maybe(result).cata({
          Nothing: async () => false,
          Just: async () => {
            const userinforesult = await TryCatchAsync(
              auth.getUserInfo,
              result!.accessToken!
            );

            return userinforesult.mapOrElse(handleError(dispatch), userInfo => {
              dispatch(setUser(userInfo!));
              dispatch(signedIn(result as never));
              return true;
            });
          }
        })
    );
  };
}

/**
 *
 *
 * @export
 * @returns {action.ActionDispatcher<any>}
 */
export function checkSigninState() {
  return async (dispatch: Dispatch) => {
    dispatch(checkingAuthState(true));

    const result = await TryCatchAsync(auth.renewSession);
    const returnvalue = result.mapOrElse(
      () => false,
      user => {
        // todo: retrieve id token please
        dispatch(setUser(user as any));
        dispatch(signedIn(null as never));
        return true;
      }
    );

    dispatch(checkingAuthState(false));

    return returnvalue;
  };
}

/**
 *
 *
 * @export
 * @param {string} email
 * @param {string} password
 * @returns {action.ActionDispatcher}
 */
export function signIn(email: string, password: string) {
  return async (dispatch: Dispatch) => {
    const result = await TryCatchAsync(auth.loginUserPass, email, password);
    result.mapOrElse(
      error => error,
      result => result
    );
  };
}

/**
 *
 *
 * @export
 * @param {Social} social
 * @returns
 */
export function signInWithSocial(social: Social) {
  switch (social) {
    case "google":
      return auth.loginGoogle();
    default:
      throw new Error(`${social} is not a valid social`);
  }
}

/**
 *
 *
 * @export
 * @returns {action.ActionDispatcher}
 */
export function signOut() {
  return async (dispatch: Dispatch) => {
    await auth.logout();

    dispatch(signedOut());
  };
}

export function signUp(email: string, password: string) {
  return async (dispatch: Dispatch) => {
    const result = await TryCatchAsync(auth.register, email, password);
    result.mapOrElse(
      error => error,
      result => result
    );
  };
}

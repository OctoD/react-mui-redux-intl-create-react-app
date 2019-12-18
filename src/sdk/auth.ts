import Auth0 from "auth0-js";
import sdk from ".";

/**
 *
 *
 * @export
 * @returns {Auth0.AuthOptions}
 */
export function configuration(): Auth0.AuthOptions {
  const options = {
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URI,
    responseType: "token id_token",
    scope: ["openid", "profile", "email"].join(" ")
  } as Auth0.AuthOptions;

  return options as any;
}

/**
 *
 *
 * @export
 * @returns {Auth0.WebAuth}
 */
export function client(): Auth0.WebAuth {
  return new Auth0.WebAuth(configuration());
}

/**
 *
 *
 * @export
 * @returns {(Promise<Auth0.Auth0DecodedHash | null>)}
 */
export function callback(): Promise<Auth0.Auth0DecodedHash | null> {
  return new Promise((resolve, reject) => {
    client().parseHash((error, decodedHash) => {
      if (error) {
        reject(error.errorDescription);
      } else {
        resolve(decodedHash);
      }
    });
  });
}

/**
 *
 *
 * @export
 * @param {string} accessToken
 * @returns
 */
export function getUserInfo(accessToken: string) {
  return new Promise<auth0.Auth0UserProfile>((resolve, reject) => {
    client().client.userInfo(accessToken, (userInfoError, userInfo) =>
      userInfoError ? reject(userInfoError.description) : resolve(userInfo)
    );
  });
}

/**
 *
 *
 * @export
 */
export function loginGoogle() {
  client().authorize({ connection: "google-oauth2" });
}

/**
 *
 *
 * @export
 * @param {string} username
 * @param {string} password
 * @returns
 */
export function loginUserPass(username: string, password: string) {
  return new Promise((resolve, reject) => {
    const cfg = configuration();

    client().login(
      {
        audience: cfg.audience!,
        clientID: cfg.clientID,
        domain: cfg.domain,
        password,
        realm: "Username-Password-Authentication",
        redirectUri: cfg.redirectUri,
        responseType: cfg.responseType,
        scope: cfg.scope!,
        username
      },
      (error, result) => (error ? reject(error) : resolve(result))
    );
  });
}

/**
 *
 *
 * @export
 */
export async function logout() {
  client().logout(configuration());
}

/**
 *
 *
 * @export
 * @param {string} email
 * @param {string} password
 * @returns
 */
export function register(email: string, password: string) {
  return new Promise((resolve, reject) => {
    client().redirect.signupAndLogin(
      {
        email,
        password,
        connection: "Username-Password-Authentication"
      },
      (error, result) => (error ? reject(error) : resolve(result))
    );
  });
}

/**
 *
 *
 * @export
 * @returns
 */
export function renewSession() {
  return new Promise((resolve, reject) => {
    client().checkSession(configuration(), (sessionError, session) => {
      if (sessionError) {
        return reject(sessionError.description);
      }

      sdk.api.settoken(session.accessToken);

      return getUserInfo(session.accessToken)
        .then(resolve)
        .catch(reject);
    });
  });
}

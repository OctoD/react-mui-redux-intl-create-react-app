import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import AppName from "@components/AppName";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Theme } from "@material-ui/core";
import { ApplicationState } from "@state";
import { useSelector } from "react-redux";
import classNames from "classnames";

const useStyles = makeStyles((theme: Theme) => ({
  SplashScreen: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexFlow: "column",
    height: "100%",
    justifyContent: "center",
    left: 0,
    position: "fixed",
    top: 0,
    transition: [
      "opacity 480ms ease-in",
      "transform 360ms ease-in-out",
      "z-index 0ms linear 500ms"
    ].join(),
    zIndex: 10 ** 3,
    width: "100%"
  },
  SplashScreenContent: {
    display: "flex",
    flexFlow: "column"
  },
  SplashScreenHidden: {
    opacity: 0,
    transform: "scale(1.1)",
    zIndex: -1
  }
}));

function selector(state: ApplicationState) {
  const checkingAuthState = state.user.checkingAuthState;
  const signedIn = state.user.signedIn;
  return checkingAuthState ? checkingAuthState : signedIn;
}

export default function SplashScreen() {
  const styles = useStyles();
  const visible = useSelector(selector);

  return (
    <div
      className={classNames(styles.SplashScreen, {
        [styles.SplashScreenHidden]: !visible
      })}
    >
      <div className={styles.SplashScreenContent}>
        <AppName />
        <CircularProgress />
      </div>
    </div>
  );
}

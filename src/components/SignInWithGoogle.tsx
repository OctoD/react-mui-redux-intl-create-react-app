// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import React from "react";
import { FormattedMessage } from "react-intl";
import actions from "@actions";

const useStyles = makeStyles({
  GoogleButton: {
    backgroundColor: `#4285f4`,
    color: `#fff`
  },
  GoogleIcon: {
    marginRight: 8
  }
});

export default function SignInWithGoogle() {
  const classes = useStyles();

  return (
    <Button
      className={classes.GoogleButton}
      onClick={() => actions.user.signInWithSocial("google")}
    >
      {/* <FontAwesomeIcon className={classes.GoogleIcon} icon="google" /> */}
      <FormattedMessage
        defaultMessage="Sign in with google"
        id="components.SignInWithGoogle.text"
      />
    </Button>
  );
}

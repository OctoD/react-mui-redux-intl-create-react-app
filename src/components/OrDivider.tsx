import React from "react";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import { FormattedMessage } from "react-intl";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Divider: {
      background: `linear-gradient(0deg, transparent 50%, ${theme.palette.grey[500]}, transparent calc(50% + 1px))`,
      textAlign: "center"
    },
    DividerText: {
      backgroundColor: theme.palette.background.default,
      display: "inline-block",
      padding: "2rem .5rem",
      marginTop: -4
    }
  })
);

export default function OrDivider() {
  const classes = useStyles();

  return (
    <div className={classes.Divider}>
      <span className={classes.DividerText}>
        <FormattedMessage defaultMessage="or" id="components.OrDivider.text" />
      </span>
    </div>
  );
}

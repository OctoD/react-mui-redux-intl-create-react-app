import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export interface ISubSectionTitleProps {
  children: React.ReactNode;
}

const useCss = makeStyles({
  root: {
    opacity: 0.89
  }
});

export default function SubSectionTitle(props: ISubSectionTitleProps) {
  const classes = useCss();

  return (
    <Typography className={classes.root} color="inherit" variant="h6">
      {props.children}
    </Typography>
  );
}

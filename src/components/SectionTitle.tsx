import React from "react";
import { Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

export interface ISectionTitleProps {
  children: React.ReactNode;
}

const useCss = makeStyles(theme => ({
  SectionTitle: {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.divider,
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    opacity: 0.54
  }
}));

export default function SectionTitle(props: ISectionTitleProps) {
  const classes = useCss();

  return (
    <Typography className={classes.SectionTitle} color="inherit" variant="h4">
      {props.children}
    </Typography>
  );
}

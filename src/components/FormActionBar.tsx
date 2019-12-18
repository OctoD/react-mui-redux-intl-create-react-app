import React from "react";
import clsx from "clsx";
import { useTheme, makeStyles } from "@material-ui/core/styles";

export interface IFormActionBarProps {
  children?: React.ReactNode;
}

const useCss = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "row",
    marginTop: theme.spacing(2),
    justifyContent: "flex-end"
  },
  rootrtl: {
    flexFlow: "row-reverse",
    justifyContent: "flex-start"
  }
}));

export default function FormActionBar(props: IFormActionBarProps) {
  const classes = useCss();
  const theme = useTheme();

  return (
    <div
      className={clsx(
        classes.root,
        theme.direction === "rtl" && classes.rootrtl
      )}
    >
      {props.children}
    </div>
  );
}

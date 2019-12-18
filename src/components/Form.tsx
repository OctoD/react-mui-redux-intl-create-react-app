import React from "react";
import Paper from "@material-ui/core/Paper";
import SectionTitle from "@components/SectionTitle";
import FormGroup from "@material-ui/core/FormGroup";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";

export interface IFormProps {
  children?: React.ReactNode;
  centered?: boolean;
  title?: React.ReactNode;
}

const useCss = makeStyles(theme => ({
  form: {},
  formCentered: {
    margin: "0 auto",
    maxWidth: theme.breakpoints.width("sm")
  },
  paper: {
    padding: theme.spacing(4, 3)
  }
}));

export default function Form(props: IFormProps) {
  const classes = useCss();
  const { children, title } = props;

  return (
    <Paper
      className={clsx(classes.paper, props.centered && classes.formCentered)}
    >
      <FormGroup className={classes.form}>
        {title && <SectionTitle>{title}</SectionTitle>}
        {children}
      </FormGroup>
    </Paper>
  );
}

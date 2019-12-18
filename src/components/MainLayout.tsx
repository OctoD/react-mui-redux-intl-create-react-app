import Container from "@material-ui/core/Container";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

export interface IMainLayout {
  children: React.ReactNode;
}

export function withMainLayout<T>(
  Component: React.ComponentType<T>
): React.ComponentType<T> {
  return (props: T) => (
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  );
}

const useCss = makeStyles(theme => ({
  MainLayout: {
    paddingTop: theme.spacing(4)
  }
}));

export default function MainLayout(props: IMainLayout) {
  const classes = useCss();
  return (
    <Container className={classes.MainLayout} maxWidth="lg">
      {props.children}
    </Container>
  );
}

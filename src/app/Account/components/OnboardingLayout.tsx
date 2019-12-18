import React from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";

export interface IOnboardingLayout {
  children: React.ReactNode;
}

export function withOnboardingLayout<T>(
  Component: React.ComponentType<T>
): React.ComponentType<T> {
  return (props: T) => (
    <OnboardingLayout>
      <Component {...props} />
    </OnboardingLayout>
  );
}

const useCss = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    minHeight: "100vh"
  }
});

export default function OnboardingLayout(props: IOnboardingLayout) {
  const classes = useCss();
  return (
    <Container className={classes.root} maxWidth="xs">
      {props.children}
    </Container>
  );
}

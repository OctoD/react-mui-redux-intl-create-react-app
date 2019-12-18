import React from "react";
import { FormattedMessage } from "react-intl";
import { Typography } from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import * as routes from "../routes";

interface IEulaLinkProps {
  children: React.ReactNode;
  link: string;
}

const useStyles = makeStyles({
  EulaLink: {
    color: "inherit",
    fontWeight: 700,
    textDecoration: "none"
  }
});

function EulaLink(props: IEulaLinkProps) {
  const styles = useStyles();

  return (
    <a
      className={styles.EulaLink}
      href={props.link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.children}
    </a>
  );
}

export default function YouAgreeWithOurTerms() {
  return (
    <Typography component="div" variant="caption">
      <FormattedMessage
        defaultMessage="By signin in you agree both with our {terms} and our {conditions} and {privacy}."
        id="components.YouAgreeWithOurTerms.text"
        values={{
          conditions: EulaLink({
            children: (
              <FormattedMessage
                defaultMessage="terms"
                id="components.YouAgreeWithOurTerms.terms"
              />
            ),
            link: routes.eula.terms
          }),
          privacy: EulaLink({
            children: (
              <FormattedMessage
                defaultMessage="privacy policy"
                id="components.YouAgreeWithOurTerms.privacy"
              />
            ),
            link: routes.eula.privacy
          }),
          terms: EulaLink({
            children: (
              <FormattedMessage
                defaultMessage="conditions"
                id="components.YouAgreeWithOurTerms.conditions"
              />
            ),
            link: routes.eula.conditions
          })
        }}
      />
    </Typography>
  );
}

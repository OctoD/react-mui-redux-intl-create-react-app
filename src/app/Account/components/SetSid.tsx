import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import * as routes from "../../../routes";
import actions from "@actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export interface ISetSidProps {}

export default function SetSid(props: ISetSidProps) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    actions.user
      .callback()(dispatch)
      .then(() => {
        history.push(routes.root);
      });
  }, [history, dispatch]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h1">
          <FormattedMessage
            defaultMessage="Wait a sec"
            id="pages.Onboarding.SetSid.title"
          />
        </Typography>
      </Grid>
    </Grid>
  );
}

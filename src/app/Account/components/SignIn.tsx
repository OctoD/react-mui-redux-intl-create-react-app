import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import FormGroup from "@material-ui/core/FormGroup/FormGroup";
import { useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import AppName from "@components/AppName";
import OrDivider from "@components/OrDivider";
import SignInWithGoogle from "@components/SignInWithGoogle";
import YouAgreeWithOurTerms from "@components/YouAgreeWithOurTerms";
import { withOnboardingLayout } from "@domains/Account/components/OnboardingLayout";
import * as routes from "../routes";
import store from "@state";
import actions from "@actions";
import useOnboardingValidationSchema from "../hooks/useOnboardingValidation";

export interface ISignInProps {}

function SignIn(props: ISignInProps) {
  const history = useHistory();
  const validationSchema = useOnboardingValidationSchema();
  const style = { marginBottom: useTheme().spacing(2) };
  const form = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: values =>
      actions.user.signIn(values.email, values.password)(store.dispatch)
  });
  const formDidSubmit = form.submitCount > 0;

  return (
    <form onSubmit={form.handleSubmit}>
      <FormGroup>
        <Typography gutterBottom variant="h1">
          <AppName />
        </Typography>

        <SignInWithGoogle />

        <OrDivider />

        <TextField
          helperText={formDidSubmit && form.errors.email}
          error={formDidSubmit && !!form.errors.email}
          onChange={event => form.setFieldValue("email", event.target.value)}
          onKeyDown={event => event.keyCode === 13 && form.submitForm()}
          onSubmit={form.submitForm}
          label={
            <FormattedMessage
              defaultMessage="Email"
              id="containers.SignIn.email"
            />
          }
          name="email"
          type="email"
          value={form.values.email}
        />

        <TextField
          helperText={formDidSubmit && form.errors.password}
          error={formDidSubmit && !!form.errors.password}
          onChange={event => form.setFieldValue("password", event.target.value)}
          onKeyDown={event => event.keyCode === 13 && form.submitForm()}
          onSubmit={form.submitForm}
          label={
            <FormattedMessage
              defaultMessage="Password"
              id="containers.SignIn.Password"
            />
          }
          name="password"
          type="password"
          value={form.values.password}
        />

        <Button
          color="primary"
          disabled={form.isSubmitting}
          onClick={form.submitForm}
          variant="contained"
        >
          {form.isSubmitting && <CircularProgress color="inherit" />}
          <FormattedMessage
            defaultMessage="Sign in"
            id="containers.SignIn.SignIn"
          />
        </Button>

        <br style={style} />

        <Typography component="div" gutterBottom variant="caption">
          <FormattedMessage
            defaultMessage="Don't have an account?"
            id="containers.SignIn.DontHaveAnAccount"
          />
        </Typography>

        <Button
          color="primary"
          onClick={() => history.push(routes.signup)}
          variant="text"
        >
          <FormattedMessage
            defaultMessage="Sign up"
            id="containers.SignIn.SignUp"
          />
        </Button>

        <br style={style} />

        <YouAgreeWithOurTerms />
      </FormGroup>
    </form>
  );
}

export default withOnboardingLayout(SignIn);

import { useTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useFormik } from "formik";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import AppName from "@components/AppName";
import Checkbox from "@components/Checkbox";
import OrDivider from "@components/OrDivider";
import SignInWithGoogle from "@components/SignInWithGoogle";
import YouAgreeWithOurTerms from "@components/YouAgreeWithOurTerms";
import { withOnboardingLayout } from "@domains/Account/components/OnboardingLayout";
import * as routes from "../routes";
import store from "@state";
import actions from "@actions";
import useOnboardingValidationSchema from "../hooks/useOnboardingValidation";

export interface ISignUpProps {}

function SignUp(props: ISignUpProps) {
  const history = useHistory();
  const validationSchema = useOnboardingValidationSchema();
  const style = { marginBottom: useTheme().spacing(2) };
  const form = useFormik({
    initialValues: {
      email: "",
      eula: false,
      password: ""
    },
    validationSchema,
    onSubmit: values =>
      actions.user.signUp(values.email, values.password)(store.dispatch)
  });
  const formDidSubmit = form.submitCount > 0;

  return (
    <FormGroup>
      <Typography gutterBottom variant="h1">
        <AppName />
      </Typography>

      <TextField
        helperText={formDidSubmit && form.errors.email}
        error={formDidSubmit && !!form.errors.email}
        label={
          <FormattedMessage
            defaultMessage="Email"
            id="containers.SignUp.email"
          />
        }
        onChange={event => form.setFieldValue("email", event.target.value)}
        onKeyDown={event => event.keyCode === 13 && form.submitForm()}
        name="email"
        type="email"
        value={form.values.email}
      />

      <TextField
        helperText={formDidSubmit && form.errors.password}
        error={formDidSubmit && !!form.errors.email}
        label={
          <FormattedMessage
            defaultMessage="Password"
            id="containers.SignUp.Password"
          />
        }
        onChange={event => form.setFieldValue("password", event.target.value)}
        onKeyDown={event => event.keyCode === 13 && form.submitForm()}
        name="password"
        type="password"
        value={form.values.password}
      />

      <Checkbox
        checked={form.values.eula}
        onChange={event => form.setFieldValue("eula", event.target.checked)}
      >
        <FormattedMessage
          defaultMessage="Accept terms"
          id="containers.SignUp.AcceptTerms"
        />
      </Checkbox>

      <Button
        color="primary"
        disabled={!form.values.eula || form.isSubmitting}
        onClick={form.submitForm}
        variant="contained"
      >
        {form.isSubmitting && <CircularProgress color="inherit" />}
        <FormattedMessage
          defaultMessage="Sign in"
          id="containers.SignUp.SignUp"
        />
      </Button>

      <OrDivider />

      <SignInWithGoogle />

      <br style={style} />

      <YouAgreeWithOurTerms />

      <br style={style} />

      <Typography gutterBottom component="div" variant="caption">
        <FormattedMessage
          defaultMessage="Already have an account?"
          id="containers.SignIn.AlreadyHaveAnAccount"
        />
      </Typography>

      <br style={style} />

      <Button
        color="primary"
        onClick={() => history.push(routes.signin)}
        variant="text"
      >
        <FormattedMessage
          defaultMessage="Sign in"
          id="containers.SignUp.SignIn"
        />
      </Button>
    </FormGroup>
  );
}

export default withOnboardingLayout(SignUp);

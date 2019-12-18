import { useIntl, defineMessages } from "react-intl";
import * as yup from "yup";

const labels = defineMessages({
  emailFieldRequired: {
    defaultMessage: "Email is required",
    id: "containers.Onboarding.SignIn.email.required"
  },
  emailFieldInvalid: {
    defaultMessage: "This seems not to be a valid email",
    id: "containers.Onboarding.SignIn.email.invalid"
  },
  passwordFieldInvalid: {
    defaultMessage:
      "Must contain at least one uppercase, one lowercase and a number",
    id: "containers.Onboarding.SignIn.password.invalid"
  },
  passwordFieldRequired: {
    defaultMessage: "Password is required",
    id: "containers.Onboarding.SignIn.password.required"
  },
  passwordFieldTooShort: {
    defaultMessage: "Password is too short, it should be at least 8 char long",
    id: "containers.Onboarding.SignIn.password.tooshorty"
  }
});

export default function useOnboardingValidationSchema() {
  const intl = useIntl();

  return yup.object().shape({
    email: yup
      .string()
      .email(intl.formatMessage(labels.emailFieldInvalid))
      .required(intl.formatMessage(labels.emailFieldRequired)),
    password: yup
      .string()
      .required(intl.formatMessage(labels.passwordFieldRequired))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        intl.formatMessage(labels.passwordFieldInvalid)
      )
      .min(8, intl.formatMessage(labels.passwordFieldTooShort))
  });
}

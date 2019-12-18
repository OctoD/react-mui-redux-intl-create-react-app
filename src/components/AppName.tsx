import React from "react";
import { defineMessages, useIntl } from "react-intl";

const labels = defineMessages({
  appname: {
    defaultMessage: "YourApp",
    id: "components.AppName.text"
  }
});

export default function AppName() {
  const intl = useIntl();

  return <>{intl.formatMessage(labels.appname)}</>;
}

import React from "react";
import Button from "@material-ui/core/Button";
import { FormattedMessage } from "react-intl";
import { withUserSignedIn } from "@hocs/withUserSigned";
import useSignout from "@hooks/useSignOut";

export interface ILogoutButton {}

function LogoutButton(props: ILogoutButton) {
  const logout = useSignout();

  return (
    <Button onClick={logout}>
      <FormattedMessage
        defaultMessage="Logout"
        id="components.LogoutButton.text"
      />
    </Button>
  );
}

export default withUserSignedIn(LogoutButton);

import React from "react";
import Link from "@material-ui/core/Link";
import { FormattedMessage } from "react-intl";
import { withUserSignedIn } from "@hocs/withUserSigned";
import useSignout from "@hooks/useSignOut";

export interface ILogoutLinkProps {}

function LogoutLink(props: ILogoutLinkProps) {
  const logout = useSignout();

  return (
    <Link onClick={logout}>
      <FormattedMessage
        defaultMessage="Logout"
        id="components.LogoutLink.text"
      />
    </Link>
  );
}

export default withUserSignedIn(LogoutLink);

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { withUserSignedIn } from "@hocs/withUserSigned";
import useSignout from "@hooks/useSignOut";
import AppName from "./AppName";
import { FormattedMessage } from "react-intl";
import { useMediaQuery, IconButton } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import MenuIcon from "@material-ui/icons/Menu";
import useAside from "@hooks/useAside";

export interface IPersonaBarProps {}

const useCss = makeStyles({
  link: {
    color: "inherit",
    textDecoration: "none"
  },
  logo: {
    color: "#fff",
    flex: "1 0 auto"
  }
});

function PersonaBar(props: IPersonaBarProps) {
  const classes = useCss();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const aside = useAside();
  const history = useHistory();
  const signout = useSignout();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget as any);
  };
  const actionAndClose = (fn: () => any) => {
    return () => {
      fn();
      handleClose();
    };
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography className={classes.logo} component="h1" variant="h6">
          {isMobile && (
            <IconButton onClick={aside.toggle}>
              <MenuIcon />
            </IconButton>
          )}
          <Link className={classes.link} to="/">
            <AppName />
          </Link>
        </Typography>
        <Button onClick={handleClick}>Menu</Button>
        <Menu
          anchorEl={anchorEl}
          onBackdropClick={handleClose}
          open={Boolean(anchorEl)}
        >
          <MenuItem button onClick={signout}>
            <FormattedMessage
              defaultMessage="Sign out"
              id="components.PersonaBar.actions.signout"
            />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default withUserSignedIn(PersonaBar);

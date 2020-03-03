import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SyncIcon from "@material-ui/icons/Sync";
import EditIcon from "@material-ui/icons/Edit";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const useStyles = makeStyles(theme => ({
    title: {
      fontSize: "24px"
    },
    menuDrawer: {
      width: "90vw",
      border: "2px solid red"
    }
  }));

  const handleDrawer = evt => {
    evt.preventDefault();
    return evt.type === "keydown" && (evt.key === "Tab" || evt.key === "Shift")
      ? null
      : setDrawerOpen(!drawerOpen);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={handleDrawer} />
          </IconButton>
          <Typography variant="h1" className={classes.title}>
            Essentialism
          </Typography>
        </Toolbar>
      </AppBar>
      {drawerOpen && (
        <Drawer
          open={"left"}
          onClose={handleDrawer}
          classes={classes.menuDrawer}
        >
          <h2>Essentialism</h2>
          <NavList />
          {/* <p>Hello</p> */}
        </Drawer>
      )}
    </React.Fragment>
  );
};

const NavList = props => {
  return (
    <List>
      {[
        { link: "Login", icon: <SyncIcon /> },
        { link: "Register", icon: <EditIcon /> }
      ].map(({ link, icon }) => (
        <ListItem button key={link}>
          <ListItemIcon>{icon}</ListItemIcon>
          <NavLink to={`/${link}`}>
            <ListItemText>{link}</ListItemText>
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default NavBar;

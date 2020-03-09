import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Features/User/actions";
import { useHistory } from "react-router-dom";
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
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CancelIcon from "@material-ui/icons/Cancel";

import { NavLink } from "react-router-dom";

const NavBar = props => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

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
          <NavList isLoggedIn={isLoggedIn} setDrawerOpen={setDrawerOpen} />
        </Drawer>
      )}
    </React.Fragment>
  );
};

const NavList = props => {
  const loggedOutLinks = [
    { link: "Login", icon: <SyncIcon /> },
    { link: "Register", icon: <EditIcon /> }
  ];
  const loggedInLinks = [
    // {
    //   link: "Projects",
    //   icon: <CheckCircleOutlineIcon />
    // },
    // { link: "Values", icon: <FavoriteIcon /> }
  ];
  let linksList = [];

  props.isLoggedIn ? (linksList = loggedInLinks) : (linksList = loggedOutLinks);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = evt => {
    evt.preventDefault();
    dispatch(logoutUser);
    history.push("/login");
    props.setDrawerOpen(false);
  };

  return (
    <List>
      {linksList.map(({ link, icon, action }) => (
        <ListItem button key={link}>
          <ListItemIcon>{icon}</ListItemIcon>
          <NavLink to={`/${link}`}>
            <ListItemText>{link}</ListItemText>
          </NavLink>
        </ListItem>
      ))}
      {props.isLoggedIn ? (
        <ListItem onClick={handleLogout}>
          <ListItemIcon>
            <CancelIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      ) : null}
    </List>
  );
};

export default NavBar;

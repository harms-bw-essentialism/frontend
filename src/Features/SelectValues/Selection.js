import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectValue, toggleOtherValueInput, addOtherValue } from "./actions";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import theme from "../../App/theme";
import OtherForm from "./OtherForm";

const Selection = () => {
  const values = useSelector(state => state.values.values);
  const isOther = useSelector(state => state.values.isOther);

  const dispatch = useDispatch();

  const handleSelect = item => evt => {
    evt.preventDefault();
    dispatch(selectValue(item));
  };

  const toggleOther = bool => evt => {
    evt.preventDefault();
    dispatch(toggleOtherValueInput(!bool));
  };

  const addOther = value => evt => {
    evt.preventDefault();
  };

  const useStyles = makeStyles(them => ({
    root: {
      width: "100%",
      maxWidth: 360,
      margin: "0 auto",
      backgroundColor: theme.palette.background.paper
    },
    scroll: {
      height: "60vh",
      overflow: "scroll"
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <List className={classes.scroll}>
          {values.map(item => (
            <ListItem key={item.id} onClick={handleSelect(item)}>
              <ListItemText>{item.valueName}</ListItemText>
              <ListItemIcon>
                {item.selected ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </ListItemIcon>
            </ListItem>
          ))}
          <ListItem onClick={toggleOther(isOther)}>
            <ListItemText>Other</ListItemText>
            <ListItemIcon>
              {isOther ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </ListItemIcon>
          </ListItem>
          {isOther ? (
            <>
              <Divider /> <OtherForm />
            </>
          ) : null}
        </List>
      </div>
    </React.Fragment>
  );
};

export default Selection;

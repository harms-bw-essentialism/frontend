import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectValue } from "../../Redux/Actions";
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

const ValueSelection = () => {
  const values = useSelector(state => state.values.values);

  const dispatch = useDispatch();

  const handleSelect = item => evt => {
    evt.preventDefault();
    dispatch(selectValue(item));
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
    <div className={classes.root}>
      <h2>Select Values</h2>
      <List className={classes.scroll}>
        {values.map(item => (
          <ListItem key={item.id} onClick={handleSelect(item)}>
            <ListItemText>{item.name}</ListItemText>
            <ListItemIcon>
              {item.selected ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ValueSelection;

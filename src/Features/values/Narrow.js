import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { narrowValue } from "../../Redux/Actions";
import { withStyles, makeStyles } from "@material-ui/core";
import { Button, Menu, MenuItem, ListItemText } from "@material-ui/core";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const useStyles = makeStyles(theme => ({
  value: {
    margin: "10px"
  }
}));

const Narrow = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [valueOne, setValueOne] = useState({
    text: "Value 1",
    anchorEl: null
  });
  const [valueTwo, setValueTwo] = useState({
    text: "Value 2",
    anchorEl: null
  });
  const [valueThree, setValueThree] = useState({
    text: "Value 3",
    anchorEl: null
  });

  const selected = useSelector(state => state.values.selectedValues);
  const notNarrowed = useSelector(state => state.values.notNarrowedValues);

  const handleMenuOneOpen = evt => {
    evt.preventDefault();
    setValueOne({ ...valueOne, anchorEl: evt.currentTarget });
    dispatch(narrowValue);
  };
  const handleMenuTwoOpen = evt => {
    evt.preventDefault();
    setValueTwo({ ...valueTwo, anchorEl: evt.currentTarget });
  };
  const handleMenuThreeOpen = evt => {
    evt.preventDefault();
    setValueThree({ ...valueThree, anchorEl: evt.currentTarget });
  };

  const handleMenuOneClose = evt => {
    evt.preventDefault();
    setValueOne({ ...valueOne, anchorEl: null });
  };
  const handleMenuTwoClose = evt => {
    evt.preventDefault();
    setValueTwo({ ...valueTwo, anchorEl: null });
  };
  const handleMenuThreeClose = evt => {
    evt.preventDefault();
    setValueThree({ ...valueThree, anchorEl: null });
  };

  const handleMenuOneSelect = item => evt => {
    evt.preventDefault();
    setValueOne({
      ...valueOne,
      text: item.name,
      anchorEl: null
    });
    dispatch(narrowValue(item));
  };
  const handleMenuTwoSelect = item => evt => {
    evt.preventDefault();
    setValueTwo({
      ...valueOne,
      text: item.name,
      anchorEl: null
    });
    dispatch(narrowValue(item));
  };
  const handleMenuThreeSelect = item => evt => {
    evt.preventDefault();
    setValueThree({
      ...valueOne,
      text: item.name,
      anchorEl: null
    });
    dispatch(narrowValue(item));
  };

  return (
    <>
      <div className={classes.value}>
        <Button onClick={handleMenuOneOpen}>{valueOne.text}</Button>
        <StyledMenu
          anchorEl={valueOne.anchorEl}
          keepMounted
          open={Boolean(valueOne.anchorEl)}
          onClose={handleMenuOneClose}
        >
          {notNarrowed.map(item => (
            <StyledMenuItem onClick={handleMenuOneSelect(item)}>
              <ListItemText primary={item.name} />
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </div>
      <div className={classes.value}>
        <Button onClick={handleMenuTwoOpen}>{valueTwo.text}</Button>
        <StyledMenu
          anchorEl={valueTwo.anchorEl}
          keepMounted
          open={Boolean(valueTwo.anchorEl)}
          onClose={handleMenuTwoClose}
        >
          {notNarrowed.map(item => (
            <StyledMenuItem onClick={handleMenuTwoSelect(item)}>
              <ListItemText primary={item.name} />
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </div>
      <div className={classes.value}>
        <Button onClick={handleMenuThreeOpen}>{valueThree.text}</Button>
        <StyledMenu
          anchorEl={valueThree.anchorEl}
          keepMounted
          open={Boolean(valueThree.anchorEl)}
          onClose={handleMenuThreeClose}
        >
          {notNarrowed.map(item => (
            <StyledMenuItem onClick={handleMenuThreeSelect(item)}>
              <ListItemText primary={item.name} />
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </div>
    </>
  );
};

export default Narrow;

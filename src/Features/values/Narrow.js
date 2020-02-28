import React, { useState } from "react";
import { useSelector } from "react-redux";
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
  const notNarrowed = selected.filter(item =>
    !item.mostValued ? { ...item } : null
  );
  const narrowed = selected.filter(item =>
    item.mostValued ? { ...item } : null
  );

  const handleMenuOneOpen = evt => {
    evt.preventDefault();
    setValueOne({ ...valueOne, anchorEl: evt.currentTarget });
  };
  const handleMenuTwoOpen = evt => {
    evt.preventDefault();
    setValueTwo({ ...valueTwo, anchorEl: evt.currentTarget });
  };
  const handleMenuThreeOpen = evt => {
    evt.preventDefault();
    setValueThree({ ...valueThree, anchorEl: evt.currentTarget });
  };

  const handleClose = menuIndex => evt => {
    evt.preventDefault();
    switch (menuIndex) {
      case 0:
        setValueOne({ ...valueOne, anchorEl: null });
      case 1:
        setValueTwo({ ...valueTwo, anchorEl: null });
      case 2:
        setValueThree({ ...valueThree, anchorEl: null });
      default:
        break;
    }
  };

  const handleMenuOneSelect = evt => {
    evt.preventDefault();
    setValueOne({
      ...valueOne,
      text: evt.target.innerText,
      anchorEl: null
    });
  };
  const handleMenuTwoSelect = evt => {
    evt.preventDefault();
    setValueTwo({
      ...valueOne,
      text: evt.target.innerText,
      anchorEl: null
    });
  };
  const handleMenuThreeSelect = evt => {
    evt.preventDefault();
    setValueThree({
      ...valueOne,
      text: evt.target.innerText,
      anchorEl: null
    });
  };

  return (
    <>
      <div className={classes.value}>
        <Button onClick={handleMenuOneOpen}>{valueOne.text}</Button>
        <StyledMenu
          anchorEl={valueOne.anchorEl}
          keepMounted
          open={Boolean(valueOne.anchorEl)}
          onClose={handleClose(0)}
        >
          {notNarrowed.map(item => (
            <StyledMenuItem onClick={handleMenuOneSelect}>
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
          onClose={handleClose(1)}
        >
          {notNarrowed.map(item => (
            <StyledMenuItem onClick={handleMenuTwoSelect}>
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
          onClose={handleClose(2)}
        >
          {notNarrowed.map(item => (
            <StyledMenuItem onClick={handleMenuThreeSelect}>
              <ListItemText primary={item.name} />
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </div>
    </>
  );
};

export default Narrow;

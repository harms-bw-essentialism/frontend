import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
  Input
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectedTopThree } from "./actions";

const Narrow = () => {
  const dispatch = useDispatch();
  const values = useSelector(state => state.values.values);
  const userid = useSelector(state => state.user.user.userid);
  const selectedvalues = values.filter(item => {
    return item.selected ? item : null;
  });

  const [topThreeValues, setTopThreeValues] = useState({
    valueOne: { valueName: selectedvalues[0].valueName, userid },
    valueTwo: { valueName: selectedvalues[1].valueName, userid },
    valueThree: { valueName: selectedvalues[2].valueName, userid }
  });

  useEffect(() => {
    const topThreeArr = Object.values(topThreeValues);
    console.log(`topThreeArr: `, topThreeArr);
    dispatch(selectedTopThree(topThreeArr));
  }, [topThreeValues]);

  const handleChange = name => evt => {
    console.log(`hello`);
    setTopThreeValues({
      ...topThreeValues,
      [name]: { name: evt.target.value }
    });
  };

  return (
    <div>
      <FormControl>
        <InputLabel id="first-value">First Value</InputLabel>
        <NativeSelect
          value={topThreeValues.valueOne.valueName}
          labelId="first-value"
          onChange={handleChange("valueOne")}
        >
          {selectedvalues.map(item => (
            <option key={item.id} value={item.valueName}>
              {item.valueName}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>Select First Value</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel id="second-value">Second Value</InputLabel>
        <NativeSelect
          value={topThreeValues.valueTwo.valueName}
          labelId="second-value"
          onChange={handleChange("valueTwo")}
        >
          {selectedvalues.map(item => (
            <option key={item.id} value={item.valueName}>
              {item.valueName}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>Select Second Value</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel id="third-value">Third Value</InputLabel>
        <NativeSelect
          value={topThreeValues.valueThree.valueName}
          labelId="third-value"
          onChange={handleChange("valueThree")}
        >
          {selectedvalues.map(item => (
            <option key={item.id} value={item.valueName}>
              {item.valueName}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>Select Third Value</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Narrow;

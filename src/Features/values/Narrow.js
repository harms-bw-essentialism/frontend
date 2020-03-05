import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
  Input
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectTopThree } from "../../Redux/Actions";

const Narrow = () => {
  const dispatch = useDispatch();
  const values = useSelector(state => state.values.values);
  const selectedvalues = values.filter(item => {
    return item.selected ? item : null;
  });

  const [topThreeValues, setTopThreeValues] = useState({
    valueOne: { name: selectedvalues[0].name },
    valueTwo: { name: selectedvalues[1].name },
    valueThree: { name: selectedvalues[2].name }
  });

  useEffect(() => {
    const topThreeArr = Object.values(topThreeValues);
    console.log(`topThreeArr: `, topThreeArr);
    dispatch(selectTopThree(topThreeArr));
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
          value={topThreeValues.valueOne.name}
          labelId="first-value"
          onChange={handleChange("valueOne")}
        >
          {selectedvalues.map(item => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>Select First Value</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel id="second-value">Second Value</InputLabel>
        <NativeSelect
          value={topThreeValues.valueTwo.name}
          labelId="second-value"
          onChange={handleChange("valueTwo")}
        >
          {selectedvalues.map(item => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>Select Second Value</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel id="third-value">Third Value</InputLabel>
        <NativeSelect
          value={topThreeValues.valueThree.name}
          labelId="third-value"
          onChange={handleChange("valueThree")}
        >
          {selectedvalues.map(item => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText>Select Third Value</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Narrow;

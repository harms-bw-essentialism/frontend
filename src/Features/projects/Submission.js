import React from "react";
import { useSelector } from "react-redux";

function Submission() {
  const narrowedValues = useSelector(state => state.values.narrowedValues);

  return (
    <form>
      <label htmlFor="projectName">
        Project Name:
        <input type="text" name="projectName" id="projectName" />
      </label>
      <label htmlFor="projectValueAlignment">
        Project Value Alignment:
        {narrowedValues.map(value => (
          <select>{value.name}</select>
        ))}
      </label>
      <label htmlFor="projectDescription">
        Project Description:
        <textarea
          name="projectDescription"
          id="projectDescription"
          cols="30"
          rows="10"
        ></textarea>
      </label>
      <button type="submit">Add Project</button>
    </form>
  );
}

export default Submission;

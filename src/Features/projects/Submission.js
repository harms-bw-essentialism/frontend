import React from "react";
import { useSelector } from "react-redux";

function Submission() {
  const values = useSelector(state => state.values.values);

  return <form></form>;
}

export default Submission;

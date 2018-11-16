import React from "react";
import { connect } from "react-redux";
import { getPlace } from "../actions";
import { Text } from "../styled";

const Footer = ({ getPlace, pos }) => {
  return <Text style={{textAlign: "center"}} onClick={() => getPlace(pos)}>Try again</Text>;
};

export default connect(
  null,
  { getPlace }
)(Footer);

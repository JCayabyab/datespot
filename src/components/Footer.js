import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlace } from "../actions";
import { MenuItem, Text } from "../styled";

class Footer extends Component {
  componentDidMount() {
    this.props.getPlace(this.props.pos);
  }

  render() {
    const { getPlace, pos } = this.props;
    return (
      <MenuItem onClick={() => getPlace(pos)}>
        <Text>Try again</Text>
      </MenuItem>
    );
  }
}

export default connect(
  null,
  { getPlace }
)(Footer);

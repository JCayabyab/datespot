import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlace } from "../actions";
import { MenuItem, Text, Row, Badge } from "../styled";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const FooterWrapper = styled(Row)`
  height: 60px;

  @media (max-width: 768px) {
    height: 50px;
    align-items: center;
  }
`;

class Footer extends Component {
  componentDidMount() {
    // this.props.getPlace(this.props.pos);
  }

  render() {
    const { getPlace, pos } = this.props;
    return (
      <FooterWrapper>
        {/* <MenuItem style={{flex: 1}} onClick={() => getPlace(pos)}>
          <Text>Try again</Text>
        </MenuItem> */}
        <Dropdown
          title="Not your cup of tea?"
          getPlace={(key) => getPlace(pos, key)}
        />
        <Badge>
          <small>Jofred Cayabyab &copy; 2018</small>
        </Badge>
      </FooterWrapper>
    );
  }
}

export default connect(
  null,
  { getPlace }
)(Footer);

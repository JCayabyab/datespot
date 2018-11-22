import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlace } from "../actions";
import { MenuItem, Text, Row, Badge } from "../styled";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import OptionsList from "../utils/OptionsList";
import Media from "react-media";

const FooterWrapper = styled(Row)`
  height: 60px;
  transition: height 0.2s ease-out;

  @media (max-width: 768px) {
    height: 50px;
    align-items: center;
  }
`;

const Option = styled(MenuItem)`
  flex: 1;
`;

class Footer extends Component {
  componentDidMount() {
    this.props.getPlace(this.props.pos, "food");
  }

  render() {
    const { getPlace, pos } = this.props;
    return (
      <FooterWrapper>
        <Media query="(max-width: 1000px)">
          {matches =>
            matches ? (
              <Dropdown
                title="Not your cup of tea?"
                getPlace={key => getPlace(pos, key)}
              />
            ) : (
              <Row style={{ flex: 1, alignSelf: "stretch" }}>
                {OptionsList.map(({title, key}) => (
                  <Option key={key} onClick={() => getPlace(pos, key)}>
                    <Text>{title}</Text>
                  </Option>
                ))}
              </Row>
            )
          }
        </Media>
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

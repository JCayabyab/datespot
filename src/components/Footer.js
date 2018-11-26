import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { getPlace } from "../actions";
import { Text, Row, Badge, Options, Option, GitHubLink } from "../styled";
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

class Footer extends Component {
  componentDidMount() {
    this.props.getPlace(this.props.pos, "food");
  }

  render() {
    const { pos } = this.props;
    // debounce to prevent multiple calls very quickly
    const getPlace = _.debounce(this.props.getPlace, 700, {
      leading: true,
      trailing: false
    });
    return (
      <FooterWrapper>
        <GitHubLink
          href="https://github.com/JCayabyab/datespot"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github" />
        </GitHubLink>
        <Media query="(max-width: 1000px)">
          {matches =>
            matches ? (
              <Dropdown
                title="Not your cup of tea?"
                getPlace={getPlace}
                pos={pos}
              />
            ) : (
              <Options>
                {OptionsList.map(({ title, key }) => (
                  <Option key={key} onClick={() => getPlace(pos, key)}>
                    <Text>{title}</Text>
                  </Option>
                ))}
              </Options>
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

import React, { Component } from "react";
import onClickOutside from "react-onclickoutside"; // npm i react-onclickoutside
import styled from "styled-components";
import { Text } from "../styled";
import OptionsList from "../utils/OptionsList";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggleList = this.toggleList.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside() {
    this.setState({ isOpen: false });
  }

  toggleList() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { title, getPlace, pos } = this.props;
    const { isOpen } = this.state;

    return (
      <DropdownWrapper>
        <Header onClick={() => this.toggleList()}>
          <Title>{title}</Title>
          <Icon className={`fas fa-angle-down`} isOpen={isOpen} />
        </Header>

        {isOpen && (
          <List list={OptionsList}>
            {OptionsList.map(({ title, key }) => (
              <ListItem
                key={key}
                onClick={() => {
                  getPlace(pos, key);
                  this.setState({ isOpen: false });
                }}
              >
                <Text>{title}</Text>
              </ListItem>
            ))}
          </List>
        )}
      </DropdownWrapper>
    );
  }
}

const DropdownWrapper = styled.div`
  position: relative;
  flex: 1;
  align-self: stretch;
`;

const Title = styled(Text)`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex: 1;
`;

const Header = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  color: white;
  background-color: #ef2525;
  cursor: pointer;
  height: 100%;
  width: 100%;

  &:hover,
  :focus {
    color: #fff;
    background-color: #df1515;
    text-decoration: none;
    outline: 0;
  }

  &.active,
  :active {
    background-color: #cf0505;
  }
`;
const Icon = styled.i`
  margin: 0px 7px;
  transform: rotate(${props => (props.isOpen ? 180 : 0)}deg);
  transition: transform 0.2s ease-out;
`;
const List = styled.div`
  position: absolute;
  top: ${props =>
    props.list ? `-${props.list.length * (16 + 20 * 2 + 9)}px` : "100%"};
  left: 0;
  width: 100%;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;
const ListItem = styled.div`
  display: block;
  width: 100%;
  padding: 20px 1.5rem;
  clear: both;
  font-weight: 400;
  font-size: 16px;
  background-color: #ef2525;
  text-align: inherit;
  white-space: nowrap;
  border: 0;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover,
  :focus {
    background-color: #df1515;
  }

  &.active,
  :active {
    background-color: #cf0505;
  }
`;

export default onClickOutside(Dropdown);

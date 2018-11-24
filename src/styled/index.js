import styled from "styled-components";

export const LoadingIcon = styled.img`
  height: 50px;
  width: 50px;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  text-align: center;
  align-self: stretch;
  background-color: #ef2525;
  transition: background-color 0.15s linear;
  padding: 5px;

  ${props => (!props.disabled &&
    `cursor: pointer;
  &:hover,
  :focus {
    background-color: #df1515;
    text-decoration: none;
  }`)}
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Text = styled.div`
  font-family: "Quicksand", sans-serif;
  color: #fff;
  font-weight: bold;
  height: 100%;
  align-self: stretch;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Badge = styled.div`
  & > small {
    color: white;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    display: block;
  }
  padding: 0px 15px;
  @media (max-width: 768px) {
    display: none;
  }
`;

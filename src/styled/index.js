import styled from "styled-components";

export const LoadingIcon = styled.img`
  height: 80px;
  width: 80px;
  margin: 10px;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  text-align: center;
  align-self: stretch;
  background-color: #ef2525;
  transition: background-color 0.15s linear;
  padding: 5px;

  ${props =>
    !props.disabled &&
    `cursor: pointer;
    
    &:hover,
    :focus {
      background-color: #df1515;
      text-decoration: none;
    }`}
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

export const GitHubLink = styled.a`
  text-decoration: none;
  text-align: center;
  align-self: stretch;
  padding: 0px 7px;
  color: rgba(0, 0, 0, 0.1);
  font-size: 28pt;
  cursor: pointer;
  display: flex;
  align-items: center;

  & i {
    margin: auto;
    color: rgba(0, 0, 0, 0.4);
    transition: color 0.15s linear;
  }

  &:hover,
  :focus {
    text-decoration: none;

    & i {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Options = styled(Row)`
  flex: 1;
  align-self: stretch;
`;

export const Option = styled(MenuItem)`
  flex: 1;
`;

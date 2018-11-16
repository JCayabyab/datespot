import styled from "styled-components";

export const LoadingIcon = styled.img`
  height: 50px;
  width: 50px;
`

export const MenuItem = styled.a`
  text-decoration: none;
  background-color: inherit;
  transition: background-color 0.15s linear;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #df1515;
    text-decoration: none;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Text = styled.div`
  font-family: 'Quicksand', sans-serif;
  color: #fff;
  font-weight: bold;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
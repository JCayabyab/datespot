import styled, { keyframes } from "styled-components";

const bounce = keyframes`
from { transform: translate3d(0, 0, 0);     }
  to   { transform: translate3d(0, 50px, 0); }
`;

export const LoadingIcon = styled.img`
  height: 50px;
  width: 50px;
`

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
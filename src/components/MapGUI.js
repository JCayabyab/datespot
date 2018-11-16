import React, { Component } from "react";
import MapContainer from "./MapContainer";
import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MapGUI = ({ pos }) => (
  <Wrapper>
    <Header />
    <MapContainer pos={pos} />
    <div>Footer</div>
  </Wrapper>
);
export default MapGUI;

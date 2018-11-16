import React, { Component } from "react";
import MapContainer from "./MapContainer";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MapGUI = ({ pos }) => (
  <Wrapper>
    <Header />
    <MapContainer pos={pos} />
    <Footer pos={pos} />
  </Wrapper>
);
export default MapGUI;

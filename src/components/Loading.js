import React from "react";
import { Center, LoadingIcon } from "../styled";
import { Text } from "../styled";
import logo from "./datespotLogo.png";

const Loading = () => (
  <Center style={{ flexDirection: "column" }}>
    <LoadingIcon src={logo} />
    <Text>Getting your location...</Text>
  </Center>
);

export default Loading;

import React from "react";
import { Center, LoadingIcon } from "../styled";
import { Text } from "../styled";

const Loading = () => (
  <Center style={{ flexDirection: "column" }}>
    <LoadingIcon
      src={`http://www.i2symbol.com/images/symbols/love/white_heart_suit_u2661_icon_256x256.png`}
    />
    <Text>Getting your location...</Text>
  </Center>
);

export default Loading;

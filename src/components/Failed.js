import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import styled from "styled-components";
import { Text } from "../styled";

const Wrapper = styled.div`
  max-width: 700px;
  height: 500px;
`;

const Failed = () => (
  <Wrapper className="container">
    <div>
      <Text style={{ textAlign: "center" }}>
        Sorry! We couldn't find your location.
      </Text>
    </div>
    <SearchBar />
  </Wrapper>
);

export default Failed;

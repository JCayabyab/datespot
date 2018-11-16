import React from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 400px;
`;

const Failed = () => (
  <Wrapper>
    <SearchBar />
  </Wrapper>
);

export default Failed;

import React from "react";
import { Row, Text, MenuItem } from "../styled";
import { connect } from "react-redux";
import styled from "styled-components";

const HeaderWrapper = styled(Row)`
  @media (min-width: 768px) {
    height: 40px;
    align-items: center;
  }
`;

const Header = ({ place, description }) => {
  const directionsURL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
    place.name
  )}&destination_place_id=${encodeURI(place.place_id)}`;
  return (
    <HeaderWrapper>
      <Text style={{ fontWeight: "normal" }} className="col-xs-12 col-md-3">
        <div>{description}</div>
      </Text>
      <Text className="col-xs-12 col-md-6">
        <div>{place.name || "..."}</div>
      </Text>
      <MenuItem
        className="col-xs-12 col-md-3"
        rel="noopener noreferrer"
        href={directionsURL}
        target="_blank"
        style={{ height: "40px" }}
      >
        <Text style={{ fontWeight: "normal" }}>Directions</Text>
      </MenuItem>
    </HeaderWrapper>
  );
};

export default connect(({ place, description }) => ({ place, description }))(
  Header
);

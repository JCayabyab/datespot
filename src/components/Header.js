import React from "react";
import { Row, Text, MoreInfo } from "../styled";
import { connect } from "react-redux";
import styled from "styled-components";

const HeaderWrapper = styled(Row)`
  @media (min-width: 768px) {
    height: 50px;
  }
  align-items: center;
`;

const Header = ({ place, description }) => {
  const placeURL = `https://www.google.com/maps/search/?api=1&query=${encodeURI(
    place.name
  )}&query_place_id=${encodeURI(place.place_id)}`;

  // object for optional href
  const detailsProps = {
    className: "col-xs-12 col-md-3",
    rel: "noopener noreferrer",
    target: "_blank"
  };

  // disable the button if no results are shown.
  if (place.place_id) {
    detailsProps.href = placeURL;
  } else {
    detailsProps.disabled = true;
  }

  return (
    <HeaderWrapper>
      <Text style={{ fontWeight: "normal" }} className="col-xs-12 col-md-3">
        <div>{description}</div>
      </Text>
      <Text className="col-xs-12 col-md-6">
        <div>{place.name || "..."}</div>
      </Text>
      <MoreInfo {...detailsProps}>
        <Text style={{ fontWeight: "normal" }}>
          More info <i className="fas fa-arrow-right"/>
        </Text>
        <div />
      </MoreInfo>
    </HeaderWrapper>
  );
};

export default connect(({ place, description }) => ({ place, description }))(
  Header
);

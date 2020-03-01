import React from "react";
import { Row, Text, MoreInfo } from "../styled";
import { connect } from "react-redux";
import styled from "styled-components";

const HeaderWrapper = styled(Row)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  justify-content: space-between;
  align-items: stretch;

  & > * {
    flex: 1;
    height: 50px;
  }
`;

const Header = ({ place, description }) => {
  const placeURL = `https://www.google.com/maps/search/?api=1&query=${encodeURI(
    place.name
  )}&query_place_id=${encodeURI(place.place_id)}`;

  // object for optional href
  const detailsProps = {
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
      <Text style={{ fontWeight: "normal" }}>
        <div>{description}</div>
      </Text>
      <Text>
        <div>{place.name || "..."}</div>
      </Text>
      <MoreInfo {...detailsProps}>
        <Text style={{ fontWeight: "normal" }}>
          More info <i className="fas fa-arrow-right" />
        </Text>
      </MoreInfo>
    </HeaderWrapper>
  );
};

export default connect(({ place, description }) => ({ place, description }))(
  Header
);

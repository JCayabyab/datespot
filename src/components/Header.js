import React from "react";
import { Row, Text } from "../styled";
import { connect } from "react-redux";

const Header = ({ place }) => {
  console.log(place);
  const directionsURL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
    place.name
  )}&destination_place_id=${encodeURI(place.place_id)}`;
  return (
    <Row>
      <Text className="col-sm-12 col-md-4">Item</Text>
      <Text className="col-sm-12 col-md-8">{place.name}</Text>
      <a className="col-sm-12 col-md-12" href={directionsURL} target="_blank">
        <Text>Directions</Text>
      </a>
    </Row>
  );
};

export default connect(state => ({ place: state.place }))(Header);

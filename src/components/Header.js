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
      <Text className="col-sm-12 col-md-4">Fall in love at</Text>
      <Text className="col-sm-12 col-md-8">{place.name}</Text>
      <a className="col-sm-12 col-md-12" rel="noopener noreferrer" href={directionsURL} target="_blank">
        <Text style={{ textAlign: "center" }}>Directions</Text>
      </a>
    </Row>
  );
};

export default connect(state => ({ place: state.place }))(Header);
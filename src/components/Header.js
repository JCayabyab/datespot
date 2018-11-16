import React from "react";
import { Row, Text, MenuItem } from "../styled";
import { connect } from "react-redux";


const Header = ({ place }) => {
  console.log(place);
  const directionsURL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURI(
    place.name
  )}&destination_place_id=${encodeURI(place.place_id)}`;
  return (
    <Row>
      <Text style={{textAlign: "center"}} className="col-xs-12 col-md-3">Fall in love at</Text>
      <Text style={{textAlign: "center"}} className="col-xs-12 col-md-6">{place.name || "..."}</Text>
      <MenuItem
        className="col-xs-12 col-md-3"
        rel="noopener noreferrer"
        href={directionsURL}
        target="_blank"
      >
        <Text style={{ textAlign: "center" }}>Directions</Text>
      </MenuItem>
    </Row>
  );
};

export default connect(state => ({ place: state.place }))(Header);

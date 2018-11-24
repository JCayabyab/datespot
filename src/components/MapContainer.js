import React, { Component } from "react";
import { Marker } from "google-maps-react";
import Map from "./Map";
import { connect } from "react-redux";

class MapContainer extends Component {
  renderMarker() {
    // render a marker of the destination if there is one found.
    // This checks for the possibility of no results.
    const { place } = this.props;
    if (place.geometry) {
      const placePos = place.geometry.location;
      return <Marker position={placePos} />;
    }
  }

  render() {
    const { pos } = this.props;
    return (
      <Map
        google={window.google}
        zoom={11}
        initialCenter={pos}
        dest={
          this.props.place.geometry ? this.props.place.geometry.location : null
        }
      >
        {this.renderMarker()}
        <Marker position={pos} />
      </Map>
    );
  }
}

function mapStateToProps(state) {
  return { place: state.place };
}

export default connect(mapStateToProps)(MapContainer);

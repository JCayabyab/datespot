import React, { Component } from "react";
import { Marker, GoogleApiWrapper } from "google-maps-react";
import Map from "./Map";
import keys from "../utils/keys";
import { connect } from "react-redux";

class Container extends Component {
  renderMarker() {
    const { place } = this.props;
    if (place.geometry) {
      const placePos = place.geometry.location;
      return <Marker position={placePos} />;
    }
  }

  render() {
    const mapStyle = {
      width: "100%",
      height: "100%"
    };
    const { pos } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={mapStyle}
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

export default GoogleApiWrapper({ apiKey: keys.googleKey })(
  connect(mapStateToProps)(Container)
);

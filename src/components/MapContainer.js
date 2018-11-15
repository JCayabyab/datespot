import React, { Component } from "react";
import { Marker, GoogleApiWrapper } from "google-maps-react";
import Map from "./Map";
import keys from "../utils/keys";
import { connect } from "react-redux";

class Container extends Component {
  state = { pos: false, locnChecked: false };

  componentDidMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = pos.coords;
        this.setState({
          pos: {
            lat: coords.latitude,
            lng: coords.longitude
          },
          locnChecked: true
        });
      });
    } else {
      this.setState({
        locnChecked: true
      });
    }
  }

  renderMarker() {
    const { place } = this.props;
    if (place.geometry) {
      const placePos = place.geometry.location;
      return <Marker position={placePos} />;
    }
  }

  render() {
    const mapStyle = {
      width: "100vw",
      height: "100vh"
    };
    const { pos, locnChecked } = this.state;

    if (locnChecked) {
      if (pos !== false) {
        return (
          <Map
            google={this.props.google}
            zoom={11}
            style={mapStyle}
            initialCenter={this.state.pos}
            dest={this.props.place.geometry ? this.props.place.geometry.location : null}
          >
            {this.renderMarker()}
            <Marker position={this.state.pos} />
          </Map>
        );
      } else {
        return <div>Location Failed</div>;
      }
    } else {
      return <div>Loading</div>;
    }
  }
}

function mapStateToProps(state) {
  return { place: state.place };
}

export default GoogleApiWrapper({ apiKey: keys.googleKey })(
  connect(mapStateToProps)(Container)
);

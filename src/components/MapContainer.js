import React, { Component } from "react";
import { Marker, GoogleApiWrapper } from "google-maps-react";
import Map from "./Map";
import keys from "../utils/keys";

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
          }
        });
      });
    }
    this.setState({
      locnChecked: true
    });
  }

  render() {
    const mapStyle = {
      width: "100vw",
      height: "100vh"
    };
    const { pos, locnChecked } = this.state;

    if (locnChecked) {
      if (pos) {
        return (
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyle}
            initialCenter={this.state.pos}
          >
            <Marker />
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

export default GoogleApiWrapper({ apiKey: keys.googleKey })(Container);

import React, { Component } from "react";

import MapGUI from "./MapGUI";
import { Center } from "../styled";
import Loading from "./Loading";
import Failed from "./Failed";
import { connect } from "react-redux";
import { getLocation } from "../actions";

class Home extends Component {
  state = { locnChecked: false };

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const { latitude, longitude } = pos.coords;
          this.props.getLocation(latitude, longitude);
          this.setState({
            locnChecked: true
          });
        },
        err => {
          if (err) {
            this.setState({ locnChecked: true });
          }
        }
      );
    } else {
      this.setState({
        locnChecked: true
      });
    }
  }

  render() {
    const { locnChecked } = this.state;
    const { location } = this.props;

    if (locnChecked) {
      if (location) {
        return <MapGUI pos={location} />;
      } else {
        return (
          <Center>
            <Failed />
          </Center>
        );
      }
    } else {
      return (
        <Center>
          <Loading />
        </Center>
      );
    }
  }
}

export default connect(
  state => ({ location: state.location }),
  { getLocation }
)(Home);

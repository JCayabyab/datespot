import React, { Component } from "react";

import Container from "./Container";
import { Center } from "../styled";
import Loading from "./Loading";
import Failed from "./Failed";

class Home extends Component {
  state = { pos: false, locnChecked: false };

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const coords = pos.coords;
          this.setState({
            pos: {
              lat: coords.latitude,
              lng: coords.longitude
            },
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
    const { locnChecked, pos } = this.state;

    if (locnChecked) {
      if (pos) {
        return (
          <div>
            <Container pos={pos} />
          </div>
        );
      } else {
        return (
          <Center>
            <Failed/>
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

export default Home;

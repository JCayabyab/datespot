import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { getLocation } from "../../actions";
import { connect } from "react-redux";
import "./searchbar.css";

import {
  SearchBarContainer,
  SearchInputContainer,
  SearchInput,
  ClearButton,
  AutocompleteContainer
} from "./styles";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      errorMessage: ""
    };
  }

  handleChange = address => {
    this.setState({
      address,
      errorMessage: ""
    });
  };

  handleSelect = selected => {
    this.setState({ isGeocoding: true, address: selected });
    geocodeByAddress(selected)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        this.props.getLocation(lat, lng);
      })
      .catch(error => {
        console.log("error", error); // eslint-disable-line no-console
      });
  };

  handleCloseClick = () => {
    this.setState({
      address: ""
    });
  };

  handleError = (status, clearSuggestions) => {
    console.log("Error from Google Maps API", status); // eslint-disable-line no-console
    this.setState({ errorMessage: status }, () => {
      clearSuggestions();
    });
  };

  render() {
    const { address, errorMessage } = this.state;

    return (
      <div>
        <PlacesAutocomplete
          onChange={this.handleChange}
          value={address}
          onSelect={this.handleSelect}
          onError={this.handleError}
          shouldFetchSuggestions={address.length > 2}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => {
            return (
              <SearchBarContainer>
                <SearchInputContainer>
                  <SearchInput
                    {...getInputProps({
                      placeholder: "Enter your location..."
                    })}
                  />
                  {this.state.address.length > 0 && (
                    <ClearButton onClick={this.handleCloseClick}>x</ClearButton>
                  )}
                </SearchInputContainer>
                {suggestions.length > 0 && (
                  <AutocompleteContainer>
                    {suggestions.map(suggestion => {
                      const className = classnames("Demo__suggestion-item", {
                        "Demo__suggestion-item--active": suggestion.active
                      });

                      return (
                        /* eslint-disable react/jsx-key */
                        <div
                          {...getSuggestionItemProps(suggestion, { className })}
                        >
                          <strong>
                            {suggestion.formattedSuggestion.mainText}
                          </strong>{" "}
                          <small>
                            {suggestion.formattedSuggestion.secondaryText}
                          </small>
                        </div>
                      );
                      /* eslint-enable react/jsx-key */
                    })}
                    {/* <div className="Demo__dropdown-footer">
                      <div>
                      <img
                      src={require('../images/powered_by_google_default.png')}
                      className="Demo__dropdown-footer-image"
                      />
                      </div>
                    </div> */}
                  </AutocompleteContainer>
                )}
              </SearchBarContainer>
            );
          }}
        </PlacesAutocomplete>
        {errorMessage.length > 0 && (
          <div className="Demo__error-message">{this.state.errorMessage}</div>
        )}
      </div>
    );
  }
}

const isObject = val => {
  return typeof val === "object" && val !== null;
};

const classnames = (...args) => {
  const classes = [];
  args.forEach(arg => {
    if (typeof arg === "string") {
      classes.push(arg);
    } else if (isObject(arg)) {
      Object.keys(arg).forEach(key => {
        if (arg[key]) {
          classes.push(key);
        }
      });
    } else {
      throw new Error(
        "`classnames` only accepts string or object as arguments"
      );
    }
  });

  return classes.join(" ");
};

export default connect(
  null,
  { getLocation }
)(SearchBar);

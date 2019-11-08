import React from "react";
import { ActionsForSearcher } from "../Actions/CustomerActions";
import PropTypes from "prop-types";
import { SearchedFor } from "./SearchedFor";

export class Searcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: ""
    };
    this.firstNameFieldChange = this.firstNameFieldChange.bind(this);
    this.lastNameFieldChange = this.lastNameFieldChange.bind(this);
    this.sendSearch = this.sendSearch.bind(this);
  }

  firstNameFieldChange(e) {
    this.setState({ firstname: capitalize(e.target.value.toLowerCase()) });
  }
  lastNameFieldChange(e) {
    this.setState({ lastname: capitalize(e.target.value.toLowerCase()) });
  }
  sendSearch() {
    ActionsForSearcher.finder(this.state);
  }

  render() {
    let content = "";
    const lookingFor = this.state;

    if (this.props.searchResults.readState.success) {
      if (this.props.searchResults.details.length === 0) {
        content = "No matching users";
      } else {
        content = (
          <SearchedFor
            {...this.props}
            enteredValues={lookingFor}
            searchResults={this.props.searchResults}
          />
        );
      }
    } else if (this.props.searchResults.readState.failure) {
      content = (
        <div className="alert alert-danger" role="alert">
          Couldn&apos;t gather data!
        </div>
      );
    }

    const display = (
      <div className="card">
        <div className="card-header">
          <div className="input-group input-group-lg mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="firstNameLabel">
                First Name
              </span>
            </div>
            <input
              type="text"
              onChange={this.firstNameFieldChange}
              className="form-control"
              placeholder="enter first name here"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <div className="input-group-prepend">
              <span className="input-group-text" id="lastNameLabel">
                Last Name
              </span>
            </div>
            <input
              type="text"
              onChange={this.lastNameFieldChange}
              className="form-control"
              placeholder="enter last name here"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <button
            type="button"
            className="btn btn-warning btn-sm btn-block btn-outline-primary"
            onClick={this.sendSearch}
          >
            Search
          </button>
        </div>
        <div className="card-body">{content}</div>
      </div>
    );
    return <div>{display}</div>;
  }
}

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

Searcher.defaultProps = {
  searchResults: {
    details: [],
    readState: {
      pending: false,
      success: false,
      failure: false
    },
    error: ""
  }
};
Searcher.propTypes = {
  searchResults: PropTypes.object.isRequired
};

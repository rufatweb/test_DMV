import React from "react";
import { Person } from "./Person";
import PropTypes from "prop-types";

export class SearchedFor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredValues: props.inputValues,
      matched: [],
      sugs: []
    };
  }

  addPersonToList(details) {
    return <Person {...details} />;
  }

  render() {
    let content = "";
    let suggestions = "";

    if (this.props.searchResults.readState.pending) {
      content = (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    if (this.props.searchResults.readState.success) {
      this.props.searchResults.details.forEach(el => {
        if (
          el.firstName == this.props.enteredValues.firstname &&
          el.lastName == this.props.enteredValues.lastname
        ) {
          this.state.matched.push(el);
        } else {
          this.state.sugs.push(el);
        }
      });

      content =
        this.state.matched.length !== 0 ? (
          <div>
            <h1 className="card-header">Found</h1>
            <table className="table card-body">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Birthdate</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.matched.map(this.addPersonToList, this)}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h3>No matches..</h3>
          </div>
        );

      suggestions =
        this.state.sugs.length !== 0 && this.state.matched < 1 ? (
          <div>
            <h5 className="card-header">Did you mean?</h5>
            <table className="table card-body">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Birthdate</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{this.state.sugs.map(this.addPersonToList, this)}</tbody>
            </table>
          </div>
        ) : (
          <br />
        );
    }

    if (this.props.searchResults.readState.failure) {
      content = (
        <div className="alert alert-danger" role="alert">
          Couldn&apos;t gather data!
        </div>
      );
    }

    return (
      <div className="">
        {content}
        {suggestions}
      </div>
    );
  }
}

SearchedFor.propTypes = {
  searchResults: PropTypes.object.isRequired,
  enteredValues: PropTypes.object.isRequired,
  inputValues: PropTypes.object
};

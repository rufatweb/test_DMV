import React from "react";
import { Person } from "./Person";
import { ActionsForPeople } from "../Actions/CustomerActions";
import PropTypes from "prop-types";

export class People extends React.Component {
  addPersonToList(details) {
    return <Person {...details} />;
  }

  componentDidMount() {
    ActionsForPeople.gatherPpl();
  }

  render() {
    let content = "";

    if (this.props.listOfPeople.readState.pending) {
      content = (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    if (this.props.listOfPeople.readState.success) {
      content = (
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
            {this.props.listOfPeople.ppl.map(this.addPersonToList, this)}
          </tbody>
        </table>
      );
    }

    if (this.props.listOfPeople.readState.failure) {
      content = (
        <div className="alert alert-danger" role="alert">
          Couldn&apos;t gather data!
        </div>
      );
    }

    return (
      <div className="">
        <h1 className="card-header">Users</h1>
        {content}
      </div>
    );
  }
}

People.propTypes = {
  listOfPeople: PropTypes.object.isRequired
};

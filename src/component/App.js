"use strict";

import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Constant/Home";
import { Header } from "./Constant/Header";
import { People } from "../oldies/People";
import { Creator } from "../oldies/Person/Creator";
import { Application } from "./Create/CreateApplication";
import * as Store from "../Store/CustomerStores";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: {},
      customers: {},
      vehicles: {}
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch />
        <Route exact path="/" component={Home} />
        <Route
          path="/Applications"
          render={props => (
            <Application allApplications={this.state.customers} />
          )}
        />
        <Route
          path="/Customers"
          render={props => (
            <People  listOfPeople={this.state.listOfPeople} />
          )}
        />
        <Route
          path="/Vehicles"
          render={props => (
            <Creator {...props} creationStatus={this.state.creationStatus} />
          )}
        />
        <Switch />
      </div>
    );
  }

  //   componentDidMount() {
  //     Store.ForPeople.addChangeListener(this._allPeople.bind(this));
  //     Store.ForSearcher.addChangeListener(this._searchedFor.bind(this));
  //     Store.ForCreator.addChangeListener(this._newAccount.bind(this));
  //   }

  //   componentWillUnmount() {
  //     Store.ForPeople.removeChangeListener(this._allPeople.bind(this));
  //     Store.ForSearcher.removeChangeListener(this._searchedFor.bind(this));
  //     Store.ForCreator.removeChangeListener(this._newAccount.bind(this));
  //   }

  //   _allPeople() {
  //     this.setState({ listOfPeople: Store.ForPeople.allPpl() });
  //   }

  //   _searchedFor() {
  //     this.setState({ searchResults: Store.ForSearcher.getResults() });
  //   }

  //   _newAccount() {
  //     this.setState({ creationStatus: Store.ForCreator.newCreation() });
  //   }
}

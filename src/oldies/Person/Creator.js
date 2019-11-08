import React from "react";
import { ActionsForCreator } from "../../Actions/CustomerActions"; //
import PropTypes from "prop-types";

export class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      bday: "",
      email: "",
      street1: "",
      street2: "",
      city: "",
      state: "",
      zip: "",
      ssn: ""
    };

    this.firstNameFieldChange = this.firstNameFieldChange.bind(this);
    this.lastNameFieldChange = this.lastNameFieldChange.bind(this);
    this.bdayFieldChange = this.bdayFieldChange.bind(this);
    this.ssnFieldChange = this.ssnFieldChange.bind(this);
    this.emailFieldChange = this.emailFieldChange.bind(this);
    this.street1FieldChange = this.street1FieldChange.bind(this);
    this.street2FieldChange = this.street2FieldChange.bind(this);
    this.cityFieldChange = this.cityFieldChange.bind(this);
    this.stateFieldChange = this.stateFieldChange.bind(this);
    this.zipFieldChange = this.zipFieldChange.bind(this);
    this.startCreation = this.startCreation.bind(this);
    this.displayOptions = this.displayOptions.bind(this);
  }

  //*the field changes are bound to the class
  //*when the field's value changes the event triggers an event
  //*the event is passed as a param and the targets value is stored in the component's state
  firstNameFieldChange(e) {
    this.setState({ firstname: capitalize(e.target.value.toLowerCase()) });
  }
  lastNameFieldChange(e) {
    this.setState({ lastname: capitalize(e.target.value.toLowerCase()) });
  }
  bdayFieldChange(e) {
    this.setState({ bday: e.target.value });
  }
  ssnFieldChange(e) {
    this.setState({ ssn: e.target.value });
  }
  emailFieldChange(e) {
    this.setState({ email: e.target.value.toLowerCase() });
  }
  street1FieldChange(e) {
    this.setState({ street1: e.target.value.toUpperCase() });
  }
  street2FieldChange(e) {
    this.setState({ street2: e.target.value.toUpperCase() });
  }
  cityFieldChange(e) {
    this.setState({ city: e.target.value.toUpperCase() });
  }
  stateFieldChange(e) {
    this.setState({ state: e.target.value.toUpperCase() });
  }
  zipFieldChange(e) {
    this.setState({ zip: e.target.value });
  }
  //submit values when form is complete
  startCreation() {
    ActionsForCreator.create(this.state); //**! Place Action Method Here and pass the state of the component */
  }

  render() {
    let display = ""; //displays what should be rendered from customer
    if (this.props.modal === true) {
      //if its in a modal
      display = this.displayOptions("modal");
    } else {
      display = this.displayOptions(this.props.appType);
    }

    return <div className="">{display}</div>; //return the display wrapped in a div
  }

  displayOptions(displayType) {
    let currentDisplay = ""; //what will be returned as the display
    switch (displayType) {
      //display for vehicle registration
      case "vehicle_reg":
        currentDisplay = (
          <div className="">
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.firstNameFieldChange}
                className="form-control"
                placeholder="Enter first name.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  First Name
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.lastNameFieldChange}
                className="form-control"
                placeholder="Enter last name.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Last Name
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="date"
                onChange={this.bdayFieldChange}
                className="form-control"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Birthdate
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.ssnFieldChange}
                className="form-control"
                placeholder="Enter Social Security Number"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Social Security Number
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                onChange={this.emailFieldChange}
                className="form-control"
                placeholder="Enter email address.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Email
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.street1FieldChange}
                className="form-control"
                placeholder="Enter line 1 of street address.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Street 1
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.street2FieldChange}
                className="form-control"
                placeholder="Enter line 2 of street address.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Street 2
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.cityFieldChange}
                className="form-control"
                placeholder="Enter city of residence.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  City
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.stateFieldChange}
                className="form-control"
                maxLength="2"
                placeholder="Enter state abbreviation.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  State
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.zipFieldChange}
                className="form-control"
                placeholder="Enter zip code.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Zip Code
                </span>
              </div>
            </div>
            <hr />
          </div>
        );
        break;

      //display for address change
      case "address_change":
        currentDisplay = (
          <div className="">
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.firstNameFieldChange}
                className="form-control"
                placeholder="Enter first name.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  First Name
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.lastNameFieldChange}
                className="form-control"
                placeholder="Enter last name.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Last Name
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.ssnFieldChange}
                className="form-control"
                placeholder="Enter Social Security Number"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Social Security Number
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.street1FieldChange}
                className="form-control"
                placeholder="Enter line 1 of street address.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  New Street 1
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.street2FieldChange}
                className="form-control"
                placeholder="Enter line 2 of street address.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  New Street 2
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.cityFieldChange}
                className="form-control"
                placeholder="Enter city of residence.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  New City
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.stateFieldChange}
                className="form-control"
                maxLength="2"
                placeholder="Enter state abbreviation.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  New State
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.zipFieldChange}
                className="form-control"
                placeholder="Enter zip code.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  New Zip Code
                </span>
              </div>
            </div>
            <hr />
          </div>
        );
        break;

      //display for renew driver's license
      case "renew_license":
        currentDisplay = (
          <div className="">
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.firstNameFieldChange}
                className="form-control"
                placeholder="Enter first name.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  First Name
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.lastNameFieldChange}
                className="form-control"
                placeholder="Enter last name.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Last Name
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.ssnFieldChange}
                className="form-control"
                placeholder="Enter Social Security Number"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Social Security Number
                </span>
              </div>
            </div>
          </div>
        );
        break;

      //display for new driver's license registration
      case "new_license":
        currentDisplay = (
          <div className="">
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.firstNameFieldChange}
                className="form-control"
                placeholder="Enter first name.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  First Name
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.lastNameFieldChange}
                className="form-control"
                placeholder="Enter last name.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Last Name
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="date"
                onChange={this.bdayFieldChange}
                className="form-control"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Birthdate
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.ssnFieldChange}
                className="form-control"
                placeholder="Enter Social Security Number"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Social Security Number
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                onChange={this.emailFieldChange}
                className="form-control"
                placeholder="Enter email address.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Email
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.street1FieldChange}
                className="form-control"
                placeholder="Enter line 1 of street address.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Street 1
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.street2FieldChange}
                className="form-control"
                placeholder="Enter line 2 of street address.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Street 2
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.cityFieldChange}
                className="form-control"
                placeholder="Enter city of residence.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  City
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.stateFieldChange}
                className="form-control"
                maxLength="2"
                placeholder="Enter state abbreviation.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  State
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.zipFieldChange}
                className="form-control"
                placeholder="Enter zip code.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Zip Code
                </span>
              </div>
            </div>
            <hr />
          </div>
        );
        break;

      //display for a modal / quick create
      case "modal":
        currentDisplay = (
          <div className="">
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.firstNameFieldChange}
                className="form-control"
                placeholder="Enter first name.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  First Name
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.lastNameFieldChange}
                className="form-control"
                placeholder="Enter last name.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Last Name
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="date"
                onChange={this.bdayFieldChange}
                className="form-control"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Birthdate
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.ssnFieldChange}
                className="form-control"
                placeholder="Enter Social Security Number"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Social Security Number
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                onChange={this.emailFieldChange}
                className="form-control"
                placeholder="Enter email address.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Email
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.street1FieldChange}
                className="form-control"
                placeholder="Enter line 1 of street address.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Street 1
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.street2FieldChange}
                className="form-control"
                placeholder="Enter line 2 of street address.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Street 2
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.cityFieldChange}
                className="form-control"
                placeholder="Enter city of residence.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  City
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.stateFieldChange}
                className="form-control"
                maxLength="2"
                placeholder="Enter state abbreviation.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  State
                </span>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                onChange={this.zipFieldChange}
                className="form-control"
                placeholder="Enter zip code.."
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  Zip Code
                </span>
              </div>
            </div>
            <hr />
            <button
              onClick={this.startCreation} //triggers the create action
              className="btn btn-block btn-primary btn-lg"
            >
              SUBMIT
            </button>
            <hr />
          </div>
        );
        break;

      //nothing yet
      default:
        currentDisplay = "";
        break;
    }

    return currentDisplay; //return the display to be rendered
  }
}
const capitalize = s => {
  //accepts a string and capitalizes the first char
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

//validate proptypes
Creator.propTypes = {
  creationStatus: PropTypes.object
};

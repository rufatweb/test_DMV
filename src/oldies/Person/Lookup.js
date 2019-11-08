import React, { useState, useEffect } from "react";
import {MDBBtn} from 'mdbreact'
import PropTypes from "prop-types";
import axios from "axios";

/**
 * Todo: create class for returning data from a lookup field
 * * CONVERSE WITH TEAM ABOUT HOW THEY WANT TO DISPLAY THINGS
 * ? What will they pass as props? / Should there be seperate return components?
 * @param props would be ideal if it was an objetct containing an id field
 */
export function Lookup(props) {
  console.log(props)
  var record = "";
  var display = "";
  var firstname = "";
  var lastname = "";
  var ssn = "";

  const firstNameFieldChange = (e) => {
    firstname = e.target.value;
    console.log(firstname)
  }
  const lastNameFieldChange = (e) => {
    lastname = e.target.value;
    console.log(lastname)
  }
  const ssnFieldChange = (e) => {
    ssn = e.target.value;
    console.log(ssn)
  }

  switch (props.type) {
    case "customer":
      display = (
        <div className="">
          <div className="input-group mb-3">
            <input
              type="text"
              onChange={firstNameFieldChange}
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
              onChange={lastNameFieldChange}
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
              onChange={ssnFieldChange}
              className="form-control"
              placeholder="Enter Social Security Number"
            />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                Social Security Number
              </span>
            </div>
          </div>
          <MDBBtn color="primary" onClick={getRecord(firstname,lastname)}>
            Enter
          </MDBBtn>
        </div>
      );
      break;
  }

  const getRecord = async (firstname, lastname, ssn) => {
    // console.log(info); //log what we are requesting
    const url = `http://localhost:33244/api/People/Lookup?FN=${firstname}&LN=${lastname}&SSN=${ssn}`; // !ADD URL HERE! INCLUDING ID PARAM NAME (ex: 'https://domain.io/api/Controller/Method?Param='\\
    const res = await axios.get(`${url}`); //make get request

    const recordData = await res.data;
    record = recordData;
    console.log(record);
  };

  if (record == "") {
    return display;
  } else {
    console.log(record);
    return record;
  }
}

Lookup.propTypes = {
  type: PropTypes.string
};

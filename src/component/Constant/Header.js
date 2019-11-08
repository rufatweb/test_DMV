"use strict";

import React from "react";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";


export const Header = () => {
  return (
    <MDBNav color="primary" className="nav-tabs nav-justified">
      <MDBNavItem>
          <MDBNavLink exact to="/">
            <img width="100px" height="20px" src="./Images/home.png" />
          </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/Applications">Applications</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/Customers">Customers</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/Vehicles">Vehicles</MDBNavLink>
      </MDBNavItem>
    </MDBNav>
  );
};
    // export const Header = () => {
    //   return (
    //     <ul className="nav nav-tabs">
    //       <li className="nav-item">
    //         <Link to="/" className="navbar-brand">
    //           <img width="100px" height="40px" src="./Images/dmv_logo.jpg" />
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/" replace>
    //           Home
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/Applications" replace>
    //           Applications
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/Customers" replace>
    //           Customers
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/Vehicles" replace>
    //           Vehicles
    //         </Link>
    //       </li>
    //     </ul>
    //   );
    // };

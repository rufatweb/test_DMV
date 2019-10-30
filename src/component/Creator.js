import React from 'react'
import { ActionsForCreator } from '../action/AllActions';
import PropTypes from 'prop-types';


export class Creator extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        personInfo: {
          firstname: '',
          lastname: '',
          bday:'',
          ssn:'',
          email:'',
          street1:'',
          street2:'',
          city:'',
          state:'',
          zip:''
        },
        creationStatus:props
    }
  }


  //input fields
  render() {
    let display = '';
    
    if(this.props.creationStatus.readState.success){
      display = (
        <div className="alert alert-success" role="alert">
          <h1 className="alert-heading">Success!!</h1>
          <hr/>
          <h6 className="mb-0">Created account for {this.state.personInfo.firstname} {this.state.personInfo.lastname}, successfully.</h6>
        </div>      
      )
    }else if(this.props.creationStatus.readState.failure){
      <div className="alert alert-danger" role="alert">
      <h1 className="alert-heading">Uh oh!</h1>
      <hr/>
      <h6 className="mb-0">Could not create account for {this.state.personInfo.firstname} {this.state.personInfo.lastname}.</h6>
      <p>Refresh and try again..</p>
    </div>      
}else{
      display = (
        <div className='card-header'>
          <div className="input-group mb-3">
            <input type="text" onChange={ this.firstNameFieldChange.bind(this) } className="form-control" placeholder="Enter first name.."/>
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">First Name</span>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="text" onChange={ this.lastNameFieldChange.bind(this)} className="form-control" placeholder="Enter last name.."/>
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">Last Name</span>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="date" onChange={ this.bdayFieldChange.bind(this) } className="form-control"/>
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">Birthdate</span>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="text" onChange={ this.ssnFieldChange.bind(this) } className="form-control" placeholder="Enter Social Security Number"/>
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">Social Security Number</span>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="email" onChange={ this.emailFieldChange.bind(this) } className="form-control" placeholder="Enter email address.."/>
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">Email</span>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="text" onChange={ this.street1FieldChange.bind(this) } className="form-control" placeholder="Enter line 1 of street address.."/>
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">Street 1</span>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="text" onChange={ this.street2FieldChange.bind(this) } className="form-control" placeholder="Enter line 2 of street address.."/>
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">Street 2</span>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="text" onChange={ this.cityFieldChange.bind(this) } className="form-control" placeholder="Enter city of residence.."/>
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">City</span>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="text" onChange={ this.stateFieldChange.bind(this) } className="form-control" maxLength='2' placeholder="Enter state abbreviation.."/>
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">State</span>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="text" onChange={ this.zipFieldChange.bind(this) } className="form-control" placeholder="Enter zip code.."/>
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">Zip Code</span>
            </div>
          </div>
          <button onClick={ this.startCreation.bind(this) } className="btn btn-block btn-warning btn-lg btn-outline-primary">
              CLICK HERE WHEN YOU&apos;RE DONE
          </button>
        </div>
      )
    }

    return (
        <div className=''>
            {display}
        </div>
    )
  }

  //submit button
  startCreation() {
    ActionsForCreator.create(this.state.personInfo)
  }
  firstNameFieldChange(e) {
    this.state.personInfo.firstname = capitalize(e.target.value.toLowerCase())
  }
  lastNameFieldChange(e){
    this.state.personInfo.lastname = capitalize(e.target.value.toLowerCase())
  }
  bdayFieldChange(e){
    this.state.personInfo.bday = e.target.value;
  }
  ssnFieldChange(e){
    this.state.personInfo.ssn = e.target.value;
  }
  emailFieldChange(e){
    this.state.personInfo.email = e.target.value.toLowerCase();
  }
  street1FieldChange(e){
    this.state.personInfo.street1 = e.target.value.toUpperCase();
  }
  street2FieldChange(e){
    this.state.personInfo.street2 = e.target.value !=="" ? e.target.value.toUpperCase() : "";
  }
  cityFieldChange(e){
    this.state.personInfo.city = e.target.value.toUpperCase();
  }
  stateFieldChange(e){
    this.state.personInfo.state = e.target.value.toUpperCase();
  }
  zipFieldChange(e){
    this.state.personInfo.zip = e.target.value;
  }
}
  
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

//creator action
Creator.propTypes = {
  creationStatus: PropTypes.object.isRequired
}
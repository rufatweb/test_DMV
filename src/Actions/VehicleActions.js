import Dispatcher from "../Dispatcher/AppDispatcher";
import axios from "axios";

//***ACTIONS PERFORMED BY CUSTOMER COMPONENTS***\\
export const VehicleActions = {
  getFullList: function() {
    Dispatcher.dispatch({
      actionType: "gathering_vehicle_list"
    });
    axios
      .get("http://tc-dmv.azurewebsites.net/api/People/GetAll?") //http://tc-dmv.azurewebsites.net
      .then(res => {
        Dispatcher.dispatch({
          actionType: "vehicle_list_success",
          data: res.data
        });
      })
      .catch(e => {
        console.log(e);
        Dispatcher.dispatch({
          actionType: "vehicle_list_failed"
        });
      });
  },
  createVehicle: function(person) {
    Dispatcher.dispatch({
      actionType: "creating_vehicle"
    });
    axios
      .post(
        `https://localhost:44322/api/People/Create?newFN=${person.firstname}&newLN=${person.lastname}&newBDAY=${person.bday}&newSSN=${person.ssn}&newEMAIL=${person.email}&newSTREET1=${person.street1}&newSTREET2=${person.street2}&newCITY=${person.city}&newSTATE=${person.state}&newZIP=${person.zip}`
      )
      .then(res => {
        Dispatcher.dispatch({
          actionType: "create_vehicle_success",
          data: res.data
        });
      })
      .catch(e => {
        console.log(e);
        Dispatcher.dispatch({
          actionType: "create_vehicle_failed"
        });
      });
  },
  updateVehicle: function(person) {
    Dispatcher.dispatch({
      actionType: "updating_vehicle"
    });
    axios
      .post(
        `https://localhost:44322/api/People/Create?newFN=${person.firstname}&newLN=${person.lastname}&newBDAY=${person.bday}&newSSN=${person.ssn}&newEMAIL=${person.email}&newSTREET1=${person.street1}&newSTREET2=${person.street2}&newCITY=${person.city}&newSTATE=${person.state}&newZIP=${person.zip}`
      )
      .then(res => {
        Dispatcher.dispatch({
          actionType: "update_vehicle_success",
          data: res.data
        });
      })
      .catch(e => {
        console.log(e);
        Dispatcher.dispatch({
          actionType: "update_vehicle_failed"
        });
      });
  },
  selectVehicle: function(id) {
    Dispatcher.dispatch({
      actionType: "selecting_vehicle"
    });
    let uri = "https://sstack.crm.dynamics.com/api/data/v9.1/madmv_ma_vehicles?$filter=madmv_vehicleid%20eq%20"+ id;;
    let config = {
        'OData-MaxVersion': 4.0,
        'OData-Version': 4.0,
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    }

    // make axios put call
    axios.get(uri, config)
        .then(res => {
          console.log(res);
            Dispatcher.dispatch({
                actionType: "selected_successfully",
                data: res.data
            });
        })
        .catch( (error) => {
            console.log(error);
            Dispatcher.dispatch({
                actionType: "selected_failed"
            });
        });

},
  deleteVehicle: function(person) {
    Dispatcher.dispatch({
      actionType: "deleting_vehicle"
    });
    axios
      .post(
        `https://localhost:44322/api/People/Create?newFN=${person.firstname}&newLN=${person.lastname}&newBDAY=${person.bday}&newSSN=${person.ssn}&newEMAIL=${person.email}&newSTREET1=${person.street1}&newSTREET2=${person.street2}&newCITY=${person.city}&newSTATE=${person.state}&newZIP=${person.zip}`
      )
      .then(res => {
        Dispatcher.dispatch({
          actionType: "delete_vehicle_success",
          data: res.data
        });
      })
      .catch(e => {
        console.log(e);
        Dispatcher.dispatch({
          actionType: "delete_vehicle_failed"
        });
      });
  }
};


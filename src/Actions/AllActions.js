import Dispatcher from "../Dispatcher/AppDispatcher";
import axios from "axios";

//***ACTIONS PERFORMED BY THE PEOPLE COMPONENT***\\
export const ActionsForPeople = {
  gatherPpl: function() {
    Dispatcher.dispatch({
      actionType: "gathering_entire_list"
    });
    axios
      .get("https://localhost:44322/api/People/GetAll?") //http://tc-dmv.azurewebsites.net
      .then(res => {
        Dispatcher.dispatch({
          actionType: "has_entire_list",
          data: res.data
        });
      })
      .catch(e => {
        console.log(e);
        Dispatcher.dispatch({
          actionType: "failed_to_fetch_entire_list"
        });
      });
  }
};
//***ACTIONS PERFORMED BY THE CREATOR COMPONENT***\\
export const ActionsForSearcher = {
  finder: function(name) {
    Dispatcher.dispatch({
      actionType: "now_searching"
    });
    axios
      .get("https://localhost:44322/api/People/Find?", {
        //http://tc-dmv.azurewebsites.net
        params: {
          FN: name.firstname,
          LN: name.lastname
        }
      })
      .then(res => {
        Dispatcher.dispatch({
          actionType: "done_searching",
          data: res.data
        });
      })
      .catch(e => {
        console.log(e);
        Dispatcher.dispatch({
          actionType: "failed_to_search"
        });
      });
  }
};
//***ACTIONS PERFORMED BY THE CREATOR COMPONENT***\\
export const ActionsForCreator = {
  create: function(person) {
    Dispatcher.dispatch({
      actionType: "creating_account"
    });
    axios
      .post(
        `https://localhost:44322/api/People/Create?newFN=${person.firstname}&newLN=${person.lastname}&newBDAY=${person.bday}&newSSN=${person.ssn}&newEMAIL=${person.email}&newSTREET1=${person.street1}&newSTREET2=${person.street2}&newCITY=${person.city}&newSTATE=${person.state}&newZIP=${person.zip}`
      )
      .then(res => {
        Dispatcher.dispatch({
          actionType: "created_successfully",
          data: res.data
        });
      })
      .catch(e => {
        console.log(e);
        Dispatcher.dispatch({
          actionType: "creation_failed"
        });
      });
  }
};

export const ActionsForUpdater = {
  update: function(person) {
    Dispatcher.dispatch({
      actionType: "updating_record"
    });
    axios
      .post(
        `https://localhost:44322/api/People/Create?newFN=${person.firstname}&newLN=${person.lastname}&newBDAY=${person.bday}&newSSN=${person.ssn}&newEMAIL=${person.email}&newSTREET1=${person.street1}&newSTREET2=${person.street2}&newCITY=${person.city}&newSTATE=${person.state}&newZIP=${person.zip}`
      )
      .then(res => {
        Dispatcher.dispatch({
          actionType: "updated_successfully",
          data: res.data
        });
      })
      .catch(e => {
        console.log(e);
        Dispatcher.dispatch({
          actionType: "update_failed"
        });
      });
  }
};

//     updatePerson: function (person) {
//         Dispatcher.dispatch({
//             actionType: 'attempting_update'
//         });
//         axios.put({
//             url: 'https://localhost:44322/api/People/Update?',
//             params: {
//                 idNum:person.id,
//                 newFN: person.firstName,
//                 newLN: person.lastName,
//                 newEMAIL: person.email,
//                 newSTREET1: person.street1,
//                 newSTREET2: person.street2,
//                 newCITY: person.city,
//                 newSTATE: person.state,
//                 newZIP: person.zip
//             }
//         }).then(res => {
//             Dispatcher.dispatch({
//                 actionType: 'update_successful',
//                 data: res.data
//             });
//         })
//         .catch((e) => {
//             console.log(e);
//             Dispatcher.dispatch({
//                 actionType: 'update_failed'
//             });
//         })
//     }
// }

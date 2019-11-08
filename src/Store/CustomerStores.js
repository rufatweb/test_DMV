import Dispatcher from "../Dispatcher/AppDispatcher";
import { EventEmitter } from "events";

const CHANGE = "change";
//*********FOR PEOPLE COMPONENT*********\\
let _customers = {
  allCustomers: {
    data: [],
    pending: false,
    success: false,
    failure: false
  },
  selectedCustomer: {
    data: {},
    pending: false,
    success: false,
    failure: false
  },
  creationStatus: {
    id: "",
    pending: false,
    success: false,
    failure: false
  },
  updateStatus: {
    pending: false,
    success: false,
    failure: false
  },
  deleteStatus: {
    pending: false,
    success: false,
    failure: false
  },
  selectStatus: {
    pending: false,
    success: false,
    failure: false
  },
  error: ""
};
class StoreForCustomers extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE, cb);
  }
  removeChangeListener(cb) {
    this.removeListener(CHANGE, cb);
  }
  emitChange() {
    this.emit(CHANGE);
  }
  getAll() {
    return _customers.allCustomers;
  }
  getSelected() {
    return _customers.selectedCustomer;
  }
  newCustomer() {
    return _customers.creationStatus;
  }
  updateCustomer() {
    return _customers.updateStatus;
  }
  deleteCustomer() {
    return _customers.deleteStatus;
  }

  resetReadState(section) {
    section.pending = false;
    section.success = false;
    section.failure = false;
  }
}
export const ForCustomers = new StoreForCustomers();
//*****************END*************************\\

Dispatcher.register(action => {
  //***ACTIONS FOR CUSTOMER COMPONENT***\\
  switch (action.actionType) {
    //***ACTIONS FOR RETRIEVING***\\
    case "customer_list_success":
      ForCustomers.resetReadState(_customers.allCustomers);
      _customers.allCustomers.data = action.data;
      _customers.allCustomers.success = true;
      ForCustomers.emitChange();
      break;
    case "customer_list_failed":
      ForCustomers.resetReadState(_customers.allCustomers);
      _customers.allCustomers.failure = true;
      ForCustomers.emitChange();
      break;
    case "gathering_customer_list":
      ForCustomers.resetReadState(_customers.allCustomers);
      _customers.allCustomers.pending = true;
      ForCustomers.emitChange();
      break;
    case "selecting_customer":
        ForCustomers.resetReadState(_customers.selectedCustomer);
        _customers.selectedCustomer.pending = true;
        ForCustomers.emitChange();
        break;
    case "selected_successfully":
        ForCustomers.resetReadState(_customers.selectedCustomer);
        _customers.selectedCustomer.data = action.data;
        _customers.selectedCustomer.success = true;
        ForCustomers.emitChange();
        break;
    case "selected_failed":
        ForCustomers.resetReadState(_customers.selectedCustomer);
        _customers.selectedCustomer.failure = true;
        ForCustomers.emitChange();
        break;  

    //***ACTIONS FOR CREATING***\\
    case "create_customer_success":
      ForCustomers.resetReadState(_customers.creationStatus);
      _customers.creationStatus.id = action.data;
      _customers.creationStatus.success = true;
      ForCustomers.emitChange();
      break;
    case "create_customer_failed":
      ForCustomers.resetReadState(_customers.creationStatus);
      _customers.creationStatus.failure = true;
      ForCustomers.emitChange();
      break;
    case "creating_customer":
      ForCustomers.resetReadState(_customers.creationStatus);
      _customers.creationStatus.pending = true;
      ForCustomers.emitChange();
      break;

    //***ACTIONS FOR UPDATING***\\
    case "update_customer_success":
      ForCustomers.resetReadState(_customers.updateStatus);
      _customers.updateStatus.success = true;
      ForCustomers.emitChange();
      break;
    case "update_customer_failed":
      ForCustomers.resetReadState(_customers.updateStatus);
      _customers.updateStatus.failure = true;
      ForCustomers.emitChange();
      break;
    case "updating_customer":
      ForCustomers.resetReadState(_customers.updateStatus);
      _customers.updateStatus.pending = true;
      ForCustomers.emitChange();
      break;

    //***ACTIONS FOR DELETING***\\
    case "delete_customer_success":
      ForCustomers.resetReadState(_customers.deleteStatus);
      _customers.deleteStatus.success = true;
      ForCustomers.emitChange();
      break;
    case "delete_customer_failed":
      ForCustomers.resetReadState(_customers.deleteStatus);
      _customers.deleteStatus.failure = true;
      ForCustomers.emitChange();
      break;
    case "deleting_customer":
      ForCustomers.resetReadState(_customers.deleteStatus);
      _customers.deleteStatus.pending = true;
      ForCustomers.emitChange();
      break;

    //***NOTHING'S HAPPENING***\\
    default:
      return;
  }
});

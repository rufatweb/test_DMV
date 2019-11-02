import Dispatcher from "../Dispatcher/AppDispatcher";
import { EventEmitter } from "events";

const CHANGE = "change";
//*********FOR PEOPLE COMPONENT*********\\
let _listOfPeople = {
  data: {
    ppl: [],
    readState: {
      pending: false,
      success: false,
      failure: false
    },
    error: ""
  }
};
class StoreForPeople extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE, cb);
  }

  emitChange() {
    this.emit(CHANGE);
  }

  allPpl() {
    return _listOfPeople.data;
  }

  resetReadState() {
    _listOfPeople.data.readState = {
      pending: false,
      success: false,
      failure: false
    };
  }
}
export const ForPeople = new StoreForPeople();
//*****************END*************************\\

//*********FOR SEARCHER COMPONENT*********\\
let _searching = {
  results: {
    details: [],
    readState: {
      pending: false,
      success: false,
      failure: false
    },
    error: ""
  }
};
class StoreForSearcher extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE, cb);
  }

  emitChange() {
    this.emit(CHANGE);
  }

  getResults() {
    return _searching.results;
  }

  resetReadState() {
    _searching.results.readState = {
      pending: false,
      success: false,
      failure: false
    };
  }
}
export const ForSearcher = new StoreForSearcher();
//*****************END*************************\\

//*********FOR CREATOR COMPONENT*********\\
let _creating = {
  status: {
    details: [],
    readState: {
      pending: false,
      success: false,
      failure: false
    },
    error: ""
  }
};
class StoreForCreator extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE, cb);
  }

  emitChange() {
    this.emit(CHANGE);
  }

  newCreation() {
    return _creating.status;
  }

  resetReadState() {
    _creating.status.readState = {
      pending: false,
      success: false,
      failure: false
    };
  }
}
export const ForCreator = new StoreForCreator();
//*****************END*************************\\

//*********FOR UPDATING COMPONENT*********\\
let _updating = {
  status: {
    results: [],
    readState: {
      pending: false,
      success: false,
      failure: false
    },
    error: ""
  }
};
class StoreForUpdater extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE, cb);
  }

  emitChange() {
    this.emit(CHANGE);
  }

  updated() {
    return _updating.status;
  }

  resetReadState() {
    _creating.status.readState = {
      pending: false,
      success: false,
      failure: false
    };
  }
}
export const ForUpdater = new StoreForUpdater();
//*****************END*************************\\

//***GLOBAL DISPATCHER***\\
Dispatcher.register(action => {
  switch (action.actionType) {
    //***ACTIONS FOR PEOPLE COMPONENT***\\
    case "has_entire_list":
      ForPeople.resetReadState();
      _listOfPeople.data.ppl = action.data;
      _listOfPeople.data.readState.success = true;
      ForPeople.emitChange();
      break;
    case "failed_to_fetch_entire_list":
      ForPeople.resetReadState();
      _listOfPeople.data.readState.failure = true;
      ForPeople.emitChange();
      break;
    case "gathering_entire_list":
      ForPeople.resetReadState();
      _listOfPeople.data.readState.pending = true;
      ForPeople.emitChange();
      break;
    //************END************\\
    //***ACTIONS FOR SEARCHER COMPONENT***\\
    case "done_searching":
      ForSearcher.resetReadState();
      _searching.results.details = action.data;
      _searching.results.readState.success = true;
      ForSearcher.emitChange();
      break;
    case "failed_to_search":
      ForSearcher.resetReadState();
      _searching.results.readState.failure = true;
      ForSearcher.emitChange();
      break;
    case "now_searching":
      ForSearcher.resetReadState();
      _searching.results.readState.pending = true;
      ForSearcher.emitChange();
      break;
    //************END************\\
    //***ACTIONS FOR CREATOR COMPONENT***\\
    case "created_successfully":
      ForCreator.resetReadState();
      _creating.status.details = action.data;
      _creating.status.readState.success = true;
      ForCreator.emitChange();
      break;
    case "creation_failed":
      ForCreator.resetReadState();
      _creating.status.readState.failure = true;
      ForCreator.emitChange();
      break;
    case "creating_account":
      ForCreator.resetReadState();
      _creating.status.readState.pending = true;
      ForCreator.emitChange();
      break;
    //************END************\\
    //***ACTIONS FOR UPDATER***\\
    case "updated_successfully":
      ForUpdater.resetReadState();
      _updating.status.results = action.data;
      _updating.status.readState.success = true;
      ForUpdater.emitChange();
      break;
    case "update_failed":
      ForUpdater.resetReadState();
      _updating.status.readState.failure = true;
      ForUpdater.emitChange();
      break;
    case "updating_record":
      ForUpdater.resetReadState();
      _updating.status.readState.pending = true;
      ForUpdater.emitChange();
      break;
    //************END************\
    //***NOTHING'S HAPPENING***\\
    default:
      return;
  }
});

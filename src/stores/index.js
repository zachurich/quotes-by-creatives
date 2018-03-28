import * as actions from "../actions/";
import { reducer } from "../reducers/";
import { createStore, bindActionCreators } from "redux";

export function mapStateToProps(state) {
  const {
    quote,
    quotes,
    liveInput,
    doesExist,
    quoteAppend,
    quoteComplete,
    submittedInput
  } = state;
  return {
    quote,
    quotes,
    liveInput,
    doesExist,
    quoteAppend,
    quoteComplete,
    submittedInput
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

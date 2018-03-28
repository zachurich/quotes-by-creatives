import { host } from "../../config";

const initialState = {
  quote: {},
  quotes: [],
  liveInput: "",
  doesExist: false,
  quoteAppend: "",
  quoteComplete: true,
  submittedInput: ""
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "WATCH_INPUT":
      return Object.assign({}, state, {
        liveInput: action.liveInput
      });
    case "CHECK_PERSON":
      return Object.assign({}, state, {
        doesExist: action.doesExist
      });
    case "FETCH_RANDOM_QUOTE":
      return Object.assign({}, state, {
        quoteAppend: "",
        quotes: action.quotes,
        submittedInput: state.liveInput,
        quote: action.quotes[Math.floor(Math.random() * action.quotes.length)]
      });
    case "APPEND_TO_QUOTE":
      return Object.assign({}, state, {
        quoteAppend: (state.quoteAppend += action.char)
      });
    case "QUOTE_COMPLETE":
      return Object.assign({}, state, {
        quoteComplete: action.bool
      });
    default:
      return state;
  }
}

const initialState = {
  quote: {},
  quotes: [],
  loading: false,
  liveInput: '',
  doesExist: false,
  quoteAppend: '',
  quoteComplete: true,
  submittedInput: ''
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'WATCH_INPUT':
      return Object.assign({}, state, {
        liveInput: action.liveInput
      });
    case 'CHECK_PERSON':
      return Object.assign({}, state, {
        doesExist: action.doesExist
      });
    case 'INIT_LOADING':
      return Object.assign({}, state, {
        loading: true
      });

    case 'DONE_LOADING':
      return Object.assign({}, state, {
        loading: false
      });
    case 'FETCH_RANDOM_QUOTE':
      return Object.assign({}, state, {
        quoteAppend: '',
        quotes: action.quotes,
        submittedInput: state.liveInput,
        quote: action.quotes[Math.floor(Math.random() * action.quotes.length)]
      });
    case 'QUOTE_COMPLETE':
      return Object.assign({}, state, {
        quoteComplete: action.bool
      });
    default:
      return state;
  }
}

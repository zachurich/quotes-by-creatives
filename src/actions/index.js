export function watchInput(liveInput) {
  return {
    type: 'WATCH_INPUT',
    liveInput
  };
}

export function isLoading(state) {
  if (state == true) {
    return {
      type: 'INIT_LOADING',
      state
    };
  } else {
    return {
      type: 'DONE_LOADING',
      state
    };
  }
}

export function checkPerson(response) {
  let doesExist = false;

  if (response) {
    doesExist = true;
  }

  return {
    type: 'CHECK_PERSON',
    doesExist
  };
}

export function getQuote(quotes) {
  return {
    type: 'FETCH_RANDOM_QUOTE',
    quotes
  };
}

export function toggleComplete(bool) {
  return {
    type: 'QUOTE_COMPLETE',
    bool
  };
}

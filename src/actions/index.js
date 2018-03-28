export function watchInput(liveInput) {
  return {
    type: "WATCH_INPUT",
    liveInput
  };
}

export function checkPerson(response) {
  let doesExist = false;

  if (typeof response === "object" && response.title) {
    console.log(response);
    doesExist = true;
  }

  return {
    type: "CHECK_PERSON",
    doesExist
  };
}

export function getQuote(quotes) {
  return {
    type: "FETCH_RANDOM_QUOTE",
    quotes
  };
}

export function appendToQuote(char) {
  return {
    type: "APPEND_TO_QUOTE",
    char
  };
}

export function toggleComplete(bool) {
  return {
    type: "QUOTE_COMPLETE",
    bool
  };
}

import React from "react";
import { render } from "react-dom";
import Main from "./Main";
import { connect, Provider } from "react-redux";
import { mapStateToProps, mapDispatchToProps, store } from "./stores/";

import "./styles/style.scss";

export const Index = connect(mapStateToProps, mapDispatchToProps)(Main);

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
);

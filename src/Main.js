import React, { Component } from "react";
import Quote from "./components/Quote";
import QuoteSource from "./components/QuoteSource";
import Footer from "./components/Footer";
import wikiquote from "wikiquote";
import PropTypes from "prop-types";

import { host } from "../config";

class Main extends Component {
  typeAway = (str, speed) => {
    let i = 0;
    let typeLoop;
    this.props.toggleComplete(false);
    return (typeLoop = () => {
      if (i < str.length) {
        this.props.appendToQuote(str[i]);
        i++;
        setTimeout(typeLoop, speed);
      } else {
        this.props.toggleComplete(true);
      }
    })();
  };
  checkIfPersonExists = liveInput => {
    this.props.watchInput(liveInput);
    let endpoint = `${host}get-person?search=${liveInput}`;
    let exist = false;

    fetch(endpoint, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .then(response => this.props.checkPerson(response))
      .catch(err => this.props.checkPerson(err));
  };
  fetchQuote = () => {
    let endpoint = `${host}list-quotes`;
    const search = `?search=${this.props.liveInput}`;
    if (this.props.liveInput) {
      endpoint += search;
    }
    fetch(endpoint, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(err => console.log(err))
      .then(data => this.props.getQuote(data))
      .then(() => this.typeAway(this.props.quote.quote, 0.05));
  };
  render() {
    return (
      <div className="wrapper">
        <Quote data={this.props.quote} quoteAppend={this.props.quoteAppend} />
        <QuoteSource
          input={this.props.submittedInput}
          quoteInfo={this.props.quote}
          fetchQuote={this.fetchQuote}
          liveInput={this.props.liveInput}
          handleInput={this.props.watchInput}
          quoteComplete={this.props.quoteComplete}
          personDoesExist={this.props.doesExist}
          checkIfPersonExists={this.checkIfPersonExists}
        />
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  quote: PropTypes.object,
  liveInput: PropTypes.string,
  watchInput: PropTypes.func,
  quoteAppend: PropTypes.string,
  appendToQuote: PropTypes.func,
  submittedInput: PropTypes.string,
  quoteComplete: PropTypes.bool
};

export default Main;

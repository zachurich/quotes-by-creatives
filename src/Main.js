import React, { Component } from 'react';
import Quote from './components/Quote';
import QuoteSource from './components/QuoteSource';
import Loading from './components/Loading';
import Footer from './components/Footer';
import wikiquote from 'wikiquote';
import PropTypes from 'prop-types';

import { host } from '../config';

let timer;
class Main extends Component {
  checkIfPersonExists = liveInput => {
    this.props.watchInput(liveInput);
    let endpoint = `${host}check-quotes?search=${liveInput}`;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fetch(endpoint, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .then(response => this.props.checkPerson(response))
        .catch(err => this.props.checkPerson(err));
    }, 250);
  };
  fetchQuote = () => {
    this.props.isLoading(true);
    let endpoint = `${host}list-quotes`;
    const search = `?search=${this.props.liveInput}`;
    if (this.props.liveInput) {
      endpoint += search;
    }
    fetch(endpoint, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .catch(err => console.log(err))
      .then(data => {
        this.props.isLoading(false);
        this.props.getQuote(data);
      });
  };
  render() {
    return (
      <div className="wrapper">
        {this.props.loading && <Loading />}
        {/* <Loading /> */}
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
  isLoading: PropTypes.func,
  watchInput: PropTypes.func,
  quoteAppend: PropTypes.string,
  appendToQuote: PropTypes.func,
  submittedInput: PropTypes.string,
  quoteComplete: PropTypes.bool,
  loading: PropTypes.bool
};

export default Main;

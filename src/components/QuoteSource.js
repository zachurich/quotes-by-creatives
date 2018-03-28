import React, { Component } from "react";
import PropTypes from "prop-types";

export default class QuoteSource extends Component {
  render() {
    const source = this.props.quoteInfo ? this.props.quoteInfo.source : "";
    return (
      <div className="quote-source">
        {/* <div className="quote-source--image">
          <img src={this.props.img} />
        </div> */}
        <div className="quote-source--info">
          <h3>{this.props.input}</h3>
          <p>{source}</p>
        </div>
        {this.props.quoteComplete ? (
          <div className="quote-source--actions">
            <input
              type="text"
              placeholder="Enter a name..."
              onChange={e => this.props.checkIfPersonExists(e.target.value)}
              value={this.props.liveInput}
            />
            <a
              className={`button ${
                this.props.personDoesExist ? "active" : null
              }`}
              onClick={() => this.props.fetchQuote()}
            >
              New Quote
            </a>
          </div>
        ) : null}
      </div>
    );
  }
}

QuoteSource.propTypes = {
  doesExist: PropTypes.bool,
  img: PropTypes.string,
  input: PropTypes.string,
  fetchQuote: PropTypes.func,
  handleInput: PropTypes.func,
  quoteInfo: PropTypes.object,
  checkIfPersonExists: PropTypes.func
};

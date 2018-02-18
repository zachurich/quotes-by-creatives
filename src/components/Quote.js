import React, { Component } from "react";

import Quote from "svg-react-loader?name=Quote!../quote.svg";

export default class extends Component {
  render() {
    return (
      <div className="quote">
        <p>
          <span className="quote-open">
            <Quote />
          </span>
          {this.props.data.quote}
          <span className="quote-closed">
            <Quote />
          </span>
        </p>

        <div className="quote--new">
          <a
            className="button"
            onClick={this.props.getQuote && this.props.getImg}
          >
            New Quote
          </a>
        </div>
      </div>
    );
  }
}

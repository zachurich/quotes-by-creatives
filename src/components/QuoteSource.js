import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div className="quote-source">
        <div className="quote-source--image">
          <img src={this.props.img} />
        </div>
        <div className="quote-source--name">
          <h3>{this.props.quoteInfo.name}Lorem Ipsum</h3>
        </div>
        <div className="quote-source--actions">
          <a className="button" href={this.props.quoteInfo.source || "/"}>
            Source
          </a>
          <a className="button" onClick={() => this.props.getQuote()}>
            New Quote
          </a>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div className="quote-source">
        <div className="quote-source--image">
          <img src={this.props.img} />
        </div>
        <div className="quote-source--name">
          <p>{this.props.quoteInfo.name}Lorem Ipsum</p>
        </div>
        <div className="quote-source--source">
          <a className="button" href={this.props.quoteInfo.source || "/"}>
            Source
          </a>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

import Logo from "svg-react-loader?name=Logo!../logo.svg";

export default class extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer--branding">
          <a href="/">
            <span>
              <Logo />
            </span>
            <p>Quotes About Stuff</p>
          </a>
        </div>
        <div className="footer--copyright">
          © {new Date().getFullYear()} Quotes By Creatives
        </div>
      </div>
    );
  }
}
